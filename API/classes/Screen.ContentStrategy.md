
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Screen.ContentStrategy` Class


Defined in: [utils/api/engine/screen–agnostic.js:237](../files/utils/api/engine/screen–agnostic.js.js)

Module: [Fire](../modules/Fire.md)




ContentStrategy class is the root strategy class of content's scale strategy,
it controls the behavior of how to scale the scene and setup the viewport for the game.

### Index



##### Methods

  - [`Screen.ContentStrategy()` **constructor**](#method-screen.contentstrategy)
  - [`apply(designedResolution)`](#method-applydesignedresolution)
  - [`buildResult(container, content, scale)`](#method-buildresultcontainer-content-scale)
  - [`fromType(type)`](#method-fromtypetype)
  - [`getContainerSize()`](#method-getcontainersize)





### Details




<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Screen.ContentStrategy()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/screen–agnostic.js:237](../files/utils_api_engine_screen–agnostic.js.md#l237) |



##### method: `apply(designedResolution)`

Function to apply this strategy

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/screen–agnostic.js:111](../files/utils_api_engine_screen–agnostic.js.md#l111) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- designedResolution <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `buildResult(container, content, scale)`

Helper function for apply.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/screen–agnostic.js:120](../files/utils_api_engine_screen–agnostic.js.md#l120) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- container <a href="../classes/Vec2.html" class="crosslink">Vec2</a> size of container
- content <a href="../classes/Vec2.html" class="crosslink">Vec2</a> size of content
- scale <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `fromType(type)`

Get the content strategy instance by type

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/screen–agnostic.js:240](../files/utils_api_engine_screen–agnostic.js.md#l240) |
| Return 		 | <a href="../classes/Screen.ContentStrategy.html" class="crosslink">Screen.ContentStrategy</a> 

###### Parameters
- type <a href="../classes/ContentStrategyType.html" class="crosslink">ContentStrategyType</a>  


##### method: `getContainerSize()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/screen–agnostic.js:155](../files/utils_api_engine_screen–agnostic.js.md#l155) |
| Return 		 | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> 




