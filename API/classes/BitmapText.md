
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `BitmapText` Class

Extends `Renderer`

Defined in: [utils/api/engine/bitmap-text.js:9](../files/utils/api/engine/bitmap-text.js.js)

Module: [Fire](../modules/Fire.md)




The bitmap font renderer component.

### Index

##### Properties

  - [`align`](#property-align)
  - [`anchor`](#property-anchor)
  - [`bitmapFont`](#property-bitmapfont)
  - [`color`](#property-color)
  - [`text`](#property-text)






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

- [``](#method-getworldbounds)
- [``](#method-getworldorientedbounds)
- [``](#method-getselfmatrix)
- [``](#method-getworldsize)
- [``](#method-onprerender)
- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Details


#### Properties



##### property: `align`

How lines of text are aligned (Left, Right, Center).

| meta | description |
|------|-------------|
| Type | Fire.TextAlign |
| Defined | [utils/api/engine/bitmap-text.js:106](../files/utils_api_engine_bitmap-text.js.md#l106) |
| Default    | Fire.TextAlign.Left |




##### property: `anchor`

The anchor point of the text.

| meta | description |
|------|-------------|
| Type | Fire.TextAnchor |
| Defined | [utils/api/engine/bitmap-text.js:86](../files/utils_api_engine_bitmap-text.js.md#l86) |
| Default    | Fire.TextAnchor.MiddleCenter |




##### property: `bitmapFont`

The font to render.

| meta | description |
|------|-------------|
| Type | <a href="../classes/BitmapFont.html" class="crosslink">BitmapFont</a> |
| Defined | [utils/api/engine/bitmap-text.js:23](../files/utils_api_engine_bitmap-text.js.md#l23) |
| Default    | null |




##### property: `color`

The color of the text.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/engine/bitmap-text.js:68](../files/utils_api_engine_bitmap-text.js.md#l68) |
| Default    | Fire.Color.white |




##### property: `text`

The text to render.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/engine/bitmap-text.js:42](../files/utils_api_engine_bitmap-text.js.md#l42) |
| Default    | &quot;&quot; |






