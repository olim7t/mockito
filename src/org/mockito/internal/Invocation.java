/*
 * Copyright (c) 2007 Mockito contributors 
 * This program is made available under the terms of the MIT License.
 */
package org.mockito.internal;

import java.lang.reflect.Method;

import org.mockito.internal.matchers.ArrayEquals;

public class Invocation {

    private boolean verified;
    private final Object mock;
    private final Method method;
    private final Object[] arguments;

    public Invocation(Object mock, Method method, Object[] args) {
        this.mock = mock;
        this.method = method;
        this.arguments = expandVarArgs(method.isVarArgs(), args);
    }

    private static Object[] expandVarArgs(final boolean isVarArgs,
            final Object[] args) {
        if (!isVarArgs || isVarArgs && args[args.length - 1] != null
                && !args[args.length - 1].getClass().isArray()) {
            return args == null ? new Object[0] : args;
        }
        Object[] varArgs = ArrayEquals.createObjectArray(args[args.length - 1]);
        final int nonVarArgsCount = args.length - 1;
        final int varArgsCount = varArgs.length;
        Object[] newArgs = new Object[nonVarArgsCount + varArgsCount];
        System.arraycopy(args, 0, newArgs, 0, nonVarArgsCount);
        System.arraycopy(varArgs, 0, newArgs, nonVarArgsCount, varArgsCount);
        return newArgs;
    }

    public Object getMock() {
        return mock;
    }

    public Method getMethod() {
        return method;
    }

    public Object[] getArguments() {
        return arguments;
    }

    public boolean equals(Object o) {
        if (o == null || !o.getClass().equals(this.getClass()))
            return false;

        Invocation other = (Invocation) o;

        return this.mock.equals(other.mock) && this.method.equals(other.method)
                && this.equalArguments(other.arguments);
    }

    public int hashCode() {
        throw new UnsupportedOperationException("hashCode() is not implemented");
    }

    private boolean equalArguments(Object[] arguments) {
        if (this.arguments.length != arguments.length) {
            return false;
        }
        for (int i = 0; i < this.arguments.length; i++) {
            Object myArgument = this.arguments[i];
            Object otherArgument = arguments[i];

            if (isPrimitiveParameter(i)) {
                if (!myArgument.equals(otherArgument)) {
                    return false;
                }
            } else {
                if (myArgument != otherArgument) {
                    return false;
                }
            }
        }
        return true;
    }

    private boolean isPrimitiveParameter(int parameterPosition) {
        Class<?>[] parameterTypes = method.getParameterTypes();
        if (method.isVarArgs()) {
            parameterPosition = Math.min(parameterPosition,
                    parameterTypes.length - 1);
        }
        return parameterTypes[parameterPosition].isPrimitive();
    }

    public String getMockAndMethodName() {
        String mockName = Namer.nameForMock(mock);
        return mockName + "." + method.getName();
    }

    public void markVerified() {
        verified = true;
    }

    public boolean isVerified() {
        return verified;
    }
}
