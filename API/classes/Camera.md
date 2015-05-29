
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Camera` Class

Extends `Component`

Defined in: [utils/api/engine/camera.js:4](../files/utils/api/engine/camera.js.js)

Module: [Fire](../modules/Fire.md)




 

### Index

##### Properties

  - [`background`](#property-background)
  - [`contentStrategy`](#property-contentstrategy)
  - [`main`](#property-main)
  - [`renderContext`](#property-rendercontext)
  - [`size`](#property-size)
  - [`viewportInfo`](#property-viewportinfo)



##### Methods

  - [`Camera()` **constructor**](#method-camera)
  - [`screenToViewport(position, [out])`](#method-screentoviewportposition-out)
  - [`screenToWorld(position, [out])`](#method-screentoworldposition-out)
  - [`viewportToScreen(position, [out])`](#method-viewporttoscreenposition-out)
  - [`viewportToWorld(position, [out])`](#method-viewporttoworldposition-out)
  - [`worldToScreen(position, [out])`](#method-worldtoscreenposition-out)
  - [`worldToViewport(position, [out])`](#method-worldtoviewportposition-out)




### Inherited members

##### Properties

- [`entity`](#property-entity)
- [`_enabled`](#property-_enabled)
- [`enabled`](#property-enabled)
- [`enabledInHierarchy`](#property-enabledinhierarchy)
- [`transform`](#property-transform)
- [`isOnLoadCalled`](#property-isonloadcalled)
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

- [``](#method-update)
- [``](#method-lateupdate)
- [``](#method-onload)
- [``](#method-start)
- [``](#method-onenable)
- [``](#method-ondisable)
- [``](#method-ondestroy)
- [``](#method-onprerender)
- [``](#method-onfocusineditmode)
- [``](#method-onlostfocusineditmode)
- [``](#method-addcomponent)
- [``](#method-getcomponent)
- [``](#method-invoke)
- [``](#method-repeat)
- [``](#method-cancelinvoke)
- [``](#method-cancelrepeat)
- [``](#method-addcomponentmenu)
- [``](#method-executeineditmode)
- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Details


#### Properties



##### property: `background`

The color of the screen background.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Color.html" class="crosslink">Color</a> |
| Defined | [utils/api/engine/camera.js:21](../files/utils_api_engine_camera.js.md#l21) |
| Default    | Fire.Color.black |




##### property: `contentStrategy`

The Content Strategy of the camera.

| meta | description |
|------|-------------|
| Type | <a href="../classes/ContentStrategyType.html" class="crosslink">ContentStrategyType</a> |
| Defined | [utils/api/engine/camera.js:65](../files/utils_api_engine_camera.js.md#l65) |
| Default    | Fire.ContentStrategyType.FixedHeight |




##### property: `main`

The current active camera in scene

| meta | description |
|------|-------------|
| Type | <a href="../classes/Camera.html" class="crosslink">Camera</a> |
| Defined | [utils/api/engine/camera.js:286](../files/utils_api_engine_camera.js.md#l286) |




##### property: `renderContext`

save the render context this camera belongs to, if null, main render context will be used.

| meta | description |
|------|-------------|
| Type | <a href="../classes/_Runtime.RenderContext.html" class="crosslink">_Runtime.RenderContext</a> |
| Defined | [utils/api/engine/camera.js:97](../files/utils_api_engine_camera.js.md#l97) |




##### property: `size`

The height of Design Resolution in pixels

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/camera.js:41](../files/utils_api_engine_camera.js.md#l41) |
| Default    | 800 |




##### property: `viewportInfo`



| meta | description |
|------|-------------|
| Type | object |
| Defined | [utils/api/engine/camera.js:84](../files/utils_api_engine_camera.js.md#l84) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Camera()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/camera.js:4](../files/utils_api_engine_camera.js.md#l4) |



##### method: `screenToViewport(position, [out])`

Transforms position from screen space into viewport space.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/camera.js:157](../files/utils_api_engine_camera.js.md#l157) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- position <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `screenToWorld(position, [out])`

Transforms position from screen space into world space.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/camera.js:188](../files/utils_api_engine_camera.js.md#l188) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- position <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `viewportToScreen(position, [out])`

Transforms position from viewport space into screen space.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/camera.js:141](../files/utils_api_engine_camera.js.md#l141) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- position <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `viewportToWorld(position, [out])`

Transforms position from viewport space into world space.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/camera.js:176](../files/utils_api_engine_camera.js.md#l176) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- position <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `worldToScreen(position, [out])`

Transforms position from world space into screen space.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/camera.js:208](../files/utils_api_engine_camera.js.md#l208) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- position <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector


##### method: `worldToViewport(position, [out])`

Transforms position from world space into viewport space.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/camera.js:226](../files/utils_api_engine_camera.js.md#l226) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 

###### Parameters
- position <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- out <a href="../classes/Vec2.html" class="crosslink">Vec2</a> optional, the receiving vector



