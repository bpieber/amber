smalltalk.addPackage('HelloApp', {});
smalltalk.addClass('Hello', smalltalk.Object, [], 'HelloApp');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function () {
var self=this;
var msg=nil;
var button=nil;
(msg="Hallo Bernhard!");
(button=smalltalk.send("#sayHello", "_asJQuery", []));
smalltalk.send(button, "_click_", [(function(){return smalltalk.send(button, "_after_", [smalltalk.send(smalltalk.send("<p>", "__comma", [msg]), "__comma", ["</p>"])]);})]);
smalltalk.send(smalltalk.send((smalltalk.Counter || Counter), "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.Hello);



