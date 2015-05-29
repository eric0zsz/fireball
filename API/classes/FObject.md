
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `FObject` Class


Defined in: [utils/api/core/object.js:4](../files/utils/api/core/object.js.js)

Module: [Fire](../modules/Fire.md)




The base class of most of all the objects in Fireball.

### Index

##### Properties

  - [`_name`](#property-_name)
  - [`_objFlags`](#property-_objflags)
  - [`isValid`](#property-isvalid)
  - [`name`](#property-name)



##### Methods

  - [`FObject()` **constructor**](#method-fobject)
  - [`_deserialize(data, ctx, target)`](#method-_deserializedata-ctx-target)
  - [`_destruct()`](#method-_destruct)
  - [`_onPreDestroy()`](#method-_onpredestroy)
  - [`_serialize(exporting)`](#method-_serializeexporting)
  - [`destroy()`](#method-destroy)
  - [`isValid(value)`](#method-isvalidvalue)





### Details


#### Properties



##### property: `_name`



| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/core/object.js:15](../files/utils_api_core_object.js.md#l15) |
| Default    | &quot;&quot; |




##### property: `_objFlags`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/object.js:23](../files/utils_api_core_object.js.md#l23) |
| Default    | 0 |




##### property: `isValid`

Indicates whether the object is not yet destroyed

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/core/object.js:94](../files/utils_api_core_object.js.md#l94) |
| Default    | true |




##### property: `name`

The name of the object.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/core/object.js:79](../files/utils_api_core_object.js.md#l79) |
| Default    | &quot;&quot; |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `FObject()`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/object.js:4](../files/utils_api_core_object.js.md#l4) |



##### method: `_deserialize(data, ctx, target)`

Init this object from the custom serialized data.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/object.js:203](../files/utils_api_core_object.js.md#l203) |

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the serialized json data
- ctx _Deserializer  
- target <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>  


##### method: `_destruct()`

Clear all references in the instance.

NOTE: this method will not clear the getter or setter functions which defined in the INSTANCE of FObject.
      You can override the _destruct method if you need.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/object.js:139](../files/utils_api_core_object.js.md#l139) |



##### method: `_onPreDestroy()`

Called before the object being destroyed.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/object.js:170](../files/utils_api_core_object.js.md#l170) |



##### method: `_serialize(exporting)`

The customized serialization for this object. (Editor Only)

| meta | description |
|------|-------------|
| Defined | [utils/api/core/object.js:193](../files/utils_api_core_object.js.md#l193) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- exporting <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>  


##### method: `destroy()`

Destroy this FObject, and release all its own references to other resources.

After destory, this FObject is not usable any more.
You can use Fire.isValid(obj) (or obj.isValid if obj is non-nil) to check whether the object is destroyed before
accessing it.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/object.js:109](../files/utils_api_core_object.js.md#l109) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### method: `isValid(value)`

Checks whether the object is non-nil and not yet destroyed

| meta | description |
|------|-------------|
| Defined | [utils/api/core/object.js:219](../files/utils_api_core_object.js.md#l219) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- value <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> | any  



