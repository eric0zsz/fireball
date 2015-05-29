
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `_DeserializeInfo` Class


Defined in: [utils/api/core/deserialize.js:402](../files/utils/api/core/deserialize.js.js)

Module: [Fire](../modules/Fire.md)




 

### Index

##### Properties

  - [`rawProp`](#property-rawprop)
  - [`uuidList`](#property-uuidlist)
  - [`uuidObjList`](#property-uuidobjlist)
  - [`uuidPropList`](#property-uuidproplist)



##### Methods

  - [`_DeserializeInfo()` **constructor**](#method-_deserializeinfo)
  - [`assignAssetsBy(getter)`](#method-assignassetsbygetter)
  - [`getUuidOf(obj, propName)`](#method-getuuidofobj-propname)
  - [`reset()`](#method-reset)





### Details


#### Properties



##### property: `rawProp`

the corresponding field name which referenced to the raw object

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/core/deserialize.js:436](../files/utils_api_core_deserialize.js.md#l436) |




##### property: `uuidList`

list of the depends assets' uuid

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/core/deserialize.js:414](../files/utils_api_core_deserialize.js.md#l414) |




##### property: `uuidObjList`

the obj list whose field needs to load asset by uuid

| meta | description |
|------|-------------|
| Type | object |
| Defined | [utils/api/core/deserialize.js:420](../files/utils_api_core_deserialize.js.md#l420) |




##### property: `uuidPropList`

the corresponding field name which referenced to the asset

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/core/deserialize.js:426](../files/utils_api_core_deserialize.js.md#l426) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `_DeserializeInfo()`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/deserialize.js:402](../files/utils_api_core_deserialize.js.md#l402) |



##### method: `assignAssetsBy(getter)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/deserialize.js:475](../files/utils_api_core_deserialize.js.md#l475) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- getter <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>  


##### method: `getUuidOf(obj, propName)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/deserialize.js:460](../files/utils_api_core_deserialize.js.md#l460) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- obj <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>  
- propName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `reset()`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/deserialize.js:448](../files/utils_api_core_deserialize.js.md#l448) |




