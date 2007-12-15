/*
 * Copyright (c) 2007 Mockito contributors
 * This program is made available under the terms of the MIT License.
 */
package org.mockito.internal.matchers;


public class EndsWith implements IArgumentMatcher {

    private final String suffix;

    public EndsWith(String suffix) {
        this.suffix = suffix;
    }

    public boolean matches(Object actual) {
        return (actual instanceof String) && ((String) actual).endsWith(suffix);
    }

    public void appendTo(StringBuilder buffer) {
        buffer.append("endsWith(\"" + suffix + "\")");
    }
}
