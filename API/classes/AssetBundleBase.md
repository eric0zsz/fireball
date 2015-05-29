
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `AssetBundleBase` Class


Defined in: [utils/api/engine/resources.js:14](../files/utils/api/engine/resources.js.js)

Module: [Fire](../modules/Fire.md)




AssetBundleBase 为 Resources 提供了上层接口，用于加载资源包里的资源。

### Index



##### Methods

  - [`AssetBundleBase()` **constructor**](#method-assetbundlebase)
  - [`_add(path, uuid)`](#method-_addpath-uuid)
  - [`contains(path)`](#method-containspath)
  - [`getAllPaths()`](#method-getallpaths)
  - [`load(path, [callback], [quiet=false])`](#method-loadpath-callback-quietfalse)





### Details




<!-- Method Block -->
#### Methods

##### Constructor

##### method: `AssetBundleBase()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/resources.js:14](../files/utils_api_engine_resources.js.md#l14) |



##### method: `_add(path, uuid)`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/resources.js:146](../files/utils_api_engine_resources.js.md#l146) |

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the path to load, should NOT include filename extensions.
- uuid <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `contains(path)`

Check if the bundle contains a specific object.

Note:
All asset paths in Fireball use forward slashes, paths using backslashes will not work.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/resources.js:33](../files/utils_api_engine_resources.js.md#l33) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> not support wildcard


##### method: `getAllPaths()`

Return all asset paths in the bundle.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/resources.js:47](../files/utils_api_engine_resources.js.md#l47) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a> 



##### method: `load(path, [callback], [quiet=false])`

Loads asset with path from the bundle asynchronously.

wildcard:
- 如果路径以 &#42;&#42;&#47;&#42; 作为结尾，则该路径下的所有资源都会被加载，含子文件夹。
  此时 callback 的第二参数将返回数组，如果文件夹下没有资源，数组长度将会是 0。如果加载出错，数组内的元素将不全。

Note:
All asset paths in Fireball use forward slashes, paths using backslashes will not work.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/resources.js:89](../files/utils_api_engine_resources.js.md#l89) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
	- param <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> error - null or the error info
	- param <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> data - the loaded object or null
- quiet <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> If true, the callback will not invoked even if asset is not found.



