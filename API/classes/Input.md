
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Input` Class


Defined in: [utils/api/engine/input.js:124](../files/utils/api/engine/input.js.js)

Module: [Fire](../modules/Fire.md)




Interface into the Input system.

### Index

##### Properties

  - [`hasTouch`](#property-hastouch)



##### Methods

  - [`off(type, callback)`](#method-offtype-callback)
  - [`on(type, callback)`](#method-ontype-callback)





### Details


#### Properties



##### property: `hasTouch`

Returns whether the current device supports touch input

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/input.js:135](../files/utils_api_engine_input.js.md#l135) |






<!-- Method Block -->
#### Methods


##### method: `off(type, callback)`

Removes the callback previously registered with the same type and callback.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/input.js:172](../files/utils_api_engine_input.js.md#l172) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  


##### method: `on(type, callback)`

Register an callback of a specific input event type.

For all supported event and type, please see [Input Events](/en/scripting/input-events)

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/input.js:146](../files/utils_api_engine_input.js.md#l146) |

###### Parameters
- type <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> eg. "keydown", "click"
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
	- param <a href="../classes/Event.html" class="crosslink">Event</a> event - the input event



