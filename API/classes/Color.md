
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Color` Class

Extends `ValueType`

Defined in: [utils/api/core/color.js:6](../files/utils/api/core/color.js.js)

Module: [Fire](../modules/Fire.md)




Representation of RGBA colors.

Each color component is a floating point value with a range from 0 to 1.

You can also use the convenience method <% crosslink Fire.color Fire.color %> to create a new Color.

### Index

##### Properties

  - [`black`](#property-black)
  - [`blue`](#property-blue)
  - [`cyan`](#property-cyan)
  - [`gray`](#property-gray)
  - [`green`](#property-green)
  - [`magenta`](#property-magenta)
  - [`red`](#property-red)
  - [`transparent`](#property-transparent)
  - [`white`](#property-white)
  - [`yellow`](#property-yellow)



##### Methods

  - [`Color([r=0], [g=0], [b=0], [a=1])` **constructor**](#method-colorr0-g0-b0-a1)
  - [`clamp()`](#method-clamp)
  - [`clone()`](#method-clone)
  - [`color([r=0], [g=0], [b=0], [a=1])`](#method-colorr0-g0-b0-a1)
  - [`equals(other)`](#method-equalsother)
  - [`fromHEX(hexString)`](#method-fromhexhexstring)
  - [`fromHSV(h, s, v)`](#method-fromhsvh-s-v)
  - [`lerp(to, ratio, [out])`](#method-lerpto-ratio-out)
  - [`setA(alpha)`](#method-setaalpha)
  - [`setB(blue)`](#method-setbblue)
  - [`setG(green)`](#method-setggreen)
  - [`setR(red)`](#method-setrred)
  - [`toCSS(opt)`](#method-tocssopt)
  - [`toHEX(fmt)`](#method-tohexfmt)
  - [`toHSV()`](#method-tohsv)
  - [`toRGBValue()`](#method-torgbvalue)
  - [`toString()`](#method-tostring)




### Inherited members

##### Properties


##### Attributes


##### Methods


##### Events




### Details


#### Properties



##### property: `black`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/core/color.js:38](../files/utils_api_core_color.js.md#l38) |




##### property: `blue`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/core/color.js:68](../files/utils_api_core_color.js.md#l68) |




##### property: `cyan`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/core/color.js:80](../files/utils_api_core_color.js.md#l80) |




##### property: `gray`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/core/color.js:50](../files/utils_api_core_color.js.md#l50) |




##### property: `green`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/core/color.js:62](../files/utils_api_core_color.js.md#l62) |




##### property: `magenta`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/core/color.js:86](../files/utils_api_core_color.js.md#l86) |




##### property: `red`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/core/color.js:56](../files/utils_api_core_color.js.md#l56) |




##### property: `transparent`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/core/color.js:44](../files/utils_api_core_color.js.md#l44) |




##### property: `white`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/core/color.js:32](../files/utils_api_core_color.js.md#l32) |




##### property: `yellow`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/core/color.js:74](../files/utils_api_core_color.js.md#l74) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Color([r=0], [g=0], [b=0], [a=1])`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:6](../files/utils_api_core_color.js.md#l6) |

###### Parameters
- r <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> red component of the color
- g <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> green component of the color
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> blue component of the color
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> alpha component of the color


##### method: `clamp()`

Clamp this color to make all components between 0 to 1.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:220](../files/utils_api_core_color.js.md#l220) |



##### method: `clone()`

Clone a new color from the current color.

| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/color.js:102` |
| Defined | [utils/api/core/color.js:102](../files/utils_api_core_color.js.md#l102) |
| Return 		 | <a href="../classes/Color.html" class="crosslink">Color</a> 



##### method: `color([r=0], [g=0], [b=0], [a=1])`

The convenience method to create a new <% crosslink Fire.Color Color %>

| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:314](../files/utils_api_core_color.js.md#l314) |
| Return 		 | <a href="../classes/Color.html" class="crosslink">Color</a> 

###### Parameters
- r <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- g <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `equals(other)`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/color.js:111` |
| Defined | [utils/api/core/color.js:111](../files/utils_api_core_color.js.md#l111) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- other <a href="../classes/Color.html" class="crosslink">Color</a>  


##### method: `fromHEX(hexString)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:231](../files/utils_api_core_color.js.md#l231) |
| Return 		 | <a href="../classes/Color.html" class="crosslink">Color</a> 

###### Parameters
- hexString <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `fromHSV(h, s, v)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:285](../files/utils_api_core_color.js.md#l285) |
| Return 		 | <a href="../classes/Color.html" class="crosslink">Color</a> 

###### Parameters
- h <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- s <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- v <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `lerp(to, ratio, [out])`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/color.js:124` |
| Defined | [utils/api/core/color.js:124](../files/utils_api_core_color.js.md#l124) |
| Return 		 | <a href="../classes/Color.html" class="crosslink">Color</a> 

###### Parameters
- to <a href="../classes/Color.html" class="crosslink">Color</a>  
- ratio <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the interpolation coefficient
- out <a href="../classes/Color.html" class="crosslink">Color</a> optional, the receiving vector


##### method: `setA(alpha)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:184](../files/utils_api_core_color.js.md#l184) |
| Return 		 | <a href="../classes/Color.html" class="crosslink">Color</a> 

###### Parameters
- alpha <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Alpha component


##### method: `setB(blue)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:175](../files/utils_api_core_color.js.md#l175) |
| Return 		 | <a href="../classes/Color.html" class="crosslink">Color</a> 

###### Parameters
- blue <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Blue component


##### method: `setG(green)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:166](../files/utils_api_core_color.js.md#l166) |
| Return 		 | <a href="../classes/Color.html" class="crosslink">Color</a> 

###### Parameters
- green <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Green component


##### method: `setR(red)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:157](../files/utils_api_core_color.js.md#l157) |
| Return 		 | <a href="../classes/Color.html" class="crosslink">Color</a> 

###### Parameters
- red <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the new Red component


##### method: `toCSS(opt)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:194](../files/utils_api_core_color.js.md#l194) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- opt <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "rgba", "rgb", "#rgb" or "#rrggbb"


##### method: `toHEX(fmt)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:245](../files/utils_api_core_color.js.md#l245) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- fmt <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> "#rgb" or "#rrggbb"


##### method: `toHSV()`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:301](../files/utils_api_core_color.js.md#l301) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `toRGBValue()`

Convert to 24bit rgb value

| meta | description |
|------|-------------|
| Defined | [utils/api/core/color.js:274](../files/utils_api_core_color.js.md#l274) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### method: `toString()`



| meta | description |
|------|-------------|
| Overwritten | inherited from ValueType but overwritten in `utils/api/core/color.js:144` |
| Defined | [utils/api/core/color.js:144](../files/utils_api_core_color.js.md#l144) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 




