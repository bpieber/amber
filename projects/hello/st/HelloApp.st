Smalltalk current createPackage: 'HelloApp' properties: #{}!
Object subclass: #Hello
	instanceVariableNames: ''
	package: 'HelloApp'!

!Hello methodsFor: 'not yet classified'!

begin
	"Makes me say hello to the user."

	| msg button |
	msg := 'Hello World!!'.
	button := '#sayHello' asJQuery.
	button click: [button after: '<p>' , msg , '</p>'].
	Counter new appendToJQuery: 'body' asJQuery
! !

