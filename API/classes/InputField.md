
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `InputField` Class

Extends `Renderer`

Defined in: [utils/api/engine/input-field.js:25](../files/utils/api/engine/input-field.js.js)

Module: [Fire](../modules/Fire.md)




The Input Field renderer component.

### Index

##### Properties

  - [`anchor`](#property-anchor)
  - [`background`](#property-background)
  - [`color`](#property-color)
  - [`customFontType`](#property-customfonttype)
  - [`fontFlagType`](#property-fontflagtype)
  - [`fontType`](#property-fonttype)
  - [`maxLength`](#property-maxlength)
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



##### property: `anchor`

The anchor point of the input field.

| meta | description |
|------|-------------|
| Type | Fire.TextAnchor |
| Defined | [utils/api/engine/input-field.js:196](../files/utils_api_engine_input-field.js.md#l196) |
| Default    | Fire.TextAnchor.MiddleCenter |




##### property: `background`

The background of the inputField.

| meta | description |
|------|-------------|
| Type | <a href="../classes/SpriteRenderer.html" class="crosslink">SpriteRenderer</a> |
| Defined | [utils/api/engine/input-field.js:40](../files/utils_api_engine_input-field.js.md#l40) |
| Default    | null |




##### property: `color`

The color of input text.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/engine/input-field.js:179](../files/utils_api_engine_input-field.js.md#l179) |
| Default    | Fire.Color.black |




##### property: `customFontType`

The custom font type of the input text.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/engine/input-field.js:77](../files/utils_api_engine_input-field.js.md#l77) |
| Default    | &quot;Arial&quot; |




##### property: `fontFlagType`

The font flag Type of the input text.

| meta | description |
|------|-------------|
| Type | <a href="../classes/FontFlagType.html" class="crosslink">FontFlagType</a> |
| Defined | [utils/api/engine/input-field.js:101](../files/utils_api_engine_input-field.js.md#l101) |
| Default    | FontFlagType.Text |




##### property: `fontType`

The font type of the input text.

| meta | description |
|------|-------------|
| Type | <a href="../classes/FontType.html" class="crosslink">FontType</a> |
| Defined | [utils/api/engine/input-field.js:60](../files/utils_api_engine_input-field.js.md#l60) |
| Default    | FontType.Arial |




##### property: `maxLength`

The maxLength of input text.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/input-field.js:163](../files/utils_api_engine_input-field.js.md#l163) |
| Default    | 10 |




##### property: `size`

The size of input text.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/input-field.js:147](../files/utils_api_engine_input-field.js.md#l147) |
| Default    | 20 |




##### property: `text`

The text of input field.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/engine/input-field.js:129](../files/utils_api_engine_input-field.js.md#l129) |
| Default    | &quot;Enter text...&quot; |






