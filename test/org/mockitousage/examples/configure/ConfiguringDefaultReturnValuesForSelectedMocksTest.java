/*
 * Copyright (c) 2007 Mockito contributors
 * This program is made available under the terms of the MIT License.
 */
package org.mockitousage.examples.configure;
import static org.mockito.Mockito.*;

import org.junit.Test;

public class ConfiguringDefaultReturnValuesForSelectedMocksTest extends CanMakeMocksSmart {
    
    @Test
    public void shouldAllowConfiguringReturnValuesForSelectedMocks() throws Exception {
        //create smart mock
        MyObject smartMock = mock(MyObject.class);
        beSmart(smartMock);
        //create ordinary mock
        MyObject ordinaryMock = mock(MyObject.class);
        
        //returns mock instead of null
        assertNotNull(smartMock.returnMyObject());
        //returns empty string instead of null
        assertEquals("", smartMock.returnString());
        //returns true instead of false
        assertTrue(smartMock.returnBoolean());
        
        //returns defaults
        assertNull(ordinaryMock.returnMyObject());
        assertNull(ordinaryMock.returnString());
        assertFalse(ordinaryMock.returnBoolean());
    }
    
    interface MyObject {
        MyObject returnMyObject();
        String returnString();
        boolean returnBoolean();
    }
}