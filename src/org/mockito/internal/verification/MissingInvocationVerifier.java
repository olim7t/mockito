/*
 * Copyright (c) 2007 Mockito contributors 
 * This program is made available under the terms of the MIT License.
 */
package org.mockito.internal.verification;

import org.mockito.exceptions.Reporter;
import org.mockito.internal.invocation.Invocation;
import org.mockito.internal.invocation.InvocationMatcher;
import org.mockito.internal.invocation.InvocationsCalculator;
import org.mockito.internal.invocation.InvocationsPrinter;
import org.mockito.internal.progress.VerificationMode;

public class MissingInvocationVerifier implements Verifier {
    
    private final Reporter reporter = new Reporter();

    public void verify(InvocationsCalculator calculator, InvocationMatcher wanted, VerificationMode mode) {
        if (!mode.isExplicit()) {
            return;
        }
        
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
            InvocationsPrinter printer = new InvocationsPrinter(wanted, actual);
            reporter.wantedInvocationDiffersFromActual(printer.printWanted(), printer.printActual(), actual.getStackTrace());
        } else {
            reporter.wantedButNotInvoked(wanted.toString());
        }
    }
}
