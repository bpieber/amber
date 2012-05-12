smalltalk.addPackage('HelloApp', {});
smalltalk.addClass('Hello', smalltalk.Object, [], 'HelloApp');
smalltalk.addMethod(
unescape('_begin'),
smalltalk.method({
selector: unescape('begin'),
category: 'not yet classified',
fn: function () {
var self=this;
var msg=nil;
var button=nil;
(msg=unescape("Hello%20World%21"));
(button=smalltalk.send(unescape("%23sayHello"), "_asJQuery", []));
smalltalk.send(button, "_click_", [(function(){return smalltalk.send(button, "_after_", [smalltalk.send(smalltalk.send(unescape("%3Cp%3E"), "__comma", [msg]), "__comma", [unescape("%3C/p%3E")])]);})]);
smalltalk.send(smalltalk.send((smalltalk.Counter || Counter), "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('begin%0A%09%22Makes%20me%20say%20hello%20to%20the%20user.%22%0A%0A%09%7C%20msg%20button%20%7C%0A%09msg%20%3A%3D%20%27Hello%20World%21%27.%0A%09button%20%3A%3D%20%27%23sayHello%27%20asJQuery.%0A%09button%20click%3A%20%5Bbutton%20after%3A%20%27%3Cp%3E%27%20%2C%20msg%20%2C%20%27%3C/p%3E%27%5D.%0A%09Counter%20new%20appendToJQuery%3A%20%27body%27%20asJQuery'),
messageSends: ["asJQuery", "click:", "after:", unescape("%2C"), "appendToJQuery:", "new"],
referencedClasses: ["Counter"]
}),
smalltalk.Hello);



