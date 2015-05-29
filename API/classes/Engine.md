
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Engine` Class

Extends `Playable`

Defined in: [utils/api/engine/engine.js:7](../files/utils/api/engine/engine.js.js)

Module: [Fire](../modules/Fire.md)




Access to engine runtime data.
This class contains static methods for looking up information about and controlling the runtime data.

### Index

##### Properties

  - [`_animationManager`](#property-_animationmanager)
  - [`_canModifyCurrentScene`](#property-_canmodifycurrentscene)
  - [`_curRenderContext`](#property-_currendercontext)
  - [`_inputContext`](#property-_inputcontext)
  - [`_interactionContext`](#property-_interactioncontext)
  - [`_renderContext`](#property-_rendercontext)
  - [`_scene`](#property-_scene)
  - [`inited`](#property-inited)
  - [`isLoadingScene`](#property-isloadingscene)
  - [`isPaused`](#property-ispaused)
  - [`isPlaying`](#property-isplaying)



##### Methods

  - [`_launchScene(scene, [onBeforeLoadScene])`](#method-_launchscenescene-onbeforeloadscene)
  - [`_loadSceneByUuid(uuid, [onLaunched], [onUnloaded])`](#method-_loadscenebyuuiduuid-onlaunched-onunloaded)
  - [`init([width], [height], [canvas], [options])`](#method-initwidth-height-canvas-options)
  - [`loadScene(sceneName, [onLaunched], [onUnloaded])`](#method-loadscenescenename-onlaunched-onunloaded)
  - [`pause()`](#method-pause)
  - [`play()`](#method-play)
  - [`preloadScene(sceneName, [onLoaded])`](#method-preloadscenescenename-onloaded)
  - [`step()`](#method-step)
  - [`stop()`](#method-stop)
  - [`update()`](#method-update)




### Inherited members

##### Properties

- [`isUpdating`](#property-isupdating)

##### Attributes


##### Methods

- [``](#method-onplay)
- [``](#method-onpause)
- [``](#method-onresume)
- [``](#method-onstop)
- [``](#method-onerror)

##### Events




### Details


#### Properties



##### property: `_animationManager`

The instance of global AnimationManager.

| meta | description |
|------|-------------|
| Type | AnimationManager |
| Defined | [utils/api/engine/engine.js:82](../files/utils_api_engine_engine.js.md#l82) |




##### property: `_canModifyCurrentScene`

You should check whether you can modify the scene in constructors which may called by the engine while
deserializing.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/engine.js:102](../files/utils_api_engine_engine.js.md#l102) |




##### property: `_curRenderContext`

the render context currently rendering

| meta | description |
|------|-------------|
| Type | <a href="../classes/_Runtime.RenderContext.html" class="crosslink">_Runtime.RenderContext</a> |
| Defined | [utils/api/engine/engine.js:66](../files/utils_api_engine_engine.js.md#l66) |




##### property: `_inputContext`

The InputContext attached to game or game view.

| meta | description |
|------|-------------|
| Type | InputContext |
| Defined | [utils/api/engine/engine.js:74](../files/utils_api_engine_engine.js.md#l74) |




##### property: `_interactionContext`

The InteractionContext attached to game or game view.

| meta | description |
|------|-------------|
| Type | InteractionContext |
| Defined | [utils/api/engine/engine.js:58](../files/utils_api_engine_engine.js.md#l58) |




##### property: `_renderContext`

The RenderContext attached to game or game view.

| meta | description |
|------|-------------|
| Type | <a href="../classes/_Runtime.RenderContext.html" class="crosslink">_Runtime.RenderContext</a> |
| Defined | [utils/api/engine/engine.js:50](../files/utils_api_engine_engine.js.md#l50) |




##### property: `_scene`

the active scene

| meta | description |
|------|-------------|
| Type | Scene |
| Defined | [utils/api/engine/engine.js:30](../files/utils_api_engine_engine.js.md#l30) |




##### property: `inited`



| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/engine.js:134](../files/utils_api_engine_engine.js.md#l134) |




##### property: `isLoadingScene`

is loading scene?

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/engine.js:90](../files/utils_api_engine_engine.js.md#l90) |




##### property: `isPaused`

is editor currently paused?

| meta | description |
|------|-------------|
| Type | boolean |
| Overwritten | inherited from Playable but overwritten in `utils/api/engine/engine.js:448` |
| Defined | [utils/api/engine/engine.js:448](../files/utils_api_engine_engine.js.md#l448) |




##### property: `isPlaying`

is in player or playing in editor?

| meta | description |
|------|-------------|
| Type | boolean |
| Overwritten | inherited from Playable but overwritten in `utils/api/engine/engine.js:442` |
| Defined | [utils/api/engine/engine.js:442](../files/utils_api_engine_engine.js.md#l442) |






<!-- Method Block -->
#### Methods


##### method: `_launchScene(scene, [onBeforeLoadScene])`

Launch loaded scene.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/engine.js:294](../files/utils_api_engine_engine.js.md#l294) |

###### Parameters
- scene Scene  
- onBeforeLoadScene <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  


##### method: `_loadSceneByUuid(uuid, [onLaunched], [onUnloaded])`

Loads the scene by its uuid.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/engine.js:378](../files/utils_api_engine_engine.js.md#l378) |

###### Parameters
- uuid <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the uuid of the scene asset to load
- onLaunched <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
- onUnloaded <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  


##### method: `init([width], [height], [canvas], [options])`

Initialize the engine. This method will be called by boot.js or editor.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/engine.js:148](../files/utils_api_engine_engine.js.md#l148) |
| Return 		 | <a href="../classes/_Runtime.RenderContext.html" class="crosslink">_Runtime.RenderContext</a> 

###### Parameters
- width <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- height <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- canvas Canvas  
- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>  


##### method: `loadScene(sceneName, [onLaunched], [onUnloaded])`

Loads the scene by its name.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/engine.js:353](../files/utils_api_engine_engine.js.md#l353) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- sceneName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the name of the scene to load
- onLaunched <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after scene launched
- onUnloaded <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called when the previous scene was unloaded


##### method: `pause()`

Pause the engine loop.

| meta | description |
|------|-------------|
| Overwritten | inherited from Playable but overwritten in `utils/api/engine/engine.js:462` |
| Defined | [utils/api/engine/engine.js:462](../files/utils_api_engine_engine.js.md#l462) |



##### method: `play()`

Start the engine loop. This method will be called by boot.js or editor.

| meta | description |
|------|-------------|
| Overwritten | inherited from Playable but overwritten in `utils/api/engine/engine.js:454` |
| Defined | [utils/api/engine/engine.js:454](../files/utils_api_engine_engine.js.md#l454) |



##### method: `preloadScene(sceneName, [onLoaded])`

Preloads the scene to reduces loading time. You can call this method at any time you want.

After calling this method, you still need to launch the scene by `Engine.loadScene` because the loading logic
will not changed. It will be totally fine to call `Engine.loadScene` at any time even if the preloading is not
yet finished, the scene will be launched after loaded automatically.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/engine.js:412](../files/utils_api_engine_engine.js.md#l412) |

###### Parameters
- sceneName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the name of the scene to preload
- onLoaded <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> callback, will be called after the scene loaded
	- param <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> error - null or the error info
	- param <a href="../classes/Asset.html" class="crosslink">Asset</a> data - the loaded scene or null


##### method: `step()`

Perform a single frame step.

| meta | description |
|------|-------------|
| Overwritten | inherited from Playable but overwritten in `utils/api/engine/engine.js:466` |
| Defined | [utils/api/engine/engine.js:466](../files/utils_api_engine_engine.js.md#l466) |



##### method: `stop()`

Stop the engine loop.

| meta | description |
|------|-------------|
| Overwritten | inherited from Playable but overwritten in `utils/api/engine/engine.js:458` |
| Defined | [utils/api/engine/engine.js:458](../files/utils_api_engine_engine.js.md#l458) |



##### method: `update()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/engine.js:272](../files/utils_api_engine_engine.js.md#l272) |




