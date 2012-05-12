smalltalk.addPackage('HelloApp', {});
smalltalk.addClass('Hello', smalltalk.Object, [], 'HelloApp');
smalltalk.addMethod(
unescape('_begin'),
smalltalk.method({
selector: unescape('begin'),
fn: function () {
var self=this;
var msg=nil;
var button=nil;
(msg=unescape("Hello%20World%21"));
(button=smalltalk.send(unescape("%23sayHello"), "_asJQuery", []));
smalltalk.send(button, "_click_", [(function(){return smalltalk.send(button, "_after_", [smalltalk.send(smalltalk.send(unescape("%3Cp%3E"), "__comma", [msg]), "__comma", [unescape("%3C/p%3E")])]);})]);
smalltalk.send(smalltalk.send((smalltalk.Counter || Counter), "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.Hello);



