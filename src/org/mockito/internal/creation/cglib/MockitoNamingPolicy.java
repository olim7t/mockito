package org.mockito.internal.creation.cglib;

import net.sf.cglib.core.DefaultNamingPolicy;

public class MockitoNamingPolicy extends DefaultNamingPolicy {
    
    public static final MockitoNamingPolicy INSTANCE = new MockitoNamingPolicy(); 
    
    @Override
    protected String getTag() {
        return "ByMockitoWithCGLIB";
    }
}