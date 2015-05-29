
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `EventTarget` Class

Extends `HashObject`

Defined in: [utils/api/engine/event-target.js:6](../files/utils/api/engine/event-target.js.js)

Module: [Fire](../modules/Fire.md)




EventTarget is an object to which an event is dispatched when something has occurred.
Entity are the most common event targets, but other objects can be event targets too.

Event targets are an important part of the Fireball event model.
The event target serves as the focal point for how events flow through the scene graph.
When an event such as a mouse click or a keypress occurs, Fireball dispatches an event object
into the event flow from the root of the hierarchy. The event object then makes its way through
the scene graph until it reaches the event target, at which point it begins its return trip through
the scene graph. This round-trip journey to the event target is conceptually divided into three phases:
- The capture phase comprises the journey from the root to the last node before the event target's node
- The target phase comprises only the event target node
- The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the tree
See also: http://www.w3.org/TR/DOM-Level-3-Events/#event-flow

Event targets can implement the following methods:
 - _getCapturingTargets
 - _getBubblingTargets

### Index

##### Properties

  - [`_bubblingListeners`](#property-_bubblinglisteners)
  - [`_capturingListeners`](#property-_capturinglisteners)



##### Methods

  - [`EventTarget()` **constructor**](#method-eventtarget)
  - [`_doSendEvent(event)`](#method-_dosendeventevent)
  - [`_getBubblingTargets(type, array)`](#method-_getbubblingtargetstype-array)
  - [`_getCapturingTargets(type, array)`](#method-_getcapturingtargetstype-array)
  - [`dispatchEvent(event)`](#method-dispatcheventevent)
  - [`emit(message, [detail])`](#method-emitmessage-detail)
  - [`off(type, callback, [useCapture=false])`](#method-offtype-callback-usecapturefalse)
  - [`on(type, callback, [useCapture=false])`](#method-ontype-callback-usecapturefalse)
  - [`once(type, callback, [useCapture=false])`](#method-oncetype-callback-usecapturefalse)




### Inherited members

##### Properties

- [`_hashCode`](#property-_hashcode)
- [`_id`](#property-_id)
- [`hashCode`](#property-hashcode)
- [`id`](#property-id)
- [`_name`](#property-_name)
- [`_objFlags`](#property-_objflags)
- [`name`](#property-name)
- [`isValid`](#property-isvalid)

##### Attributes


##### Methods

- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Details


#### Properties



##### property: `_bubblingListeners`



| meta | description |
|------|-------------|
| Type | EventListeners |
| Defined | [utils/api/engine/event-target.js:40](../files/utils_api_engine_event-target.js.md#l40) |
| Default    | null |




##### property: `_capturingListeners`



| meta | description |
|------|-------------|
| Type | EventListeners |
| Defined | [utils/api/engine/event-target.js:32](../files/utils_api_engine_event-target.js.md#l32) |
| Default    | null |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `EventTarget()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event-target.js:6](../files/utils_api_engine_event-target.js.md#l6) |



##### method: `_doSendEvent(event)`

Send an event to this object directly, this method will not propagate the event to any other objects.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event-target.js:205](../files/utils_api_engine_event-target.js.md#l205) |

###### Parameters
- event <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is sent to this event target.


##### method: `_getBubblingTargets(type, array)`

Get all the targets listening to the supplied type of event in the target's bubbling phase.
The bubbling phase comprises any SUBSEQUENT nodes encountered on the return trip to the root of the tree.
The result should save in the array parameter, and MUST SORT from child nodes to parent nodes.

Subclasses can override this method to make event propagable.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event-target.js:284](../files/utils_api_engine_event-target.js.md#l284) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the event type
- array <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> the array to receive targets


##### method: `_getCapturingTargets(type, array)`

Get all the targets listening to the supplied type of event in the target's capturing phase.
The capturing phase comprises the journey from the root to the last node BEFORE the event target's node.
The result should save in the array parameter, and MUST SORT from child nodes to parent nodes.

Subclasses can override this method to make event propagable.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event-target.js:261](../files/utils_api_engine_event-target.js.md#l261) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the event type
- array <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> the array to receive targets

**Examples**

Subclasses can override this method to make event propagable
```js
for (var target = this._parent; target; target = target._parent) {
    if (target._capturingListeners && target._capturingListeners.has(type)) {
        array.push(target);
    }
}
```

##### method: `dispatchEvent(event)`

Dispatches an event into the event flow. The event target is the EventTarget object upon which the dispatchEvent() method is called.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event-target.js:189](../files/utils_api_engine_event-target.js.md#l189) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- event <a href="../classes/Event.html" class="crosslink">Event</a> The Event object that is dispatched into the event flow


##### method: `emit(message, [detail])`

Send an event to this object directly, this method will not propagate the event to any other objects.
The event will be created from the supplied message, you can get the "detail" argument from event.detail.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event-target.js:227](../files/utils_api_engine_event-target.js.md#l227) |

###### Parameters
- message <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the message to send
- detail Any whatever argument the message needs


##### method: `off(type, callback, [useCapture=false])`

Removes the callback previously registered with the same type, callback, and capture.
This method is merely an alias to removeEventListener.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event-target.js:82](../files/utils_api_engine_event-target.js.md#l82) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type being removed.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to remove.
- useCapture <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Specifies whether the callback being removed was registered as a capturing callback or not.
                             If not specified, useCapture defaults to false. If a callback was registered twice,
                             one with capture and one without, each must be removed separately. Removal of a capturing callback
                             does not affect a non-capturing version of the same listener, and vice versa.


##### method: `on(type, callback, [useCapture=false])`

Register an callback of a specific event type on the EventTarget.
This method is merely an alias to addEventListener.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event-target.js:50](../files/utils_api_engine_event-target.js.md#l50) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- param <a href="../classes/Event.html" class="crosslink">Event</a> event
- useCapture <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.


##### method: `once(type, callback, [useCapture=false])`

Register an callback of a specific event type on the EventTarget, the callback will remove itself after the first time it is triggered.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event-target.js:105](../files/utils_api_engine_event-target.js.md#l105) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string representing the event type to listen for.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback that will be invoked when the event is dispatched.
                             The callback is ignored if it is a duplicate (the callbacks are unique).
	- param <a href="../classes/Event.html" class="crosslink">Event</a> event
- useCapture <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When set to true, the capture argument prevents callback
                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET.



