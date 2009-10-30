/*
 * Copyright (c) 2007 Mockito contributors
 * This program is made available under the terms of the MIT License.
 */
package org.mockito.internal.invocation.realmethod;

import java.io.Serializable;

import org.mockito.cglib.proxy.MethodProxy;

public interface HasCGLIBMethodProxy extends Serializable {

    MethodProxy getMethodProxy();
}
