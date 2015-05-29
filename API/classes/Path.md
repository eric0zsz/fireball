
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Path` Class


Defined in: [utils/api/core/path.js:4](../files/utils/api/core/path.js.js)

Module: [Fire](../modules/Fire.md)




The utils for path operation

### Index

##### Properties

  - [`sep`](#property-sep)



##### Methods

  - [`basename(path)`](#method-basenamepath)
  - [`dirname(path)`](#method-dirnamepath)
  - [`extname(path)`](#method-extnamepath)
  - [`setEndWithSep(path, [endWithSep = true])`](#method-setendwithseppath-endwithseptrue)
  - [`setExtname(path, newExtension)`](#method-setextnamepath-newextension)





### Details


#### Properties



##### property: `sep`

The platform-specific file separator. '\\' or '/'.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/core/path.js:117](../files/utils_api_core_path.js.md#l117) |
| Default    | windows: &quot;\&quot;, mac: &quot;/&quot; |






<!-- Method Block -->
#### Methods


##### method: `basename(path)`

Return the last portion of a path.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/path.js:55](../files/utils_api_core_path.js.md#l55) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  

**Examples**

   path.basename('/foo/bar/baz/asdf/quux.html')    // returns 'quux.html'

##### method: `dirname(path)`

Return the directory name of a path.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/path.js:88](../files/utils_api_core_path.js.md#l88) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  

**Examples**

path.dirname('/foo/bar/baz/asdf/quux') // returns '/foo/bar/baz/asdf'

##### method: `extname(path)`

Return the extension of the path, from the last '.' to end of string in the last portion of the path.
If there is no '.' in the last portion of the path or the first character of it is '.',
then it returns an empty string.

| meta | description |
|------|-------------|
| Defined | [utils/api/core/path.js:68](../files/utils_api_core_path.js.md#l68) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  

**Examples**

path.extname('index.html')      // returns '.html'
path.extname('index.coffee.md') // returns '.md'
path.extname('index.')          // returns '.'
path.extname('index')           // returns ''

##### method: `setEndWithSep(path, [endWithSep = true])`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/path.js:142](../files/utils_api_core_path.js.md#l142) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- endWithSep  <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>  


##### method: `setExtname(path, newExtension)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/path.js:130](../files/utils_api_core_path.js.md#l130) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- newExtension <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> extension to replace with



