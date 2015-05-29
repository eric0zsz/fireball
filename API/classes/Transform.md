
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Transform` Class

Extends `Component`

Defined in: [utils/api/engine/transform.js:8](../files/utils/api/engine/transform.js.js)

Module: [Fire](../modules/Fire.md)




Defines position, rotation and scale of an entity.

### Index

##### Properties

  - [`_parent`](#property-_parent)
  - [`_position;`](#property-_position;)
  - [`_scale;`](#property-_scale;)
  - [`position`](#property-position)
  - [`right`](#property-right)
  - [`rotation`](#property-rotation)
  - [`scale`](#property-scale)
  - [`scaleX`](#property-scalex)
  - [`scaleY`](#property-scaley)
  - [`up`](#property-up)
  - [`worldPosition`](#property-worldposition)
  - [`worldRotation`](#property-worldrotation)
  - [`worldScale`](#property-worldscale)
  - [`worldX`](#property-worldx)
  - [`worldY`](#property-worldy)
  - [`x`](#property-x)
  - [`y`](#property-y)



##### Methods

  - [`Transform()` **constructor**](#method-transform)
  - [`getLocalMatrix([out])`](#method-getlocalmatrixout)
  - [`getLocalToWorldMatrix([out])`](#method-getlocaltoworldmatrixout)
  - [`getWorldToLocalMatrix([out])`](#method-getworldtolocalmatrixout)
  - [`rotateAround(point, angle)`](#method-rotatearoundpoint-angle)
  - [`translate(translation)`](#method-translatetranslation)




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

- [`update()`](#method-update)
- [`lateUpdate()`](#method-lateupdate)
- [`onLoad()`](#method-onload)
- [`start()`](#method-start)
- [`onEnable()`](#method-onenable)
- [`onDisable()`](#method-ondisable)
- [`onDestroy()`](#method-ondestroy)
- [`onPreRender()`](#method-onprerender)
- [`onFocusInEditMode()`](#method-onfocusineditmode)
- [`onLostFocusInEditMode()`](#method-onlostfocusineditmode)
- [`addComponent(typeOrName)`](#method-addcomponent)
- [`getComponent(typeOrName)`](#method-getcomponent)
- [`invoke(functionOrMethodName, [delay=0])`](#method-invoke)
- [`repeat(functionOrMethodName, [delay=0])`](#method-repeat)
- [`cancelInvoke(methodNameOrInvokeId)`](#method-cancelinvoke)
- [`cancelRepeat(methodNameOrRepeatId)`](#method-cancelrepeat)
- [`addComponentMenu(constructor, menuPath, [priority])`](#method-addcomponentmenu)
- [`executeInEditMode(constructor, [live=false])`](#method-executeineditmode)
- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Details


#### Properties



##### property: `_parent`

the cached reference to parent transform

| meta | description |
|------|-------------|
| Type | <a href="../classes/Transform.html" class="crosslink">Transform</a> |
| Defined | [utils/api/engine/transform.js:36](../files/utils_api_engine_transform.js.md#l36) |
| Default    | null |




##### property: `_position;`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/engine/transform.js:19](../files/utils_api_engine_transform.js.md#l19) |
| Default    | new Vec2(0, 0) |




##### property: `_scale;`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/engine/transform.js:26](../files/utils_api_engine_transform.js.md#l26) |
| Default    | new Vec2(1, 1) |




##### property: `position`

The local position in its parent's coordinate system

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/engine/transform.js:52](../files/utils_api_engine_transform.js.md#l52) |
| Default    | new Vec2(0, 0) |




##### property: `right`

right direction in world space, point to the x(red) axis

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/engine/transform.js:593](../files/utils_api_engine_transform.js.md#l593) |




##### property: `rotation`

The counterclockwise degrees of rotation relative to the parent

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/transform.js:75](../files/utils_api_engine_transform.js.md#l75) |
| Default    | 0 |




##### property: `scale`

The local scale factor relative to the parent

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/engine/transform.js:95](../files/utils_api_engine_transform.js.md#l95) |
| Default    | new Vec2(1, 1) |




##### property: `scaleX`

The local x scale factor relative to the parent

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/transform.js:516](../files/utils_api_engine_transform.js.md#l516) |
| Default    | 1 |




##### property: `scaleY`

The local y scale factor relative to the parent

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/transform.js:539](../files/utils_api_engine_transform.js.md#l539) |
| Default    | 1 |




##### property: `up`

up direction in world space, point to the y(green) axis

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/engine/transform.js:575](../files/utils_api_engine_transform.js.md#l575) |




##### property: `worldPosition`

The position of the transform in world space

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/engine/transform.js:385](../files/utils_api_engine_transform.js.md#l385) |
| Default    | new Vec2(0, 0) |




##### property: `worldRotation`

The counterclockwise degrees of rotation in world space

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/transform.js:487](../files/utils_api_engine_transform.js.md#l487) |
| Default    | 0 |




##### property: `worldScale`

The lossy scale of the transform in world space (Read Only)

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/engine/transform.js:562](../files/utils_api_engine_transform.js.md#l562) |
| Default    | new Vec2(1, 1) |




##### property: `worldX`

The x position of the transform in world space

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/transform.js:413](../files/utils_api_engine_transform.js.md#l413) |
| Default    | 0 |




##### property: `worldY`

The y position of the transform in world space

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/transform.js:453](../files/utils_api_engine_transform.js.md#l453) |
| Default    | 0 |




##### property: `x`

The local x position in its parent's coordinate system

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/transform.js:339](../files/utils_api_engine_transform.js.md#l339) |
| Default    | 0 |




##### property: `y`

The local y position in its parent's coordinate system

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/transform.js:362](../files/utils_api_engine_transform.js.md#l362) |
| Default    | 0 |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Transform()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/transform.js:8](../files/utils_api_engine_transform.js.md#l8) |



##### method: `getLocalMatrix([out])`

Get the local matrix that transforms a point from local space into parents space.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/transform.js:192](../files/utils_api_engine_transform.js.md#l192) |
| Return 		 | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> 

###### Parameters
- out <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> optional, the receiving vector


##### method: `getLocalToWorldMatrix([out])`

Get the world transform matrix that transforms a point from local space into world space.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/transform.js:231](../files/utils_api_engine_transform.js.md#l231) |
| Return 		 | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> 

###### Parameters
- out <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> optional, the receiving vector


##### method: `getWorldToLocalMatrix([out])`

Get the inverse world transform matrix that transforms a point from world space into local space.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/transform.js:247](../files/utils_api_engine_transform.js.md#l247) |
| Return 		 | <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> 

###### Parameters
- out <a href="../classes/Matrix23.html" class="crosslink">Matrix23</a> optional, the receiving vector


##### method: `rotateAround(point, angle)`

Rotates this transform through point in world space by angle degrees.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/transform.js:256](../files/utils_api_engine_transform.js.md#l256) |

###### Parameters
- point <a href="../classes/Vec2.html" class="crosslink">Vec2</a> the world point rotates through
- angle <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> degrees


##### method: `translate(translation)`

Moves the transform in the direction and distance of translation. The movement is applied relative to the
transform's local space.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/transform.js:268](../files/utils_api_engine_transform.js.md#l268) |

###### Parameters
- translation <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  



