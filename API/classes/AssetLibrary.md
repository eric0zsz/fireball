
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `AssetLibrary` Class


Defined in: [utils/api/engine/asset-library.js:4](../files/utils/api/engine/asset-library.js.js)

Module: [Fire](../modules/Fire.md)




The asset library which managing loading/unloading assets in project.

### Index

##### Properties

  - [`_uuidToAsset`](#property-_uuidtoasset)



##### Methods

  - [`_deserializeWithDepends(json, url, callback, handle, [existingAsset])`](#method-_deserializewithdependsjson-url-callback-handle-existingasset)
  - [`_loadAssetByUuid(uuid, callback, handle, [existingAsset])`](#method-_loadassetbyuuiduuid-callback-handle-existingasset)
  - [`getAssetByUuid(uuid)`](#method-getassetbyuuiduuid)
  - [`init(libraryPath)`](#method-initlibrarypath)
  - [`loadAsset(uuid, callback, [readMainCache=true], [writeMainCache=true], [existingAsset])`](#method-loadassetuuid-callback-readmaincachetrue-writemaincachetrue-existingasset)
  - [`loadJson(json, callback, [dontCache=false])`](#method-loadjsonjson-callback-dontcachefalse)
  - [`unloadAsset(assetOrUuid, [destroy=false])`](#method-unloadassetassetoruuid-destroyfalse)





### Details


#### Properties



##### property: `_uuidToAsset`

Caches uuid to all loaded assets in scenes.

| meta | description |
|------|-------------|
| Type | object |
| Defined | [utils/api/engine/asset-library.js:367](../files/utils_api_engine_asset-library.js.md#l367) |






<!-- Method Block -->
#### Methods


##### method: `_deserializeWithDepends(json, url, callback, handle, [existingAsset])`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/asset-library.js:166](../files/utils_api_engine_asset-library.js.md#l166) |

###### Parameters
- json <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | object  
- url <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- callback loadCallback  
	- error <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- data <a href="../classes/Asset.html" class="crosslink">Asset</a> the loaded asset or null
- handle <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the loading context which reserves all relevant parameters
- existingAsset <a href="../classes/Asset.html" class="crosslink">Asset</a> existing asset to reload


##### method: `_loadAssetByUuid(uuid, callback, handle, [existingAsset])`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/asset-library.js:82](../files/utils_api_engine_asset-library.js.md#l82) |

###### Parameters
- uuid <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- callback loadCallback the callback to receive the asset, can be null
	- error <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- data <a href="../classes/Asset.html" class="crosslink">Asset</a> the loaded asset or null
- handle LoadingHandle the loading context which reserves all relevant parameters
- existingAsset <a href="../classes/Asset.html" class="crosslink">Asset</a> load to existing asset, this argument is only available in editor


##### method: `getAssetByUuid(uuid)`

Get the exists asset by uuid.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/asset-library.js:302](../files/utils_api_engine_asset-library.js.md#l302) |
| Return 		 | <a href="../classes/Asset.html" class="crosslink">Asset</a> 

###### Parameters
- uuid <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `init(libraryPath)`

init the asset library

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/asset-library.js:342](../files/utils_api_engine_asset-library.js.md#l342) |

###### Parameters
- libraryPath <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `loadAsset(uuid, callback, [readMainCache=true], [writeMainCache=true], [existingAsset])`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/asset-library.js:63](../files/utils_api_engine_asset-library.js.md#l63) |

###### Parameters
- uuid <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- callback loadCallback the callback function once load finished
	- error <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- data <a href="../classes/Asset.html" class="crosslink">Asset</a> the loaded asset or null
- readMainCache <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> If false, the asset and all its depends assets will reload and create new instances from library.
- writeMainCache <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> If true, the result will cache to AssetLibrary, and MUST be unload by user manually.
- existingAsset <a href="../classes/Asset.html" class="crosslink">Asset</a> load to existing asset, this argument is only available in editor


##### method: `loadJson(json, callback, [dontCache=false])`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/asset-library.js:154](../files/utils_api_engine_asset-library.js.md#l154) |

###### Parameters
- json <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | object  
- callback loadCallback  
	- error <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> null or the error info
	- data <a href="../classes/Asset.html" class="crosslink">Asset</a> the loaded asset or null
- dontCache <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> If false, the result will cache to AssetLibrary, and MUST be unload by user manually.


##### method: `unloadAsset(assetOrUuid, [destroy=false])`

Kill references to the asset so it can be garbage collected.
Fireball will reload the asset from disk or remote if loadAssetByUuid being called again.
You rarely use this function in scripts, since it will be called automatically when the Asset is destroyed.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/asset-library.js:314](../files/utils_api_engine_asset-library.js.md#l314) |

###### Parameters
- assetOrUuid <a href="../classes/Asset.html" class="crosslink">Asset</a> | string  
- destroy <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> When destroyImmediate is true, if there are objects referencing the asset, the references will become invalid.



