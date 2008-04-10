defineStructure(
"DescriptiveMessagesOnMisuseTest",function(factory){with(factory) { typeTable(["org.mockito.Matchers","cl"],["org.mockito.Mockito","cl"],["java.util.List","it"],["org.junit.Ignore","an"],["org.junit.Test","an"],["org.mockito.InOrder","it"],["org.mockito.TestBase","cl"],["org.mockito.MockitoAnnotations","cl"],["org.mockito.MockitoAnnotations$Mock","st an"],["org.mockito.exceptions.base.MockitoException","cl"],["org.mockito.exceptions.misusing.NotAMockException","cl"],["org.mockitousage.DescriptiveMessagesOnMisuseTest","cl"],["org.mockitousage.IMethods","it"],["java.lang.SuppressWarnings","an"],["java.lang.Class","cl"],["java.lang.Object","cl"],["org.mockito.internal.progress.OngoingStubbing","it"]),methodTable([11,"tryDescriptiveMessagesOnMisuse",[],"me"],[1,"verifyNoMoreInteractions",["java.lang.Object[]"],"st me"],[1,"verifyZeroInteractions",["java.lang.Object[]"],"st me"],[1,"inOrder",["java.lang.Object[]"],"st me"],[1,"mock",[14],"st me"],[5,"verify",[15],"me"],[12,"simpleMethod",[],"me"],[1,"verify",[15],"st me"],[12,"differentMethod",[],"me"],[12,"varargs",["java.lang.String[]"],"me"],[1,"anyString",[],"st me"],[1,"stub",[15],"st me"],[16,"toReturn",[15],"me"],[11,"shouldScreamWhenWholeMethodPassedToVerify",[],"me"],[12,"booleanReturningMethod",[],"me"],[11,"shouldScreamWhenWholeMethodPassedToVerifyNoMoreInteractions",[],"me"],[12,"byteReturningMethod",[],"me"],[11,"shouldScreamNullPassedToVerify",[],"me"],[11,"shouldScreamWhenNotMockPassedToVerifyNoMoreInteractions",[],"me"],[11,"shouldScreamWhenNullPassedToVerifyNoMoreInteractions",[],"me"]),localVariableTable(["inOrder","tryDescriptiveMessagesOnMisuse()-inOrder"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockitousage;",nl,nl,ip,_,s," org.mockito.",T(0),".*;",nl,ip,_,s," org.mockito.",T(1),".*;",nl,nl,ip," java.util.",T(2),";",nl,nl,ip," org.junit.",T(3),";",nl,ip," org.junit.",T(4),";",nl,ip," org.mockito.",T(5),";",nl,ip," org.mockito.",T(6),";",nl,ip," org.mockito.",T(7),".",T(8),";",nl,ip," org.mockito.exceptions.base.",T(9),";",nl,ip," org.mockito.exceptions.misusing.",T(10),";",nl,nl,C(11,[],$(pu,_,c,_,I("DescriptiveMessagesOnMisuseTest"),_,ex,_,T(6),_,B(nl,w(4),nl,w(4),F("@",T(8),_,pi,_,T(12),_,I("mock"),";"),nl,nl,w(4),M(0,[],[],$("@",T(13),P(L("\"all\"")),nl,w(4),"@",T(3),P(L("\"just for tuning up the error messages\"")),nl,w(4),"@",T(4),nl,w(4),pu,_,v,_,I("tryDescriptiveMessagesOnMisuse"),P(),_,B(nl,w(8),N(1),P(),";",nl,w(8),N(1),P(L("null")),";",nl,w(8),N(1),P(L("\"\"")),";",nl,w(8),N(2),P(),";",nl,w(8),N(2),P(L("null")),";",nl,w(8),N(2),P(L("\"\"")),";",nl,nl,w(8),N(3),P(),";",nl,w(8),N(3),P(L("null")),";",nl,w(8),N(3),P(L("\"test\"")),";",nl,w(8),V(0,$(T(5),_,I("inOrder")," = ",N(3),P(N(4),P(T(2),".",c)),";")),nl,w(8),W(0),".",N(5),P(G(11,"fi","mock")),".",N(6),P(),";",nl,nl,w(8),N(7),P(G(11,"fi","mock"),".",N(8),P()),";",nl,w(8),N(7),P(L("null")),";",nl,nl,w(8),N(7),P(G(11,"fi","mock")),".",N(9),P(L("\"test\""),", ",N(10),P()),";",nl,nl,w(8),N(11),P(L("\"x\"")),".",N(12),P(L("\"x\"")),";",nl,nl,w(8),N(11),P(G(11,"fi","mock"),".",N(6),P()),";",nl,w(8),N(11),P(G(11,"fi","mock"),".",N(8),P()),".",N(12),P(L("\"\"")),";",nl,w(4))))," ",nl,w(4),nl,w(4),M(13,[],[],$("@",T(4),P("expected=",T(10),".",c),nl,w(4),pu,_,v,_,I("shouldScreamWhenWholeMethodPassedToVerify"),P(),_,B(nl,w(8),N(7),P(G(11,"fi","mock"),".",N(14),P()),";",nl,w(4)))),"   ",nl,w(4),nl,w(4),M(15,[],[],$("@",T(4),P("expected=",T(10),".",c),nl,w(4),pu,_,v,_,I("shouldScreamWhenWholeMethodPassedToVerifyNoMoreInteractions"),P(),_,B(nl,w(8),N(1),P(G(11,"fi","mock"),".",N(16),P()),";",nl,w(4)))),"  ",nl,w(4),nl,w(4),M(17,[],[],$("@",T(4),P("expected=",T(9),".",c),nl,w(4),pu,_,v,_,I("shouldScreamNullPassedToVerify"),P(),_,B(nl,w(8),N(7),P(L("null")),";",nl,w(4)))),"  ",nl,w(4),nl,w(4),M(18,[],[],$("@",T(4),P("expected=",T(10),".",c),nl,w(4),pu,_,v,_,I("shouldScreamWhenNotMockPassedToVerifyNoMoreInteractions"),P(),_,B(nl,w(8),N(1),P(L("null"),", ",L("\"blah\"")),";",nl,w(4))))," ",nl,w(4),nl,w(4),M(19,[],[],$("@",T(13),P(L("\"all\"")),nl,w(4),"@",T(4),P("expected=",T(9),".",c),nl,w(4),pu,_,v,_,I("shouldScreamWhenNullPassedToVerifyNoMoreInteractions"),P(),_,B(nl,w(8),N(1),P(L("null")),";",nl,w(4)))),nl))));}});