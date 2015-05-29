
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `LoadManager` Class


Defined in: [utils/api/engine/load-manager.js:5](../files/utils/api/engine/load-manager.js.js)

Module: [Fire](../modules/Fire.md)




The manager scheduling resources loading
- It will:
  - select registered loader
  - merge same url request
  - limit the max concurrent request
- It will NOT:
  - cache what has being loaded
  - load depends of resource

### Index

##### Properties

  - [`_curConcurrent`](#property-_curconcurrent)
  - [`maxConcurrent`](#property-maxconcurrent)



##### Methods

  - [`load(url, rawType, [rawExtname], callback)`](#method-loadurl-rawtype-rawextname-callback)
  - [`loadByLoader(loader, url, callback)`](#method-loadbyloaderloader-url-callback)
  - [`registerRawTypes(rawType, loader, defaultExtname)`](#method-registerrawtypesrawtype-loader-defaultextname)





### Details


#### Properties



##### property: `_curConcurrent`

Current concurrent request count

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/load-manager.js:76](../files/utils_api_engine_load-manager.js.md#l76) |




##### property: `maxConcurrent`

Max allowed concurrent request count

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/load-manager.js:68](../files/utils_api_engine_load-manager.js.md#l68) |
| Default    | 2 |






<!-- Method Block -->
#### Methods


##### method: `load(url, rawType, [rawExtname], callback)`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/load-manager.js:110](../files/utils_api_engine_load-manager.js.md#l110) |

###### Parameters
- url <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- rawType <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- rawExtname <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
	- param <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> error - null or the error info
	- param Any data - the loaded data


##### method: `loadByLoader(loader, url, callback)`

NOTE: Request the same url with different loader is disallowed

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/load-manager.js:84](../files/utils_api_engine_load-manager.js.md#l84) |

###### Parameters
- loader <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
- url <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
	- param <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> error - null or the error info
	- param Any data - the loaded data


##### method: `registerRawTypes(rawType, loader, defaultExtname)`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/load-manager.js:142](../files/utils_api_engine_load-manager.js.md#l142) |

###### Parameters
- rawType <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- loader <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  
- defaultExtname <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  



