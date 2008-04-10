defineStructure(
"MakesMocksNotToReturnNulls",function(factory){with(factory) { typeTable(["org.junit.After","an"],["org.junit.Before","an"],["org.mockito.configuration.experimental.ConfigurationSupport","cl"],["org.mockitousage.examples.configure.FriendlyReturnValues","cl"],["org.mockitousage.examples.configure.withbaseclass.MakesMocksNotToReturnNulls","cl"],["org.mockitousage.examples.configure.withbaseclass.ConfiguringDefaultReturnValuesUsingBaseClassTest","cl"],["org.mockito.internal.configuration.MockitoConfiguration","it"],["org.mockito.configuration.ReturnValues","it"]),methodTable([4,"configureMockito",[],"me"],[2,"getConfiguration",[],"st me"],[6,"setReturnValues",[7],"me"],[3,"FriendlyReturnValues",[],"co"],[4,"resetReturnValuesToDefaults",[],"me"],[6,"resetReturnValues",[],"me"]),localVariableTable()
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockitousage.examples.configure.withbaseclass;",nl,nl,ip," org.junit.",T(0),";",nl,ip," org.junit.",T(1),";",nl,ip," org.mockito.configuration.experimental.",T(2),";",nl,ip," org.mockitousage.examples.configure.",T(3),";",nl,nl,C(4,[5],$(pu,_,c,_,I("MakesMocksNotToReturnNulls"),_,B(nl,w(4),nl,w(4),M(0,[],[],$("@",T(1),nl,w(4),pu,_,v,_,I("configureMockito"),P(),_,B(nl,w(8),O("//setting custom return values"),nl,w(8),T(2),".",N(1),P(),".",N(2),P(n,_,N(3),P()),";",nl,w(4)))),nl,w(4),nl,w(4),M(4,[],[],$("@",T(0),nl,w(4),pu,_,v,_,I("resetReturnValuesToDefaults"),P(),_,B(nl,w(8),O("//I don't want mocks from other tests to be reconfigured"),nl,w(8),T(2),".",N(1),P(),".",N(5),P(),";",nl,w(4)))),nl))));}});