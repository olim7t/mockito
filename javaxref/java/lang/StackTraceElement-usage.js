setClassUsage('java.lang.StackTraceElement',
{"getClassName()":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"exceptions","children":[{"kind":"package","name":"base","classes":[{"name":"StackTraceFilter","kind":"class","access":"public","line":10,"children":[{"name":"isLastStackElementToRemove(StackTraceElement):boolean","kind":"method","access":"public","line":12,"leaves":[14,13]}]}]}]},{"kind":"package","name":"util","classes":[{"name":"ExtraMatchers","kind":"class","access":"public","line":17,"children":[{"name":"hasOnlyThoseClassesInStackTrace(String[]):Assertor","kind":"method","access":"public","static":true,"line":45,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":46,"children":[{"name":"assertValue(HasStackTrace):void","kind":"method","access":"public","local":true,"line":47,"leaves":[54]}]}]}]}]}]}]}]},"this":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"exceptions","children":[{"kind":"package","name":"base","classes":[{"name":"StackTraceRemoverTest","kind":"class","access":"public","line":15,"children":[{"name":"causeStackTrace","kind":"field","access":"private","line":18,"leaves":[18]},{"name":"stackTrace","kind":"field","access":"private","line":17,"leaves":[17]},{"name":"SomeException","kind":"class","access":"private","line":21,"children":[{"name":"getStackTrace():StackTraceElement[]","kind":"method","access":"public","line":22,"leaves":[22]},{"name":"setStackTrace(StackTraceElement[]):void","kind":"method","access":"public","line":25,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":27,"leaves":[27]},{"name":"stackTrace","kind":"null","access":"default","local":true,"line":25,"leaves":[25]}]}]}]},{"name":"CommonStackTraceRemoverTest","kind":"class","access":"public","line":15,"children":[{"name":"testShouldRemoveCommonStackTracePart():void","kind":"method","access":"public","line":35,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":38,"leaves":[38]}]},{"name":"testShouldNotRemoveWhenStackTracesDontHaveCommonPart():void","kind":"method","access":"public","line":25,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":28,"leaves":[28]}]}]},{"name":"StackTraceBuilder","kind":"class","access":"public","line":10,"children":[{"name":"toStackTraceList():List","kind":"method","access":"public","line":29,"leaves":[29]},{"name":"toStackTrace():StackTraceElement[]","kind":"method","access":"public","line":19,"children":[{"name":"trace","kind":"null","access":"default","local":true,"line":20,"leaves":[20,20]}],"leaves":[23,19]}]},{"name":"HasStackTrace","kind":"interface","access":"public","line":7,"children":[{"name":"setStackTrace(StackTraceElement[]):void","kind":"method","access":"public","line":9,"children":[{"name":"stackTrace","kind":"null","access":"default","local":true,"line":9,"leaves":[9]}]},{"name":"getStackTrace():StackTraceElement[]","kind":"method","access":"public","line":11,"leaves":[11]}]},{"name":"HasStackTraceStub","kind":"class","access":"public","line":9,"children":[{"name":"getStackTrace():StackTraceElement[]","kind":"method","access":"public","line":16,"leaves":[16]},{"name":"setStackTrace(StackTraceElement[]):void","kind":"method","access":"public","line":20,"children":[{"name":"stackTrace","kind":"null","access":"default","local":true,"line":20,"leaves":[20]}]},{"name":"stackTrace","kind":"field","access":"private","line":10,"leaves":[10]},{"name":"HasStackTraceStub(StackTraceElement[])","kind":"method","access":"public","line":12,"children":[{"name":"stackTrace","kind":"null","access":"default","local":true,"line":12,"leaves":[12]}]}]},{"name":"CommonStackTraceRemover","kind":"class","access":"public","line":15,"children":[{"name":"remove(HasStackTrace,List):void","kind":"method","access":"public","line":17,"children":[{"name":"fullTrace","kind":"null","access":"default","local":true,"line":18,"leaves":[18]},{"name":"cleanedPart","kind":"null","access":"default","local":true,"line":19,"leaves":[19]},{"name":"causeStackTrace","kind":"null","access":"default","local":true,"line":17,"leaves":[17]},{"name":"subList","kind":"null","access":"default","local":true,"line":22,"leaves":[22]}],"leaves":[35]}]},{"name":"MockitoException","kind":"class","access":"public","line":8,"children":[{"name":"unfilteredStackTrace","kind":"field","access":"private","line":12,"leaves":[12]},{"name":"getUnfilteredStackTrace():StackTraceElement[]","kind":"method","access":"public","line":31,"leaves":[31]}]},{"name":"StackTraceFilter","kind":"class","access":"public","line":10,"children":[{"name":"isLastStackElementToRemove(StackTraceElement):boolean","kind":"method","access":"public","line":12,"children":[{"name":"e","kind":"null","access":"default","local":true,"line":12,"leaves":[12]}]},{"name":"filterStackTrace(HasStackTrace):void","kind":"method","access":"public","line":18,"children":[{"name":"unfilteredStackTrace","kind":"null","access":"default","local":true,"line":19,"leaves":[19]},{"name":"trace","kind":"null","access":"default","local":true,"line":23,"leaves":[23]},{"name":"filtered","kind":"null","access":"default","local":true,"line":30,"leaves":[30]}],"leaves":[31]}]},{"name":"TraceBuilder","kind":"class","access":"public","line":11,"children":[{"name":"toTrace():HasStackTrace","kind":"method","access":"public","line":16,"children":[{"name":"trace","kind":"null","access":"default","local":true,"line":17,"leaves":[17]}],"leaves":[18]},{"name":"toTraceList():List","kind":"method","access":"public","line":21,"children":[{"name":"trace","kind":"null","access":"default","local":true,"line":24,"leaves":[24,24]}],"leaves":[26,29,21]}]},{"name":"MockitoAssertionError","kind":"class","access":"public","line":10,"children":[{"name":"getUnfilteredStackTrace():StackTraceElement[]","kind":"method","access":"public","line":34,"leaves":[34]},{"name":"unfilteredStackTrace","kind":"field","access":"private","line":13,"leaves":[13]}]},{"name":"HasStackTraceThrowableWrapper","kind":"class","access":"public","line":7,"children":[{"name":"getStackTrace():StackTraceElement[]","kind":"method","access":"public","line":15,"leaves":[15]},{"name":"setStackTrace(StackTraceElement[]):void","kind":"method","access":"public","line":19,"children":[{"name":"stackTrace","kind":"null","access":"default","local":true,"line":19,"leaves":[19]}]}]}]}]},{"kind":"package","name":"util","classes":[{"name":"ExtraMatchers","kind":"class","access":"public","line":17,"children":[{"name":"hasOnlyThoseMethodsInStackTrace(String[]):Assertor","kind":"method","access":"public","static":true,"line":24,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":25,"children":[{"name":"assertValue(Object):void","kind":"method","access":"public","local":true,"line":26,"children":[{"name":"trace","kind":"null","access":"default","local":true,"line":27,"leaves":[27]}],"leaves":[29]}]}]},{"name":"hasOnlyThoseClassesInStackTrace(String[]):Assertor","kind":"method","access":"public","static":true,"line":45,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":46,"children":[{"name":"assertValue(HasStackTrace):void","kind":"method","access":"public","local":true,"line":47,"children":[{"name":"trace","kind":"null","access":"default","local":true,"line":48,"leaves":[48]}]}]}]}]}]}]}]}]},"getMethodName()":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"exceptions","children":[{"kind":"package","name":"base","classes":[{"name":"StackTraceRemoverTest","kind":"class","access":"public","line":15,"children":[{"name":"SomeException","kind":"class","access":"private","line":21,"children":[{"name":"setStackTrace(StackTraceElement[]):void","kind":"method","access":"public","line":25,"leaves":[28]}]}]},{"name":"MockitoExceptionTest","kind":"class","access":"public","line":10,"children":[{"name":"shouldKeepUnfilteredStackTrace():void","kind":"method","access":"public","line":16,"leaves":[22]}]},{"name":"MockitoAssertionErrorTest","kind":"class","access":"public","line":10,"children":[{"name":"shouldKeepUnfilteredStackTrace():void","kind":"method","access":"public","line":16,"leaves":[22]}]}]}]},{"kind":"package","name":"util","classes":[{"name":"ExtraMatchers","kind":"class","access":"public","line":17,"children":[{"name":"hasOnlyThoseMethodsInStackTrace(String[]):Assertor","kind":"method","access":"public","static":true,"line":24,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":25,"children":[{"name":"assertValue(Object):void","kind":"method","access":"public","local":true,"line":26,"leaves":[39]}]}]},{"name":"hasMethodInStackTraceAt(int,String):Assertor","kind":"method","access":"public","static":true,"line":60,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":61,"children":[{"name":"assertValue(Throwable):void","kind":"method","access":"public","local":true,"line":65,"leaves":[66]}]}]}]}]}]}]}]}});
