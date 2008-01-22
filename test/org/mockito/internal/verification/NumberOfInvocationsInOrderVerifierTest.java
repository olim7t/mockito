/*
 * Copyright (c) 2007 Mockito contributors
 * This program is made available under the terms of the MIT License.
 */
package org.mockito.internal.verification;

import static java.util.Arrays.*;
import static org.junit.Assert.*;
import static org.mockito.internal.progress.VerificationModeImpl.*;

import java.util.LinkedList;

import org.junit.Before;
import org.junit.Test;
import org.mockito.RequiresValidState;
import org.mockito.exceptions.Reporter;
import org.mockito.internal.invocation.Invocation;
import org.mockito.internal.invocation.InvocationBuilder;
import org.mockito.internal.invocation.InvocationMatcher;
import org.mockito.internal.progress.VerificationModeBuilder;

public class NumberOfInvocationsInOrderVerifierTest extends RequiresValidState {

    private NumberOfInvocationsInOrderVerifier verifier;
    private Reporter reporter;
    private InvocationMatcher wanted;
    private LinkedList<Invocation> invocations;
    private InvocationsFinderStub finderStub;
    
    @Before
    public void setup() {
        reporter = new Reporter();
        finderStub = new InvocationsFinderStub();
        verifier = new NumberOfInvocationsInOrderVerifier(finderStub, reporter);
        
        wanted = new InvocationBuilder().toInvocationMatcher();
        invocations = new LinkedList<Invocation>(asList(new InvocationBuilder().toInvocation()));
    }
    
    @Test
    public void shouldNeverVerifyIfModeIsNotInOrder() throws Exception {
        verifier.verify(null, wanted, atLeastOnce());
    }
    
    @Test
    public void shouldPassIfWantedIsZeroAndMatchingChunkIsEmpty() throws Exception {
        assertTrue(finderStub.validMatchingChunkToReturn.isEmpty());
        verifier.verify(invocations, wanted, new VerificationModeBuilder().times(0).inOrder());
    }
    
    @Test
    public void shouldPassIfChunkMatches() throws Exception {
        finderStub.validMatchingChunkToReturn.add(wanted.getInvocation());
        
        verifier.verify(invocations, wanted, new VerificationModeBuilder().times(1).inOrder());
    }
    
//    @Test
//    public void shouldReportTooLittleInvocations() throws Exception {
//        Invocation first = new InvocationBuilder().toInvocation();
//        Invocation second = new InvocationBuilder().toInvocation();
//        finderStub.allMatchingUnverifiedChunksToReturn.addAll(asList(first, second)); 
//        
//        verifier.verify(invocations, wanted, new VerificationModeBuilder().times(4).inOrder());
//        
//        assertEquals(4, reporterStub.wantedCount);
//        assertEquals(2, reporterStub.actualCount);
//        assertSame(second.getStackTrace(), reporterStub.lastActualStackTrace);
//        assertEquals(wanted.toString(), reporterStub.wanted);
//    }
//    
//    @Test
//    public void shouldReportTooManyInvocations() throws Exception {
//        Invocation first = new InvocationBuilder().toInvocation();
//        Invocation second = new InvocationBuilder().toInvocation();
//        finderStub.allMatchingUnverifiedChunksToReturn.addAll(asList(first, second)); 
//        
//        verifier.verify(invocations, wanted, new VerificationModeBuilder().times(1).inOrder());
//        
//        assertEquals(1, reporterStub.wantedCount);
//        assertEquals(2, reporterStub.actualCount);
//        assertSame(second.getStackTrace(), reporterStub.firstUndesired);
//        assertEquals(wanted.toString(), reporterStub.wanted);
//    }
//    
//    @Test
//    public void shouldMarkInvocationsAsVerified() throws Exception {
//        Invocation invocation = new InvocationBuilder().toInvocation();
//        finderStub.allMatchingUnverifiedChunksToReturn.add(invocation);
//        assertFalse(invocation.isVerifiedInOrder());
//        
//        verifier.verify(invocations, wanted, new VerificationModeBuilder().times(1).inOrder());
//        
//        assertTrue(invocation.isVerifiedInOrder());
//    }

//    class ReporterStub extends Reporter {
//        private HasStackTrace lastActualStackTrace;
//        private int actualCount;
//        private int wantedCount;
//        private HasStackTrace firstUndesired;
//        private String wanted;
//
//        @Override public void tooLittleActualInvocationsInOrder(int wantedCount, int actualCount, String wanted, HasStackTrace lastActualStackTrace) {
//            this.wantedCount = wantedCount;
//            this.actualCount = actualCount;
//            this.wanted = wanted;
//            this.lastActualStackTrace = lastActualStackTrace;
//        }
//        
//        @Override public void tooManyActualInvocationsInOrder(int wantedCount, int actualCount, String wanted, HasStackTrace firstUndesired) {
//            this.wantedCount = wantedCount;
//            this.actualCount = actualCount;
//            this.wanted = wanted;
//            this.firstUndesired = firstUndesired;
//        }
//    }
}
