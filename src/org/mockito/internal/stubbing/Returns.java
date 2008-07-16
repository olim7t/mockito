package org.mockito.internal.stubbing;

import org.mockito.invocation.InvocationOnMock;
import org.mockito.stubbing.Answer;

public class Returns implements Answer<Object> {

    private final Object value;

    public Returns(Object value) {
        this.value = value;
    }

    public Returns() {
        this(null);
    }

    public Object answer(InvocationOnMock invocation) throws Throwable {
        return value;
    }

    public boolean hasReturnValue() {
        return this.value != null;
    }
}