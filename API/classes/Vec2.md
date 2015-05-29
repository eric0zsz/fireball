
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Vec2` Class

Extends `ValueType`

Defined in: [utils/api/core/vec2.js:4](../files/utils/api/core/vec2.js.js)

Module: [Fire](../modules/Fire.md)




Representation of 2D vectors and points.

see {% crosslink Fire.v2 Fire.v2 %}

### Index

##### Properties

  - [`one`](#property-one)
  - [`right`](#property-right)
  - [`up`](#property-up)
  - [`zero`](#property-zero)



##### Methods

  - [`Vec2([x=0], [y=0])` **constructor**](#method-vec2x0-y0)
  - [`add(vector, [out])`](#method-addvector-out)
  - [`addSelf(vector)`](#method-addselfvector)
  - [`angle(vector)`](#method-anglevector)
  - [`clone()`](#method-clone)
  - [`cross([vector])`](#method-crossvector)
  - [`div(vector, [out])`](#method-divvector-out)
  - [`divSelf(vector)`](#method-divselfvector)
  - [`dot([vector])`](#method-dotvector)
  - [`equals(other)`](#method-equalsother)
  - [`lerp(to, ratio, [out])`](#method-lerpto-ratio-out)
  - [`mag()`](#method-mag)
  - [`magSqr()`](#method-magsqr)
  - [`mul(num, [out])`](#method-mulnum-out)
  - [`mulSelf(num)`](#method-mulselfnum)
  - [`neg([out])`](#method-negout)
  - [`negSelf()`](#method-negself)
  - [`normalize([out])`](#method-normalizeout)
  - [`normalizeSelf()`](#method-normalizeself)
  - [`rotate(radians, [out])`](#method-rotateradians-out)
  - [`rotateSelf(radians)`](#method-rotateselfradians)
  - [`scale(vector, [out])`](#method-scalevector-out)
  - [`scaleSelf(vector)`](#method-scaleselfvector)
  - [`set(newValue)`](#method-setnewvalue)
  - [`signAngle(vector)`](#method-signanglevector)
  - [`sub(vector, [out])`](#method-subvector-out)
  - [`subSelf(vector)`](#method-subselfvector)
  - [`toString()`](#method-tostring)
  - [`v2([x=0], [y=0])`](#method-v2x0-y0)




### Inherited members

##### Properties


##### Attributes


##### Methods


##### Events




### Details


#### Properties



##### property: `one`

return a Vec2 object with x = 1 and y = 1

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/core/vec2.js:395](../files/utils_api_core_vec2.js.md#l395) |




##### property: `right`

return a Vec2 object with x = 1 and y = 0

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/core/vec2.js:425](../files/utils_api_core_vec2.js.md#l425) |




##### property: `up`

return a Vec2 object with x = 0 and y = 1

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/core/vec2.js:415](../files/utils_api_core_vec2.js.md#l415) |




##### property: `zero`

return a Vec2 object with x = 0 and y = 0

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/core/vec2.js:405](../files/utils_api_core_vec2.js.md#l405) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Vec2([x=0], [y=0])`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:4](../files/utils_api_core_vec2.js.md#l4) |

###### Parameters
- x <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- y <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `add(vector, [out])`

Adds tow vectors, and returns the new result.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:94](../files/utils_api_core_vec2.js.md#l94) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `addSelf(vector)`

Adds this vector. If you want to save result to another vector, use add() instead.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:81](../files/utils_api_core_vec2.js.md#l81) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `angle(vector)`

Get angle in radian between this and vector

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:318](../files/utils_api_core_vec2.js.md#l318) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `clone()`

clone a Vec2 value

| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/vec2.js:23` |
| Defined | [utils/api/core/vec2.js:23](../files/utils_api_core_vec2.js.md#l23) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### method: `cross([vector])`

Cross product

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:251](../files/utils_api_core_vec2.js.md#l251) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `div(vector, [out])`

Divides two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:202](../files/utils_api_core_vec2.js.md#l202) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `divSelf(vector)`

Divides two vectors. If you want to save result to another vector, use div() instead.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:189](../files/utils_api_core_vec2.js.md#l189) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `dot([vector])`

Dot product

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:241](../files/utils_api_core_vec2.js.md#l241) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `equals(other)`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/vec2.js:45` |
| Defined | [utils/api/core/vec2.js:45](../files/utils_api_core_vec2.js.md#l45) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- other <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `lerp(to, ratio, [out])`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/vec2.js:65` |
| Defined | [utils/api/core/vec2.js:65](../files/utils_api_core_vec2.js.md#l65) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- to <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- ratio <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `mag()`

Returns the length of this vector.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:261](../files/utils_api_core_vec2.js.md#l261) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### method: `magSqr()`

Returns the squared length of this vector.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:270](../files/utils_api_core_vec2.js.md#l270) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### method: `mul(num, [out])`

Multiplies by a number, and returns the new result.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:148](../files/utils_api_core_vec2.js.md#l148) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- num <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `mulSelf(num)`

Multiplies this by a number. If you want to save result to another vector, use mul() instead.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:135](../files/utils_api_core_vec2.js.md#l135) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- num <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `neg([out])`

Negates the components, and returns the new result.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:228](../files/utils_api_core_vec2.js.md#l228) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `negSelf()`

Negates the components. If you want to save result to another vector, use neg() instead.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:216](../files/utils_api_core_vec2.js.md#l216) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### method: `normalize([out])`

Returns this vector with a magnitude of 1.

Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:302](../files/utils_api_core_vec2.js.md#l302) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `normalizeSelf()`

Make the length of this vector to 1.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:279](../files/utils_api_core_vec2.js.md#l279) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### method: `rotate(radians, [out])`

rotate

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:354](../files/utils_api_core_vec2.js.md#l354) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- radians <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `rotateSelf(radians)`

rotate self

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:368](../files/utils_api_core_vec2.js.md#l368) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- radians <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `scale(vector, [out])`

Multiplies two vectors, and returns the new result.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:175](../files/utils_api_core_vec2.js.md#l175) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `scaleSelf(vector)`

Multiplies two vectors.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:162](../files/utils_api_core_vec2.js.md#l162) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `set(newValue)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:33](../files/utils_api_core_vec2.js.md#l33) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- newValue <a href="../classes/Vec2.html" class="crosslink">Vec2</a> new value to set.


##### method: `signAngle(vector)`

Get angle in radian between this and vector with direction

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:339](../files/utils_api_core_vec2.js.md#l339) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `sub(vector, [out])`

Subtracts one vector from this, and returns the new result.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:121](../files/utils_api_core_vec2.js.md#l121) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `subSelf(vector)`

Subtracts one vector from this. If you want to save result to another vector, use sub() instead.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:108](../files/utils_api_core_vec2.js.md#l108) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `toString()`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/vec2.js:54` |
| Defined | [utils/api/core/vec2.js:54](../files/utils_api_core_vec2.js.md#l54) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### method: `v2([x=0], [y=0])`

The convenience method to create a new {% crosslink Vec2 Vec2 %}

| meta | description |
|------|-------------|
| Defined | [utils/api/core/vec2.js:440](../files/utils_api_core_vec2.js.md#l440) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- x <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- y <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  



