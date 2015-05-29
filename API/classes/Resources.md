
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Resources` Class


Defined in: [utils/api/engine/resources.js:212](../files/utils/api/engine/resources.js.js)

Module: [Fire](../modules/Fire.md)




Resources 模块允许你在运行时动态加载资源。资源以路径的形式标识，路径不能包含文件后缀名。
Resources 能够使用路径加载项目里所有 `Resources` 目录下的资源，例如 `sprites/npc/001`。

### Index

##### Properties

  - [`_resBundle`](#property-_resbundle)



##### Methods

  - [`load(path, callback)`](#method-loadpath-callback)
  - [`mount(baseDir, bundle)`](#method-mountbasedir-bundle)





### Details


#### Properties



##### property: `_resBundle`



| meta | description |
|------|-------------|
| Type | <a href="../classes/ResourcesBundle.html" class="crosslink">ResourcesBundle</a> |
| Defined | [utils/api/engine/resources.js:226](../files/utils_api_engine_resources.js.md#l226) |






<!-- Method Block -->
#### Methods


##### method: `load(path, callback)`

Loads asset with path from resources asynchronously.

Note:
All asset paths in Fireball use forward slashes, paths using backslashes will not work.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/resources.js:257](../files/utils_api_engine_resources.js.md#l257) |

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
	- param <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> error - null or the error info
	- param <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> data - the loaded object or null


##### method: `mount(baseDir, bundle)`

Note:
All asset paths in Fireball use forward slashes, paths using backslashes will not work.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/resources.js:232](../files/utils_api_engine_resources.js.md#l232) |

###### Parameters
- baseDir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- bundle <a href="../classes/AssetBundleBase.html" class="crosslink">AssetBundleBase</a>  



