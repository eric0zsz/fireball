
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Sprite` Class

Extends `Asset`

Defined in: [utils/api/core/sprite.js:6](../files/utils/api/core/sprite.js.js)

Module: [Fire](../modules/Fire.md)




Represents a Sprite object which obtained from Texture.

### Index

##### Properties

  - [`alphaThreshold`](#property-alphathreshold)
  - [`borderTop`](#property-bordertop)
  - [`borderTop`](#property-bordertop)
  - [`borderTop`](#property-bordertop)
  - [`borderTop`](#property-bordertop)
  - [`height`](#property-height)
  - [`pivot`](#property-pivot)
  - [`pixelLevelHitTest`](#property-pixellevelhittest)
  - [`rawHeight`](#property-rawheight)
  - [`rawWidth`](#property-rawwidth)
  - [`rotated`](#property-rotated)
  - [`rotatedHeight`](#property-rotatedheight)
  - [`rotatedWidth`](#property-rotatedwidth)
  - [`texture`](#property-texture)
  - [`trimX`](#property-trimx)
  - [`trimY`](#property-trimy)
  - [`width`](#property-width)
  - [`x`](#property-x)
  - [`y`](#property-y)






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



##### property: `alphaThreshold`

The highest alpha channel value that is considered opaque for hit test. [0, 1]

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:141](../files/utils_api_core_sprite.js.md#l141) |
| Default    | 0.1 |




##### property: `borderTop`

Right border of the sprite

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:186](../files/utils_api_core_sprite.js.md#l186) |
| Default    | 0 |




##### property: `borderTop`

Left border of the sprite

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:176](../files/utils_api_core_sprite.js.md#l176) |
| Default    | 0 |




##### property: `borderTop`

Bottom border of the sprite

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:166](../files/utils_api_core_sprite.js.md#l166) |
| Default    | 0 |




##### property: `borderTop`

Top border of the sprite

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:156](../files/utils_api_core_sprite.js.md#l156) |
| Default    | 0 |




##### property: `height`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:64](../files/utils_api_core_sprite.js.md#l64) |




##### property: `pivot`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/core/sprite.js:28](../files/utils_api_core_sprite.js.md#l28) |
| Default    | new Fire.Vec2(0.5, 0.5) |




##### property: `pixelLevelHitTest`

Use pixel-level hit testing.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/core/sprite.js:131](../files/utils_api_core_sprite.js.md#l131) |
| Default    | false |




##### property: `rawHeight`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:122](../files/utils_api_core_sprite.js.md#l122) |




##### property: `rawWidth`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:113](../files/utils_api_core_sprite.js.md#l113) |




##### property: `rotated`



| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/core/sprite.js:81](../files/utils_api_core_sprite.js.md#l81) |
| Default    | false |




##### property: `rotatedHeight`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:213](../files/utils_api_core_sprite.js.md#l213) |




##### property: `rotatedWidth`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:204](../files/utils_api_core_sprite.js.md#l204) |




##### property: `texture`



| meta | description |
|------|-------------|
| Type | Texture |
| Defined | [utils/api/core/sprite.js:72](../files/utils_api_core_sprite.js.md#l72) |




##### property: `trimX`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:40](../files/utils_api_core_sprite.js.md#l40) |




##### property: `trimY`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:48](../files/utils_api_core_sprite.js.md#l48) |




##### property: `width`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:56](../files/utils_api_core_sprite.js.md#l56) |




##### property: `x`

uv of the sprite in atlas-texture

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:92](../files/utils_api_core_sprite.js.md#l92) |




##### property: `y`

uv of the sprite in atlas-texture

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/sprite.js:102](../files/utils_api_core_sprite.js.md#l102) |






