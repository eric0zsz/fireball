
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Text` Class

Extends `Renderer`

Defined in: [utils/api/engine/text.js:8](../files/utils/api/engine/text.js.js)

Module: [Fire](../modules/Fire.md)




The text renderer component.

### Index

##### Properties

  - [`align`](#property-align)
  - [`anchor`](#property-anchor)
  - [`color`](#property-color)
  - [`customFontType`](#property-customfonttype)
  - [`fontType`](#property-fonttype)
  - [`size`](#property-size)
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



##### property: `align`

How lines of text are aligned (Left, Right, Center).

| meta | description |
|------|-------------|
| Type | Fire.TextAlign |
| Defined | [utils/api/engine/text.js:119](../files/utils_api_engine_text.js.md#l119) |
| Default    | Fire.TextAlign.Left |




##### property: `anchor`

The anchor point of the text.

| meta | description |
|------|-------------|
| Type | Fire.TextAnchor |
| Defined | [utils/api/engine/text.js:137](../files/utils_api_engine_text.js.md#l137) |
| Default    | Fire.TextAnchor.MiddleCenter |




##### property: `color`

The color of text.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/engine/text.js:102](../files/utils_api_engine_text.js.md#l102) |
| Default    | Fire.Color.white |




##### property: `customFontType`

The custom font type of the text.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/engine/text.js:43](../files/utils_api_engine_text.js.md#l43) |
| Default    | &quot;Arial&quot; |




##### property: `fontType`

The font type of the text.

| meta | description |
|------|-------------|
| Type | <a href="../classes/FontType.html" class="crosslink">FontType</a> |
| Defined | [utils/api/engine/text.js:26](../files/utils_api_engine_text.js.md#l26) |
| Default    | FontType.Arial |




##### property: `size`

The size of text.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/text.js:83](../files/utils_api_engine_text.js.md#l83) |
| Default    | 30 |




##### property: `text`

The text of text.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/engine/text.js:65](../files/utils_api_engine_text.js.md#l65) |
| Default    | &quot;Enter text...&quot; |






