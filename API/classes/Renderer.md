
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Renderer` Class

Extends `HashObject`

Defined in: [utils/api/engine/renderer.js:12](../files/utils/api/engine/renderer.js.js)

Module: [Fire](../modules/Fire.md)




The base for all renderer

### Index



##### Methods

  - [`Renderer()` **constructor**](#method-renderer)
  - [`getSelfMatrix(out)`](#method-getselfmatrixout)
  - [`getWorldBounds([out])`](#method-getworldboundsout)
  - [`getWorldOrientedBounds([out_bl], [out_tl], [out_tr], [out_br])`](#method-getworldorientedboundsout_bl-out_tl-out_tr-out_br)
  - [`getWorldSize()`](#method-getworldsize)
  - [`onPreRender()`](#method-onprerender)




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

- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Inheritance tree


### Details




<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Renderer()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/renderer.js:12](../files/utils_api_engine_renderer.js.md#l12) |



##### method: `getSelfMatrix(out)`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/renderer.js:64](../files/utils_api_engine_renderer.js.md#l64) |

###### Parameters
- out <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> the receiving matrix


##### method: `getWorldBounds([out])`

Returns a "world" axis aligned bounding box(AABB) of the renderer.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/renderer.js:28](../files/utils_api_engine_renderer.js.md#l28) |
| Return 		 | <a href="../classes/Rect.html" class="crosslink">Rect</a> 

###### Parameters
- out <a href="../classes/Rect.html" class="crosslink">Rect</a> optional, the receiving rect


##### method: `getWorldOrientedBounds([out_bl], [out_tl], [out_tr], [out_br])`

Returns a "world" oriented bounding box(OBB) of the renderer.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/renderer.js:43](../files/utils_api_engine_renderer.js.md#l43) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- out_bl <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the vector to receive the world position of bottom left
- out_tl <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the vector to receive the world position of top left
- out_tr <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the vector to receive the world position of top right
- out_br <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the vector to receive the world position of bottom right


##### method: `getWorldSize()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/renderer.js:73](../files/utils_api_engine_renderer.js.md#l73) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 



##### method: `onPreRender()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/renderer.js:81](../files/utils_api_engine_renderer.js.md#l81) |




