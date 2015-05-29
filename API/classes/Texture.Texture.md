
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Texture.Texture` Class

Extends `Asset`

Defined in: [utils/api/core/texture.js:47](../files/utils/api/core/texture.js.js)

Module: [Fire](../modules/Fire.md)




Class for texture handling.
Use this to create textures on the fly or to modify existing texture assets.

### Index

##### Properties

  - [`filterMode`](#property-filtermode)
  - [`height`](#property-height)
  - [`image`](#property-image)
  - [`width`](#property-width)
  - [`wrapMode`](#property-wrapmode)



##### Methods

  - [`Texture.Texture([img])` **constructor**](#method-texture.textureimg)
  - [`getPixel(x, y)`](#method-getpixelx-y)




### Inherited members

##### Properties

- [`_uuid`](#property-_uuid)
- [`dirty`](#property-dirty)
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

- [`_setRawExtname(extname)`](#method-_setrawextname)
- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Details


#### Properties



##### property: `filterMode`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Texture.FilterMode.html" class="crosslink">Texture.FilterMode</a> |
| Defined | [utils/api/core/texture.js:110](../files/utils_api_core_texture.js.md#l110) |
| Default    | Texture.FilterMode.Bilinear |




##### property: `height`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/texture.js:90](../files/utils_api_core_texture.js.md#l90) |




##### property: `image`



| meta | description |
|------|-------------|
| Type | Image |
| Defined | [utils/api/core/texture.js:72](../files/utils_api_core_texture.js.md#l72) |




##### property: `width`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/texture.js:81](../files/utils_api_core_texture.js.md#l81) |




##### property: `wrapMode`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Texture.WrapMode.html" class="crosslink">Texture.WrapMode</a> |
| Defined | [utils/api/core/texture.js:99](../files/utils_api_core_texture.js.md#l99) |
| Default    | Texture.WrapMode.Clamp |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Texture.Texture([img])`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/texture.js:47](../files/utils_api_core_texture.js.md#l47) |

###### Parameters
- img Image the html image element to render


##### method: `getPixel(x, y)`

Returns pixel color at coordinates (x, y).

If the pixel coordinates are out of bounds (larger than width/height or small than 0),
they will be clamped or repeated based on the texture's wrap mode.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/texture.js:125](../files/utils_api_core_texture.js.md#l125) |
| Return 		 | Fire.Color 

###### Parameters
- x <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- y <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  



