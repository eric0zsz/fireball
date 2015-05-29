
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Matrix23` Class

Extends `ValueType`

Defined in: [utils/api/core/matrix23.js:4](../files/utils/api/core/matrix23.js.js)

Module: [Fire](../modules/Fire.md)




Simple matrix to do 2D affine transformations.
It is actually 3x3 but the last row is [0 0 1].

### Index

##### Properties

  - [`a`](#property-a)
  - [`b`](#property-b)
  - [`c`](#property-c)
  - [`d`](#property-d)
  - [`identity`](#property-identity)
  - [`tx`](#property-tx)
  - [`ty`](#property-ty)



##### Methods

  - [`Matrix23()` **constructor**](#method-matrix23)
  - [`clone()`](#method-clone)
  - [`clone(other)`](#method-cloneother)
  - [`equals(other)`](#method-equalsother)
  - [`getRotation()`](#method-getrotation)
  - [`getScale([out])`](#method-getscaleout)
  - [`getTranslation()`](#method-gettranslation)
  - [`getTRS()`](#method-gettrs)
  - [`identity()`](#method-identity)
  - [`invert()`](#method-invert)
  - [`prepend(other)`](#method-prependother)
  - [`rotate(radians)`](#method-rotateradians)
  - [`setScale(scale)`](#method-setscalescale)
  - [`toString()`](#method-tostring)
  - [`transformPoint(vector, [out])`](#method-transformpointvector-out)




### Inherited members

##### Properties


##### Attributes


##### Methods

- [``](#method-lerp)

##### Events




### Details


#### Properties



##### property: `a`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/matrix23.js:12](../files/utils_api_core_matrix23.js.md#l12) |
| Default    | 1 |




##### property: `b`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/matrix23.js:19](../files/utils_api_core_matrix23.js.md#l19) |
| Default    | 0 |




##### property: `c`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/matrix23.js:26](../files/utils_api_core_matrix23.js.md#l26) |
| Default    | 0 |




##### property: `d`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/matrix23.js:33](../files/utils_api_core_matrix23.js.md#l33) |
| Default    | 1 |




##### property: `identity`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> |
| Defined | [utils/api/core/matrix23.js:58](../files/utils_api_core_matrix23.js.md#l58) |




##### property: `tx`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/matrix23.js:40](../files/utils_api_core_matrix23.js.md#l40) |
| Default    | 0 |




##### property: `ty`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/matrix23.js:47](../files/utils_api_core_matrix23.js.md#l47) |
| Default    | 0 |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Matrix23()`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:4](../files/utils_api_core_matrix23.js.md#l4) |



##### method: `clone()`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/matrix23.js:65` |
| Defined | [utils/api/core/matrix23.js:65](../files/utils_api_core_matrix23.js.md#l65) |
| Return 		 | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> 



##### method: `clone(other)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:80](../files/utils_api_core_matrix23.js.md#l80) |
| Return 		 | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> 

###### Parameters
- other <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a>  


##### method: `equals(other)`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/matrix23.js:96` |
| Defined | [utils/api/core/matrix23.js:96](../files/utils_api_core_matrix23.js.md#l96) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- other <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a>  


##### method: `getRotation()`

Get rotation of this matrix.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:275](../files/utils_api_core_matrix23.js.md#l275) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### method: `getScale([out])`

Get scaling of this matrix.

NOTE: negative scaling (mirroring) is not supported

| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:211](../files/utils_api_core_matrix23.js.md#l211) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `getTranslation()`

Get translation of this matrix.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:290](../files/utils_api_core_matrix23.js.md#l290) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### method: `getTRS()`

Extract translation, rotation and scaling component from this matrix.
Only support negative(mirroring) scaling in some special case.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:226](../files/utils_api_core_matrix23.js.md#l226) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `identity()`

Reset this matrix to identity.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:121](../files/utils_api_core_matrix23.js.md#l121) |
| Return 		 | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> 



##### method: `invert()`

Invert this matrix.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:167](../files/utils_api_core_matrix23.js.md#l167) |
| Return 		 | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> 



##### method: `prepend(other)`

Prepend this matrix.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:137](../files/utils_api_core_matrix23.js.md#l137) |
| Return 		 | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> 

###### Parameters
- other <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a>  


##### method: `rotate(radians)`

Rotate this matrix by counterclockwise.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:302](../files/utils_api_core_matrix23.js.md#l302) |
| Return 		 | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> 

###### Parameters
- radians <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `setScale(scale)`

Set scaling of this matrix.

NOTE: Can not scale negative scaling (mirroring) and zero scaling matrix.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:255](../files/utils_api_core_matrix23.js.md#l255) |
| Return 		 | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> 

###### Parameters
- scale <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `toString()`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/matrix23.js:111` |
| Defined | [utils/api/core/matrix23.js:111](../files/utils_api_core_matrix23.js.md#l111) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### method: `transformPoint(vector, [out])`

Apply transforms to given vector

| meta | description |
|------|-------------|
| Defined | [utils/api/core/matrix23.js:189](../files/utils_api_core_matrix23.js.md#l189) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- vector <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector



