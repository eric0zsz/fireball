
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Event` Class


Defined in: [utils/api/engine/event.js:6](../files/utils/api/engine/event.js.js)

Module: [Fire](../modules/Fire.md)




An event allows for signaling that something has occurred. E.g. that an asset has completed downloading.

### Index

##### Properties

  - [`_defaultPrevented`](#property-_defaultprevented)
  - [`_propagationImmediateStopped`](#property-_propagationimmediatestopped)
  - [`_propagationStopped`](#property-_propagationstopped)
  - [`AT_TARGET`](#property-at_target)
  - [`bubbles`](#property-bubbles)
  - [`BUBBLING_PHASE`](#property-bubbling_phase)
  - [`CAPTURING_PHASE`](#property-capturing_phase)
  - [`currentTarget;`](#property-currenttarget;)
  - [`eventPhase`](#property-eventphase)
  - [`NONE`](#property-none)
  - [`target`](#property-target)
  - [`type`](#property-type)



##### Methods

  - [`Event(type, [bubbles=false])` **constructor**](#method-eventtype-bubblesfalse)
  - [`_reset()`](#method-_reset)
  - [`preventDefault()`](#method-preventdefault)
  - [`stop([immediate=false])`](#method-stopimmediatefalse)





### Details


#### Properties



##### property: `_defaultPrevented`

Indicates whether or not event.preventDefault() has been called on the event

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/event.js:60](../files/utils_api_engine_event.js.md#l60) |




##### property: `_propagationImmediateStopped`

Indicates whether or not event.stop(true) has been called on the event

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/event.js:76](../files/utils_api_engine_event.js.md#l76) |




##### property: `_propagationStopped`

Indicates whether or not event.stop() has been called on the event

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/event.js:68](../files/utils_api_engine_event.js.md#l68) |




##### property: `AT_TARGET`

The target phase comprises only the event target node
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/event.js:109](../files/utils_api_engine_event.js.md#l109) |




##### property: `bubbles`

A boolean indicating whether the event bubbles up through the hierarchy or not

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/event.js:53](../files/utils_api_engine_event.js.md#l53) |




##### property: `BUBBLING_PHASE`

The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/event.js:118](../files/utils_api_engine_event.js.md#l118) |




##### property: `CAPTURING_PHASE`

The capturing phase comprises the journey from the root to the last node before the event target's node
see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/event.js:100](../files/utils_api_engine_event.js.md#l100) |




##### property: `currentTarget;`

A reference to the currently registered target for the event

| meta | description |
|------|-------------|
| Type | object |
| Defined | [utils/api/engine/event.js:31](../files/utils_api_engine_event.js.md#l31) |




##### property: `eventPhase`

Indicates which phase of the event flow is currently being evaluated.
Returns an integer value represented by 4 constants:
 - Event.NONE = 0
 - Event.CAPTURING_PHASE = 1
 - Event.AT_TARGET = 2
 - Event.BUBBLING_PHASE = 3
The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
(http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/event.js:38](../files/utils_api_engine_event.js.md#l38) |




##### property: `NONE`

Events not currently dispatched are in this phase

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/event.js:92](../files/utils_api_engine_event.js.md#l92) |




##### property: `target`

A reference to the target to which the event was originally dispatched

| meta | description |
|------|-------------|
| Type | object |
| Defined | [utils/api/engine/event.js:24](../files/utils_api_engine_event.js.md#l24) |




##### property: `type`

The name of the event (case-sensitive), e.g. "click", "fire", or "submit"

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/engine/event.js:17](../files/utils_api_engine_event.js.md#l17) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Event(type, [bubbles=false])`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event.js:6](../files/utils_api_engine_event.js.md#l6) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
- bubbles <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> A boolean indicating whether the event bubbles up through the tree or not


##### method: `_reset()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event.js:152](../files/utils_api_engine_event.js.md#l152) |



##### method: `preventDefault()`

If invoked when the cancelable attribute value is true, signals to the operation that caused event to be dispatched that it needs to be canceled.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event.js:144](../files/utils_api_engine_event.js.md#l144) |



##### method: `stop([immediate=false])`

Stop propagation. When dispatched in a tree, invoking this method prevents event from reaching any other objects than the current.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/event.js:128](../files/utils_api_engine_event.js.md#l128) |

###### Parameters
- immediate <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Indicates whether or not to immediate stop the propagation, default is false.
                                     If true, for this particular event, no other callback will be called.
                                     Neither those attached on the same event target,
                                     nor those attached on targets which will be traversed later.



