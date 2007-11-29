/*
 * Copyright (c) 2007 Mockito contributors 
 * This program is made available under the terms of the MIT License.
 */
package org.mockito.usage;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import java.util.*;

import org.junit.*;
import org.mockito.Strictly;
import org.mockito.exceptions.*;
import org.mockito.internal.StateResetter;

/**
 * invalid state happens if:
 *    -unfinished stubbing
 *    -unfinished stubVoid
 *    -stubbing without actual method call
 *    -verify without actual method call
 *
 * we should aim to detect invalid state in following scenarios:
 *    -on method call on mock
 *    -on verify
 *    -on verifyZeroInteractions
 *    -on verifyNoMoreInteractions
 *    -on stub
 *    -on stubVoid
 *
 * obviously we should consider if it is really important to cover all those naughty usage
 */
@SuppressWarnings("unchecked")
public class InvalidUsageTest {

    private LinkedList mock;
    private LinkedList mockTwo;

    @Before
    @After
    public void resetState() {
        StateResetter.reset();
        mock = mock(LinkedList.class);
        mockTwo = mock(LinkedList.class);
    }
    
    @Test(expected=MockitoException.class)
    public void shouldRequireArgumentsWhenVerifyingNoMoreInteractions() {
        verifyNoMoreInteractions();
    }
    
    @Test(expected=MockitoException.class)
    public void shouldRequireArgumentsWhenVerifyingZeroInteractions() {
        verifyZeroInteractions();
    }
    
    @Test(expected=MockitoException.class)
    public void shouldNotCreateStrictlyWithoutMocks() {
        createStrictOrderVerifier();
    }
    
    @Test(expected=MockitoException.class)
    public void shouldNotVerifyStrictlyUnfamilarMocks() {
        Strictly strictly = createStrictOrderVerifier(mock);
        strictly.verify(mockTwo).clear();
    }
    
    @Test(expected=MockitoException.class)
    public void shouldNotAllowSettingInvalidCheckedException() throws Exception {
        stub(mock.add("monkey island")).andThrows(new Exception());
    }
    
    @Test(expected=MockitoException.class)
    public void shouldNotAllowSettingNullThrowable() throws Exception {
        stub(mock.add("monkey island")).andThrows(null);
    }    

    @Test(expected=MissingMethodInvocationException.class)
    public void shouldDetectStubbingWithoutMethodCallOnMock() {
        stub("blah".contains("blah"));
    }

    @Ignore
    @Test
    public void unfinishedStubbingDetectedOnVerify() {
        stub(mock.add("test"));

        try {
            verifyZeroInteractions(mock);
            fail();
        } catch (UnfinishedStubbingException e) {}
    }

    @Ignore
    @Test
    public void unfinishedStubbingDetectedWhenAnotherStubbingIsStarted() {
        stub(mock.add("test"));

        try {
            stub(mock.add("test")).andThrows(new Exception("ssdf"));
            fail();
        } catch (UnfinishedStubbingException e) {}
    }

    @Ignore
    @Test
    public void unfinishedStubbingDetectedMockCalled() {
        stub(mock.add("test"));

        try {
            mock.clear();
            fail();
        } catch (UnfinishedStubbingException e) {}
    }

    @Ignore
    @Test
    public void unfinishedStubbingVoid() {
        stubVoid(mock);

        try {
            mock.clear();
            fail();
        } catch (UnfinishedStubbingException e) {}
    }
}
