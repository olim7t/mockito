/*
 * Copyright (c) 2010 Mockito contributors
 * This program is made available under the terms of the MIT License.
 */
package org.mockito;

import java.lang.annotation.*;

/**
 * Allows shorthand {@link org.mockito.ArgumentCaptor} creation on fields.
 * <p>Example:
 * <pre>
 * public class Test{
 *
 *    &#64;Captor ArgumentCaptor&lt;AsyncCallback&lt;Foo&gt;&gt; captor;
 *
 *    &#64;Before
 *    public void init(){
 *       MockitoAnnotations.init(this);
 *    }
 *
 *    &#64;Test public void shouldDoSomethingUseful() {
 *       //...
 *       verify(mock.doStuff(captor.capture()));
 *       assertEquals("foo", captor.getValue());
 *    }
 * }
 * </pre>
 * <p>
 * One of the advantages of using &#64;Captor annotation is that you can avoid warnings related capturing complex generic types.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@Documented
public @interface Captor {}
