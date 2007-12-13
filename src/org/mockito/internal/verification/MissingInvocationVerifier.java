package org.mockito.internal.verification;

import org.mockito.exceptions.Exceptions;
import org.mockito.internal.invocation.Invocation;
import org.mockito.internal.invocation.InvocationMatcher;
import org.mockito.internal.invocation.InvocationsCalculator;
import org.mockito.internal.progress.OngoingVerifyingMode;

public class MissingInvocationVerifier implements Verifier {

    public void verify(InvocationsCalculator calculator, InvocationMatcher wanted, OngoingVerifyingMode mode) {
        int actualCount = calculator.countActual(wanted);
        Integer wantedCount = mode.wantedCount();
        boolean atLeastOnce = mode.atLeastOnceMode();
               
        if ((atLeastOnce || wantedCount == 1) && actualCount == 0) {
            reportMissingInvocationError(calculator, wanted);
        }
    }
    
    private void reportMissingInvocationError(InvocationsCalculator calculator, InvocationMatcher wanted) {
        Invocation actual = calculator.findActualInvocation(wanted);
        
        if (actual != null) {
            reportDiscrepancy(wanted, actual);
        } else {
            Exceptions.wantedButNotInvoked(wanted.toString());
        }
    }

    private void reportDiscrepancy(InvocationMatcher wantedInvocation, Invocation actualInvocation) {
        String wanted = wantedInvocation.toString();
        String actual = actualInvocation.toString();
        //TODO this dummy string equal logic doesnt work when matchers come into play
        if (wanted.equals(actual)) {
            wanted = wantedInvocation.getInvocation().toStringWithArgumentTypes();
            actual = actualInvocation.toStringWithArgumentTypes();
        }
        if (wanted.equals(actual)) {
            wanted = wantedInvocation.toStringWithSequenceNumber();
            actual = actualInvocation.toStringWithSequenceNumber();
        }
        
        Exceptions.wantedInvocationDiffersFromActual(wanted, actual, actualInvocation.getStackTrace());
    }
}
