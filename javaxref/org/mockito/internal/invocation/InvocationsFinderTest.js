defineStructure(
"InvocationsFinderTest",function(factory){with(factory) { typeTable(["org.mockito.internal.progress.VerificationModeImpl","cl"],["org.mockito.util.ExtraMatchers","cl"],["java.util.Arrays","cl"],["java.util.Collections","cl"],["java.util.LinkedList","cl"],["java.util.List","it"],["org.junit.Before","an"],["org.junit.Test","an"],["org.mockito.TestBase","cl"],["org.mockito.MockitoAnnotations","cl"],["org.mockito.MockitoAnnotations$Mock","st an"],["org.mockito.exceptions.base.HasStackTrace","it"],["org.mockito.internal.progress.VerificationModeBuilder","cl"],["org.mockitousage.IMethods","it"],["org.mockito.internal.invocation.InvocationsFinderTest","cl"],["org.mockito.internal.invocation.Invocation","cl"],["org.mockito.internal.invocation.InvocationsFinder","cl"],["java.lang.Exception","cl"],["org.mockito.internal.invocation.InvocationBuilder","cl"],["java.lang.Object","cl"],["java.util.Collection","it"],["org.mockito.internal.invocation.InvocationMatcher","cl"],["org.mockito.util.Assertor","it"],["junit.framework.Assert","cl"]),methodTable([4,"LinkedList",[],"co"],[14,"setup",[],"me"],[18,"InvocationBuilder",[],"co"],[18,"mock",[19],"me"],[18,"simpleMethod",[],"me"],[18,"seq",["int"],"me"],[18,"toInvocation",[],"me"],[18,"differentMethod",[],"me"],[4,"addAll",[20],"me"],[2,"asList",["java.lang.Object[]"],"st me"],[16,"InvocationsFinder",[],"co"],[14,"shouldFindActualInvocations",[],"me"],[16,"findInvocations",[5,21,0],"me"],[21,"InvocationMatcher",[15],"co"],[0,"atLeastOnce",[],"st me"],[8,"assertThat",[19,22],"me"],[1,"hasExactlyInOrder",["java.lang.Object[]"],"st me"],[14,"shouldFindFirstUnverifiedInvocation",[],"me"],[23,"assertSame",[19,19],"st me"],[16,"findFirstUnverified",[5],"me"],[15,"markVerified",[],"me"],[23,"assertNull",[19],"st me"],[14,"shouldFindFirstUnverifiedInvocationOnMock",[],"me"],[16,"findFirstUnverified",[5,19],"me"],[15,"getMock",[],"me"],[14,"shouldFindFirstSimilarInvocationByName",[],"me"],[18,"arg",[19],"me"],[16,"findSimilarInvocation",[5,21,0],"me"],[14,"shouldFindInvocationWithTheSameMethod",[],"me"],[4,"add",[19],"me"],[14,"shouldGetLastStackTrace",[],"me"],[16,"getLastStackTrace",[5],"me"],[15,"getStackTrace",[],"me"],[3,"emptyList",[],"st me"],[14,"shouldFindAllMatchingUnverifiedChunks",[],"me"],[16,"findAllMatchingUnverifiedChunks",[5,21],"me"],[15,"markVerifiedInOrder",[],"me"],[23,"assertTrue",["boolean"],"st me"],[5,"isEmpty",[],"me"],[14,"shouldFindMatchingChunk",[],"me"],[12,"VerificationModeBuilder",[],"co"],[12,"times",["int"],"me"],[12,"inOrder",[],"me"],[16,"findMatchingChunk",[5,21,0],"me"],[14,"shouldReturnAllChunksWhenModeIsAtLeastOnce",[],"me"],[14,"shouldReturnAllChunksWhenWantedCountDoesntMatch",[],"me"],[14,"shouldFindPreviousInOrder",[],"me"],[16,"findPreviousVerifiedInOrder",[5],"me"]),localVariableTable(["actual","shouldFindActualInvocations()-actual"],["overloadedSimpleMethod","shouldFindFirstSimilarInvocationByName()-overloadedSimpleMethod"],["found","shouldFindFirstSimilarInvocationByName()-found"],["overloadedDifferentMethod","shouldFindInvocationWithTheSameMethod()-overloadedDifferentMethod"],["found","shouldFindInvocationWithTheSameMethod()-found"],["last","shouldGetLastStackTrace()-last"],["allMatching","shouldFindAllMatchingUnverifiedChunks()-allMatching"],["inOrderMode","shouldFindMatchingChunk()-inOrderMode"],["chunk","shouldFindMatchingChunk()-chunk"],["simpleMethodInvocationThree","shouldReturnAllChunksWhenModeIsAtLeastOnce()-simpleMethodInvocationThree"],["atLeastOnceInOrder","shouldReturnAllChunksWhenModeIsAtLeastOnce()-atLeastOnceInOrder"],["chunk","shouldReturnAllChunksWhenModeIsAtLeastOnce()-chunk"],["simpleMethodInvocationThree","shouldReturnAllChunksWhenWantedCountDoesntMatch()-simpleMethodInvocationThree"],["atLeastOnceInOrder","shouldReturnAllChunksWhenWantedCountDoesntMatch()-atLeastOnceInOrder"],["chunk","shouldReturnAllChunksWhenWantedCountDoesntMatch()-chunk"],["previous","shouldFindPreviousInOrder()-previous"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal.invocation;",nl,nl,ip,_,s," org.mockito.internal.progress.",T(0),".*;",nl,ip,_,s," org.mockito.util.",T(1),".*;",nl,nl,ip," java.util.",T(2),";",nl,ip," java.util.",T(3),";",nl,ip," java.util.",T(4),";",nl,ip," java.util.",T(5),";",nl,nl,ip," org.junit.",T(6),";",nl,ip," org.junit.",T(7),";",nl,ip," org.mockito.",T(8),";",nl,ip," org.mockito.",T(9),".",T(10),";",nl,ip," org.mockito.exceptions.base.",T(11),";",nl,ip," org.mockito.internal.progress.",T(12),";",nl,ip," org.mockito.internal.progress.",T(0),";",nl,ip," org.mockitousage.",T(13),";",nl,nl,nl,C(14,[],$(pu,_,c,_,I("InvocationsFinderTest"),_,ex,_,T(8),_,B(nl,w(4),nl,w(4),F(pi,_,T(4),"&lt;",T(15),"> ",I("invocations")," = ",n,_,N(0),P(),";"),nl,w(4),F(pi,_,T(15),_,I("simpleMethodInvocation"),";"),nl,w(4),F(pi,_,T(15),_,I("simpleMethodInvocationTwo"),";"),nl,w(4),F(pi,_,T(15),_,I("differentMethodInvocation"),";"),nl,w(4),F(pi,_,T(16),_,I("finder"),";"),nl,w(4),nl,w(4),F("@",T(10),_,pi,_,T(13),_,I("mock"),";"),nl,nl,w(4),M(1,[],[],$("@",T(6),nl,w(4),pu,_,v,_,I("setup"),P(),_,ts,_,T(17),_,B(nl,w(8),G(14,"fi","simpleMethodInvocation")," = ",n,_,N(2),P(),".",N(3),P(G(14,"fi","mock")),".",N(4),P(),".",N(5),P(L("1")),".",N(6),P(),";",nl,w(8),G(14,"fi","simpleMethodInvocationTwo")," = ",n,_,N(2),P(),".",N(3),P(G(14,"fi","mock")),".",N(4),P(),".",N(5),P(L("2")),".",N(6),P(),";",nl,w(8),G(14,"fi","differentMethodInvocation")," = ",n,_,N(2),P(),".",N(3),P(G(14,"fi","mock")),".",N(7),P(),".",N(5),P(L("3")),".",N(6),P(),";",nl,w(8),G(14,"fi","invocations"),".",N(8),P(T(2),".",N(9),P(G(14,"fi","simpleMethodInvocation"),", ",G(14,"fi","simpleMethodInvocationTwo"),", ",G(14,"fi","differentMethodInvocation"))),";",nl,w(8),G(14,"fi","finder")," = ",n,_,N(10),P(),";",nl,w(4)))),nl,nl,w(4),M(11,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldFindActualInvocations"),P(),_,ts,_,T(17),_,B(nl,w(8),V(0,$(T(5),"&lt;",T(15),"> ",I("actual")," = ",G(14,"fi","finder"),".",N(12),P(G(14,"fi","invocations"),", ",n,_,N(13),P(G(14,"fi","simpleMethodInvocation")),", ",N(14),P()),";")),nl,w(8),N(15),P(W(0),", ",N(16),P(G(14,"fi","simpleMethodInvocation"),", ",G(14,"fi","simpleMethodInvocationTwo"))),";",nl,w(8),nl,w(8),W(0)," = ",G(14,"fi","finder"),".",N(12),P(G(14,"fi","invocations"),", ",n,_,N(13),P(G(14,"fi","differentMethodInvocation")),", ",N(14),P()),";",nl,w(8),N(15),P(W(0),", ",N(16),P(G(14,"fi","differentMethodInvocation"))),";",nl,w(4)))),nl,w(4),nl,w(4),M(17,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldFindFirstUnverifiedInvocation"),P(),_,ts,_,T(17),_,B(nl,w(8),N(18),P(G(14,"fi","simpleMethodInvocation"),", ",G(14,"fi","finder"),".",N(19),P(G(14,"fi","invocations"))),";",nl,w(8),nl,w(8),G(14,"fi","simpleMethodInvocationTwo"),".",N(20),P(),";",nl,w(8),G(14,"fi","simpleMethodInvocation"),".",N(20),P(),";",nl,w(8),nl,w(8),N(18),P(G(14,"fi","differentMethodInvocation"),", ",G(14,"fi","finder"),".",N(19),P(G(14,"fi","invocations"))),";",nl,w(8),nl,w(8),G(14,"fi","differentMethodInvocation"),".",N(20),P(),";",nl,w(8),N(21),P(G(14,"fi","finder"),".",N(19),P(G(14,"fi","invocations"))),";",nl,w(4)))),nl,w(4),nl,w(4),M(22,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldFindFirstUnverifiedInvocationOnMock"),P(),_,ts,_,T(17),_,B(nl,w(8),N(18),P(G(14,"fi","simpleMethodInvocation"),", ",G(14,"fi","finder"),".",N(23),P(G(14,"fi","invocations"),", ",G(14,"fi","simpleMethodInvocation"),".",N(24),P())),";",nl,w(8),N(21),P(G(14,"fi","finder"),".",N(23),P(G(14,"fi","invocations"),", ",L("\"different mock\""))),";",nl,w(4)))),nl,w(4),nl,w(4),M(25,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldFindFirstSimilarInvocationByName"),P(),_,ts,_,T(17),_,B(nl,w(8),V(1,$(T(15),_,I("overloadedSimpleMethod")," = ",n,_,N(2),P(),".",N(3),P(G(14,"fi","mock")),".",N(4),P(),".",N(26),P(L("\"test\"")),".",N(6),P(),";")),nl,w(8),nl,w(8),V(2,$(T(15),_,I("found")," = ",G(14,"fi","finder"),".",N(27),P(G(14,"fi","invocations"),", ",n,_,N(13),P(W(1)),", ",N(14),P()),";")),nl,w(8),N(18),P(W(2),", ",G(14,"fi","simpleMethodInvocation")),";",nl,w(4)))),nl,w(4),nl,w(4),M(28,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldFindInvocationWithTheSameMethod"),P(),_,ts,_,T(17),_,B(nl,w(8),V(3,$(T(15),_,I("overloadedDifferentMethod")," = ",n,_,N(2),P(),".",N(7),P(),".",N(26),P(L("\"test\"")),".",N(6),P(),";")),nl,w(8),nl,w(8),G(14,"fi","invocations"),".",N(29),P(W(3)),";",nl,w(8),nl,w(8),V(4,$(T(15),_,I("found")," = ",G(14,"fi","finder"),".",N(27),P(G(14,"fi","invocations"),", ",n,_,N(13),P(W(3)),", ",N(14),P()),";")),nl,w(8),N(18),P(W(4),", ",W(3)),";",nl,w(4)))),nl,w(4),nl,w(4),M(30,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldGetLastStackTrace"),P(),_,ts,_,T(17),_,B(nl,w(8),V(5,$(T(11),_,I("last")," = ",G(14,"fi","finder"),".",N(31),P(G(14,"fi","invocations")),";")),nl,w(8),N(18),P(G(14,"fi","differentMethodInvocation"),".",N(32),P(),", ",W(5)),";",nl,w(8),nl,w(8),N(21),P(G(14,"fi","finder"),".",N(31),P(T(3),".&lt;",T(15),">",N(33),P())),";",nl,w(4))))," ",nl,w(4),nl,w(4),M(34,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldFindAllMatchingUnverifiedChunks"),P(),_,ts,_,T(17),_,B(nl,w(8),V(6,$(T(5),"&lt;",T(15),"> ",I("allMatching")," = ",G(14,"fi","finder"),".",N(35),P(G(14,"fi","invocations"),", ",n,_,N(13),P(G(14,"fi","simpleMethodInvocation"))),";")),nl,w(8),N(15),P(W(6),", ",N(16),P(G(14,"fi","simpleMethodInvocation"),", ",G(14,"fi","simpleMethodInvocationTwo"))),";",nl,w(8),nl,w(8),G(14,"fi","simpleMethodInvocation"),".",N(36),P(),";",nl,w(8),W(6)," = ",G(14,"fi","finder"),".",N(35),P(G(14,"fi","invocations"),", ",n,_,N(13),P(G(14,"fi","simpleMethodInvocation"))),";",nl,w(8),N(15),P(W(6),", ",N(16),P(G(14,"fi","simpleMethodInvocationTwo"))),";",nl,w(8),nl,w(8),G(14,"fi","simpleMethodInvocationTwo"),".",N(36),P(),";",nl,w(8),W(6)," = ",G(14,"fi","finder"),".",N(35),P(G(14,"fi","invocations"),", ",n,_,N(13),P(G(14,"fi","simpleMethodInvocation"))),";",nl,w(8),N(37),P(W(6),".",N(38),P()),";",nl,w(4)))),nl,w(4),nl,w(4),M(39,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldFindMatchingChunk"),P(),_,ts,_,T(17),_,B(nl,w(8),V(7,$(T(0),_,I("inOrderMode")," = ",n,_,N(40),P(),".",N(41),P(L("2")),".",N(42),P(),";")),nl,w(8),V(8,$(T(5),"&lt;",T(15),"> ",I("chunk")," = ",G(14,"fi","finder"),".",N(43),P(G(14,"fi","invocations"),", ",n,_,N(13),P(G(14,"fi","simpleMethodInvocation")),", ",W(7)),";")),nl,w(8),N(15),P(W(8),", ",N(16),P(G(14,"fi","simpleMethodInvocation"),", ",G(14,"fi","simpleMethodInvocationTwo"))),";",nl,w(4)))),nl,w(4),nl,w(4),M(44,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldReturnAllChunksWhenModeIsAtLeastOnce"),P(),_,ts,_,T(17),_,B(nl,w(8),V(9,$(T(15),_,I("simpleMethodInvocationThree")," = ",n,_,N(2),P(),".",N(3),P(G(14,"fi","mock")),".",N(6),P(),";")),nl,w(8),G(14,"fi","invocations"),".",N(29),P(W(9)),";",nl,w(8),nl,w(8),V(10,$(T(0),_,I("atLeastOnceInOrder")," = ",n,_,N(40),P(),".",N(42),P(),";")),nl,w(8),V(11,$(T(5),"&lt;",T(15),"> ",I("chunk")," = ",G(14,"fi","finder"),".",N(43),P(G(14,"fi","invocations"),", ",n,_,N(13),P(G(14,"fi","simpleMethodInvocation")),", ",W(10)),";")),nl,w(8),N(15),P(W(11),", ",N(16),P(G(14,"fi","simpleMethodInvocation"),", ",G(14,"fi","simpleMethodInvocationTwo"),", ",W(9))),";",nl,w(4)))),nl,w(4),nl,w(4),M(45,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldReturnAllChunksWhenWantedCountDoesntMatch"),P(),_,ts,_,T(17),_,B(nl,w(8),V(12,$(T(15),_,I("simpleMethodInvocationThree")," = ",n,_,N(2),P(),".",N(3),P(G(14,"fi","mock")),".",N(6),P(),";")),nl,w(8),G(14,"fi","invocations"),".",N(29),P(W(12)),";",nl,w(8),nl,w(8),V(13,$(T(0),_,I("atLeastOnceInOrder")," = ",n,_,N(40),P(),".",N(41),P(L("100")),".",N(42),P(),";")),nl,w(8),V(14,$(T(5),"&lt;",T(15),"> ",I("chunk")," = ",G(14,"fi","finder"),".",N(43),P(G(14,"fi","invocations"),", ",n,_,N(13),P(G(14,"fi","simpleMethodInvocation")),", ",W(13)),";")),nl,w(8),N(15),P(W(14),", ",N(16),P(G(14,"fi","simpleMethodInvocation"),", ",G(14,"fi","simpleMethodInvocationTwo"),", ",W(12))),";",nl,w(4)))),nl,w(4),nl,w(4),M(46,[],[],$("@",T(7),nl,w(4),pu,_,v,_,I("shouldFindPreviousInOrder"),P(),_,ts,_,T(17),_,B(nl,w(8),V(15,$(T(15),_,I("previous")," = ",G(14,"fi","finder"),".",N(47),P(G(14,"fi","invocations")),";")),nl,w(8),N(21),P(W(15)),";",nl,w(8),nl,w(8),G(14,"fi","simpleMethodInvocation"),".",N(36),P(),";",nl,w(8),G(14,"fi","simpleMethodInvocationTwo"),".",N(36),P(),";",nl,w(8),nl,w(8),W(15)," = ",G(14,"fi","finder"),".",N(47),P(G(14,"fi","invocations")),";",nl,w(8),N(18),P(G(14,"fi","simpleMethodInvocationTwo"),", ",W(15)),";",nl,w(4)))),nl))));}});