
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `ValueType` Class


Defined in: [utils/api/core/value-type.js:4](../files/utils/api/core/value-type.js.js)

Module: [Fire](../modules/Fire.md)




The base class of all value types.

### Index



##### Methods

  - [`ValueType()` **constructor**](#method-valuetype)
  - [`clone()`](#method-clone)
  - [`equals(other)`](#method-equalsother)
  - [`lerp(to, ratio)`](#method-lerpto-ratio)
  - [`toString()`](#method-tostring)





### Details




<!-- Method Block -->
#### Methods

##### Constructor

##### method: `ValueType()`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/value-type.js:4](../files/utils_api_core_value-type.js.md#l4) |



##### method: `clone()`

This method returns an exact copy of current value.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/value-type.js:13](../files/utils_api_core_value-type.js.md#l13) |
| Return 		 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 



##### method: `equals(other)`

Compares this object with the other one.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/value-type.js:24](../files/utils_api_core_value-type.js.md#l24) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- other <a href="../classes/ValueType.html" class="crosslink">ValueType</a>  


##### method: `lerp(to, ratio)`

Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/value-type.js:43](../files/utils_api_core_value-type.js.md#l43) |
| Return 		 | <a href="../classes/ValueType.html" class="crosslink">ValueType</a> 

###### Parameters
- to <a href="../classes/ValueType.html" class="crosslink">ValueType</a> the to value
- ratio <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient


##### method: `toString()`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/value-type.js:35](../files/utils_api_core_value-type.js.md#l35) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 




