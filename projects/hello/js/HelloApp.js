smalltalk.addPackage('HelloApp', {});
smalltalk.addClass('Hello', smalltalk.Object, [], 'HelloApp');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function () {
var self=this;
var msg=nil;
var button=nil;
(msg="Hallo Bernhard!");
(button=smalltalk.send("#sayHello", "_asJQuery", []));
smalltalk.send(button, "_click_", [(function(){return smalltalk.send(button, "_after_", [smalltalk.send(smalltalk.send("<p>", "__comma", [msg]), "__comma", ["</p>"])]);})]);
smalltalk.send(smalltalk.send((smalltalk.Counter || Counter), "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: "begin\x0a\x09\x22Makes me say hello to the user.\x22\x0a\x0a\x09| msg button |\x0a\x09msg := 'Hallo Bernhard!'.\x0a\x09button := '#sayHello' asJQuery.\x0a\x09button click: [button after: '<p>' , msg , '</p>'].\x0a\x09Counter new appendToJQuery: 'body' asJQuery",
messageSends: ["asJQuery", "click:", "after:", ",", "appendToJQuery:", "new"],
referencedClasses: ["Counter"]
}),
smalltalk.Hello);



