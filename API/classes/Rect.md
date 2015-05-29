
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Rect` Class

Extends `ValueType`

Defined in: [utils/api/core/rect.js:5](../files/utils/api/core/rect.js.js)

Module: [Fire](../modules/Fire.md)




A 2D rectangle defined by x, y position and width, height.

see {% crosslink Fire.rect Fire.rect %}

### Index

##### Properties

  - [`center`](#property-center)
  - [`size`](#property-size)
  - [`xMax`](#property-xmax)
  - [`xMin`](#property-xmin)
  - [`yMax`](#property-ymax)
  - [`yMin`](#property-ymin)



##### Methods

  - [`Rect([x=0], [y=0], [w=0], [h=0])` **constructor**](#method-rectx0-y0-w0-h0)
  - [`clone()`](#method-clone)
  - [`contain(a, b)`](#method-containa-b)
  - [`contains(point)`](#method-containspoint)
  - [`containsRect(rect)`](#method-containsrectrect)
  - [`equals(other)`](#method-equalsother)
  - [`fromMinMax(v1, v2)`](#method-fromminmaxv1-v2)
  - [`fromVec2(leftTop, size)`](#method-fromvec2lefttop-size)
  - [`intersects(rect)`](#method-intersectsrect)
  - [`lerp(to, ratio, [out])`](#method-lerpto-ratio-out)
  - [`rect([x=0], [y=0], [w=0], [h=0])`](#method-rectx0-y0-w0-h0)
  - [`toString()`](#method-tostring)




### Inherited members

##### Properties


##### Attributes


##### Methods


##### Events




### Details


#### Properties



##### property: `center`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/rect.js:176](../files/utils_api_core_rect.js.md#l176) |




##### property: `size`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/core/rect.js:191](../files/utils_api_core_rect.js.md#l191) |




##### property: `xMax`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/rect.js:158](../files/utils_api_core_rect.js.md#l158) |




##### property: `xMin`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/rect.js:134](../files/utils_api_core_rect.js.md#l134) |




##### property: `yMax`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/rect.js:167](../files/utils_api_core_rect.js.md#l167) |




##### property: `yMin`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/rect.js:146](../files/utils_api_core_rect.js.md#l146) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Rect([x=0], [y=0], [w=0], [h=0])`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/rect.js:5](../files/utils_api_core_rect.js.md#l5) |

###### Parameters
- x <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- y <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- w <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- h <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `clone()`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/rect.js:84` |
| Defined | [utils/api/core/rect.js:84](../files/utils_api_core_rect.js.md#l84) |
| Return 		 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 



##### method: `contain(a, b)`

Checks if rect contains

| meta | description |
|------|-------------|
| Defined | [utils/api/core/rect.js:56](../files/utils_api_core_rect.js.md#l56) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- a <a href="../classes/Rect.html" class="crosslink">Rect</a> Rect a
- b <a href="../classes/Rect.html" class="crosslink">Rect</a> Rect b


##### method: `contains(point)`

Returns true if the point inside this rectangle.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/rect.js:214](../files/utils_api_core_rect.js.md#l214) |

###### Parameters
- point <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `containsRect(rect)`

Returns true if the other rect totally inside this rectangle.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/rect.js:231](../files/utils_api_core_rect.js.md#l231) |

###### Parameters
- rect <a href="../classes/Rect.html" class="crosslink">Rect</a>  


##### method: `equals(other)`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/rect.js:92` |
| Defined | [utils/api/core/rect.js:92](../files/utils_api_core_rect.js.md#l92) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- other <a href="../classes/Rect.html" class="crosslink">Rect</a>  


##### method: `fromMinMax(v1, v2)`

Creates a rectangle from two coordinate values.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/rect.js:27](../files/utils_api_core_rect.js.md#l27) |
| Return 		 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 

###### Parameters
- v1 <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- v2 <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `fromVec2(leftTop, size)`

Creates a rectangle from left-top coordinate value and size.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/rect.js:44](../files/utils_api_core_rect.js.md#l44) |
| Return 		 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 

###### Parameters
- leftTop <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- size <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `intersects(rect)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/rect.js:205](../files/utils_api_core_rect.js.md#l205) |

###### Parameters
- rect <a href="../classes/Rect.html" class="crosslink">Rect</a>  


##### method: `lerp(to, ratio, [out])`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/rect.js:105` |
| Defined | [utils/api/core/rect.js:105](../files/utils_api_core_rect.js.md#l105) |
| Return 		 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 

###### Parameters
- to <a href="../classes/Rect.html" class="crosslink">Rect</a>  
- ratio <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient
- out <a href="../classes/Rect.html" class="crosslink">Rect</a> optional, the receiving vector


##### method: `rect([x=0], [y=0], [w=0], [h=0])`

The convenience method to create a new Rect

| meta | description |
|------|-------------|
| Defined | [utils/api/core/rect.js:256](../files/utils_api_core_rect.js.md#l256) |
| Return 		 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 

###### Parameters
- x <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- y <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- w <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- h <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `toString()`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/rect.js:125` |
| Defined | [utils/api/core/rect.js:125](../files/utils_api_core_rect.js.md#l125) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 




