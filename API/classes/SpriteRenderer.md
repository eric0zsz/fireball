
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `SpriteRenderer` Class

Extends `Renderer`

Defined in: [utils/api/engine/sprite-renderer.js:6](../files/utils/api/engine/sprite-renderer.js.js)

Module: [Fire](../modules/Fire.md)




Renders a sprite in the scene.

### Index

##### Properties

  - [`color`](#property-color)
  - [`customWidth`](#property-customwidth)
  - [`height`](#property-height)
  - [`height`](#property-height)
  - [`renderHeight`](#property-renderheight)
  - [`renderWidth`](#property-renderwidth)
  - [`sprite`](#property-sprite)
  - [`useCustomSize`](#property-usecustomsize)






### Inherited members

##### Properties

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

- [`getWorldBounds([out])`](#method-getworldbounds)
- [`getWorldOrientedBounds([out_bl], [out_tl], [out_tr], [out_br])`](#method-getworldorientedbounds)
- [`getSelfMatrix(out)`](#method-getselfmatrix)
- [`getWorldSize()`](#method-getworldsize)
- [`onPreRender()`](#method-onprerender)
- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Details


#### Properties



##### property: `color`

The rendering color.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/engine/sprite-renderer.js:40](../files/utils_api_engine_sprite-renderer.js.md#l40) |
| Default    | Fire.Color.white |




##### property: `customWidth`

The custom width of this renderer.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/sprite-renderer.js:86](../files/utils_api_engine_sprite-renderer.js.md#l86) |




##### property: `height`

The custom height of this renderer.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/sprite-renderer.js:134](../files/utils_api_engine_sprite-renderer.js.md#l134) |




##### property: `height`

The image type of this renderer .

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/sprite-renderer.js:178](../files/utils_api_engine_sprite-renderer.js.md#l178) |




##### property: `renderHeight`

Get the render height of this renderer.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/sprite-renderer.js:157](../files/utils_api_engine_sprite-renderer.js.md#l157) |




##### property: `renderWidth`

Get the render width of this renderer.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/sprite-renderer.js:109](../files/utils_api_engine_sprite-renderer.js.md#l109) |




##### property: `sprite`

The sprite to render.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Sprite.html" class="crosslink">Sprite</a> |
| Defined | [utils/api/engine/sprite-renderer.js:19](../files/utils_api_engine_sprite-renderer.js.md#l19) |
| Default    | null |




##### property: `useCustomSize`

Indicates that this renderer uses custom width and height to render the sprite.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/sprite-renderer.js:61](../files/utils_api_engine_sprite-renderer.js.md#l61) |
| Default    | false |






