
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `ModifierKeyStates` Class


Defined in: [utils/api/engine/input-events.js:7](../files/utils/api/engine/input-events.js.js)

Module: [Fire](../modules/Fire.md)




 

### Index

##### Properties

  - [`altKey`](#property-altkey)
  - [`ctrlKey`](#property-ctrlkey)
  - [`metaKey`](#property-metakey)
  - [`nativeEvent`](#property-nativeevent)
  - [`shiftKey`](#property-shiftkey)



##### Methods

  - [`ModifierKeyStates(type, [nativeEvent=null])` **constructor**](#method-modifierkeystatestype-nativeeventnull)
  - [`_reset()`](#method-_reset)
  - [`getModifierState(keyArg)`](#method-getmodifierstatekeyarg)
  - [`initFromNativeEvent(nativeEvent)`](#method-initfromnativeeventnativeevent)





### Details


#### Properties



##### property: `altKey`

Returns true if the `alt` key was down when the event was fired.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/input-events.js:36](../files/utils_api_engine_input-events.js.md#l36) |




##### property: `ctrlKey`

Returns true if the `ctrl` key was down when the event was fired.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/input-events.js:24](../files/utils_api_engine_input-events.js.md#l24) |




##### property: `metaKey`

Returns true if the `meta` key was down when the event was fired.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/input-events.js:42](../files/utils_api_engine_input-events.js.md#l42) |




##### property: `nativeEvent`



| meta | description |
|------|-------------|
| Type | UIEvent |
| Defined | [utils/api/engine/input-events.js:17](../files/utils_api_engine_input-events.js.md#l17) |




##### property: `shiftKey`

Returns true if the `shift` key was down when the event was fired.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/input-events.js:30](../files/utils_api_engine_input-events.js.md#l30) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `ModifierKeyStates(type, [nativeEvent=null])`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/input-events.js:7](../files/utils_api_engine_input-events.js.md#l7) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the event (case-sensitive), e.g. "click", "fire", or "submit".
- nativeEvent UIEvent The native event object attaching to this event object.


##### method: `_reset()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/input-events.js:78](../files/utils_api_engine_input-events.js.md#l78) |



##### method: `getModifierState(keyArg)`

Returns the current state of the specified modifier key. true if the modifier is active (i.e., the modifier key is pressed or locked). Otherwise, false.

See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.getModifierState

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/input-events.js:51](../files/utils_api_engine_input-events.js.md#l51) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- keyArg <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A modifier key value. The value must be one of the KeyboardEvent.key values which represent modifier keys or "Accel". This is case-sensitive.
                         NOTE: If an application wishes to distinguish between right and left modifiers, this information could be deduced using keyboard events and Fire.KeyboardEvent.location.


##### method: `initFromNativeEvent(nativeEvent)`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/input-events.js:65](../files/utils_api_engine_input-events.js.md#l65) |

###### Parameters
- nativeEvent UIEvent The original DOM event



