
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `CallbacksInvoker` Class

Extends `_CallbacksHandler`

Defined in: [utils/api/core/callbacks-invoker.js:94](../files/utils/api/core/callbacks-invoker.js.js)

Module: [Fire](../modules/Fire.md)




The callbacks invoker to handle and invoke callbacks by key

### Index



##### Methods

  - [`CallbacksInvoker()` **constructor**](#method-callbacksinvoker)
  - [`bindKey(key, [remove=false])`](#method-bindkeykey-removefalse)
  - [`invoke(key, [p1], [p2], [p3], [p4], [p5])`](#method-invokekey-p1-p2-p3-p4-p5)
  - [`invokeAndRemove(key, [p1], [p2], [p3], [p4], [p5])`](#method-invokeandremovekey-p1-p2-p3-p4-p5)




### Inherited members

##### Properties


##### Attributes


##### Methods

- [`add(key, callback)`](#method-add)
- [`has(key, [callback])`](#method-has)
- [`removeAll(key)`](#method-removeall)
- [`remove(key, callback)`](#method-remove)

##### Events




### Details




<!-- Method Block -->
#### Methods

##### Constructor

##### method: `CallbacksInvoker()`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/callbacks-invoker.js:94](../files/utils_api_core_callbacks-invoker.js.md#l94) |



##### method: `bindKey(key, [remove=false])`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/callbacks-invoker.js:147](../files/utils_api_core_callbacks-invoker.js.md#l147) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- remove <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> remove callbacks after invoked


##### method: `invoke(key, [p1], [p2], [p3], [p4], [p5])`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/callbacks-invoker.js:108](../files/utils_api_core_callbacks-invoker.js.md#l108) |

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- p1 Any  
- p2 Any  
- p3 Any  
- p4 Any  
- p5 Any  


##### method: `invokeAndRemove(key, [p1], [p2], [p3], [p4], [p5])`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/callbacks-invoker.js:126](../files/utils_api_core_callbacks-invoker.js.md#l126) |

###### Parameters
- key <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- p1 Any  
- p2 Any  
- p3 Any  
- p4 Any  
- p5 Any  



