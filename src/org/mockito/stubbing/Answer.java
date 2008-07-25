/*
 * Copyright (c) 2007 Mockito contributors
 * This program is made available under the terms of the MIT License.
 */
package org.mockito.stubbing;

import org.mockito.invocation.InvocationOnMock;

/**
 * Generic interface for stubbing methods with callbacks.
 * <p>
 * Example:
 * 
 * <pre>
 * stub(mock.someMethod(anyString())).toAnswer(new Answer() {
 *     Object answer(InvocationOnMock invocation) {
 *         Object[] args = invocation.getArguments();
 *         Object mock = invocation.getMock();
 *         return "called with arguments: " + args;
 *     }
 * });
 * 
 * //Following prints "called with arguments: foo"
 * System.out.println(mock.someMethod("foo"));
 * </pre>
 * 
 * @param <T> the type to return.
 */
public interface Answer<T> {
    /**
     * @param invocation the invocation on the mock.
     *
     * @return the value to be returned
     *
     * @throws Throwable the throwable to be thrown
     */
    T answer(InvocationOnMock invocation) throws Throwable;
}