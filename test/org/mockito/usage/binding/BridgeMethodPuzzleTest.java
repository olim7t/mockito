/*
 * Copyright (c) 2007 Mockito contributors 
 * This program is made available under the terms of the MIT License.
 */
package org.mockito.usage.binding;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import static org.mockito.util.ExtraMatchers.hasBridgeMethod;

import org.junit.Test;


/**
 * Bridge method is generated by compiler when erasure in parent class is
 * different. When is different then it means that in runtime we will have
 * overloading rather than overridding Therefore the compiler generates bridge
 * method in Subclass so that erasures are the same, signatures of methods match
 * and overridding is ON.
 */
@SuppressWarnings("unchecked")
public class BridgeMethodPuzzleTest {

    class Super<T> {
        public String say(T t) {
            return "Super says: " + t;
        }
    }
     
    class Sub extends Super<String> {
        @Override
        public String say(String t)  {
            return "Sub says: " + t;
        }
    }
    
    @Test
    public void shouldHaveBridgeMethod() throws Exception {
        Super s = new Sub();
        
        assertEquals("Sub says: Hello", s.say("Hello"));
        
        assertThat(Sub.class, hasBridgeMethod("say"));
        assertThat(s, hasBridgeMethod("say"));
    }
    
    @Test
    public void shouldVerifyCorrectlyWhenBridgeMethodCalled() throws Exception {
        //Super has following erasure: say(Object) which differs from Sub.say(String)
        //mock has to detect it and do the polymorphic call: Sub.say(Object) 
        Super s = mock(Sub.class);
        
        s.say("Hello");
        
        verify(s).say("Hello");
    }
    
    @Test
    public void shouldVerifyCorrectlyWhenBridgeMethodIsNotCalled() throws Exception {
        //no problem here, no polymorphic call
        Sub s = mock(Sub.class);
        
        s.say("Hello");
        
        verify(s).say("Hello");
    }
}