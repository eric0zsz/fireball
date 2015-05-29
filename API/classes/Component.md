
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Component` Class

Extends `HashObject`

Defined in: [utils/api/engine/component.js:117](../files/utils/api/engine/component.js.js)

Module: [Fire](../modules/Fire.md)




Base class for everything attached to Entity.

NOTE: Not allowed to use construction parameters for Component's subclasses,
      because Component is created by the engine.

### Index

##### Properties

  - [`_enabled`](#property-_enabled)
  - [`enabled`](#property-enabled)
  - [`enabledInHierarchy`](#property-enabledinhierarchy)
  - [`entity`](#property-entity)
  - [`isOnLoadCalled`](#property-isonloadcalled)
  - [`transform`](#property-transform)



##### Methods

  - [`Component()` **constructor**](#method-component)
  - [`addComponent(typeOrName)`](#method-addcomponenttypeorname)
  - [`addComponentMenu(constructor, menuPath, [priority])`](#method-addcomponentmenuconstructor-menupath-priority)
  - [`cancelInvoke(methodNameOrInvokeId)`](#method-cancelinvokemethodnameorinvokeid)
  - [`cancelRepeat(methodNameOrRepeatId)`](#method-cancelrepeatmethodnameorrepeatid)
  - [`executeInEditMode(constructor, [live=false])`](#method-executeineditmodeconstructor-livefalse)
  - [`getComponent(typeOrName)`](#method-getcomponenttypeorname)
  - [`invoke(functionOrMethodName, [delay=0])`](#method-invokefunctionormethodname-delay0)
  - [`lateUpdate()`](#method-lateupdate)
  - [`onDestroy()`](#method-ondestroy)
  - [`onDisable()`](#method-ondisable)
  - [`onEnable()`](#method-onenable)
  - [`onFocusInEditMode()`](#method-onfocusineditmode)
  - [`onLoad()`](#method-onload)
  - [`onLostFocusInEditMode()`](#method-onlostfocusineditmode)
  - [`onPreRender()`](#method-onprerender)
  - [`repeat(functionOrMethodName, [delay=0])`](#method-repeatfunctionormethodname-delay0)
  - [`start()`](#method-start)
  - [`update()`](#method-update)




### Inherited members

##### Properties

- [`_hashCode`](#property-_hashcode)
- [`_id`](#property-_id)
- [`hashCode`](#property-hashcode)
- [`id`](#property-id)
- [`_name`](#property-_name)
- [`_objFlags`](#property-_objflags)
- [`name`](#property-name)
- [`isValid`](#property-isvalid)

##### Attributes


##### Methods

- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Inheritance tree


### Details


#### Properties



##### property: `_enabled`



| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/component.js:179](../files/utils_api_engine_component.js.md#l179) |




##### property: `enabled`

indicates whether this component is enabled or not.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/component.js:186](../files/utils_api_engine_component.js.md#l186) |
| Default    | true |




##### property: `enabledInHierarchy`

indicates whether this component is enabled and its entity is also active in the hierarchy.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/component.js:209](../files/utils_api_engine_component.js.md#l209) |




##### property: `entity`

The entity this component is attached to. A component is always attached to an entity.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Entity.html" class="crosslink">Entity</a> |
| Defined | [utils/api/engine/component.js:139](../files/utils_api_engine_component.js.md#l139) |




##### property: `isOnLoadCalled`



| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/component.js:235](../files/utils_api_engine_component.js.md#l235) |




##### property: `transform`

Returns the {% crosslink Fire.Transform Transform %} attached to the entity.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Transform.html" class="crosslink">Transform</a> |
| Defined | [utils/api/engine/component.js:222](../files/utils_api_engine_component.js.md#l222) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Component()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:117](../files/utils_api_engine_component.js.md#l117) |



##### method: `addComponent(typeOrName)`

Adds a component class to the entity. You can also add component to entity by passing in the name of the
script.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:312](../files/utils_api_engine_component.js.md#l312) |
| Return 		 | <a href="../classes/Component.html" class="crosslink">Component</a> 

###### Parameters
- typeOrName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> | string the constructor or the class name of the component to add


##### method: `addComponentMenu(constructor, menuPath, [priority])`

Register a component to the "Component" menu.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:556](../files/utils_api_engine_component.js.md#l556) |

###### Parameters
- constructor <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> the class you want to register, must inherit from Component
- menuPath <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the menu path name. Eg. "Rendering/Camera"
- priority <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the order which the menu item are displayed


##### method: `cancelInvoke(methodNameOrInvokeId)`

Cancels previous invoke calls with methodName or InvokeID on this component.
When using methodName, all calls with the same methodName will be canceled.
InvokeID is the identifier of the invoke action you want to cancel, as returned by invoke().

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:373](../files/utils_api_engine_component.js.md#l373) |

###### Parameters
- methodNameOrInvokeId <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | number  

**Examples**
```var Comp = Fire.Class({
  // ...........
  constructor: function() {
    // declare a variable to store invoke id across different methods
    this.invoke1 = null;
  },

  // start two invokes, one with method name, one with function
  startInvokes: function() {
    // use invoke to delay a function call
    this.invoke1 = this.invoke(function() {
      Fire.log("This message will show in 2 seconds");
    }, 2);
    // invoke by a method name
    this.invoke("invoke2", 1);
  },

  invoke2: function () {
    Fire.log("This is called with a method name. Will show up in 1 second.");
  },

  // we will cancel the two invokes here
  cancel: function () {
    // cancel invoke1 by id
    this.cancelInvoke(this.invoke1);
    // cancel invoke2 by name
    this.cancelInvoke("invoke2");
  }
});


##### method: `cancelRepeat(methodNameOrRepeatId)`

Cancels previous repeat calls with methodName or RepeatID on this component.
When using methodName, all calls with the same methodName will be canceled.
RepeatID is the identifier of the repeat action you want to cancel, as returned by repeat().

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:392](../files/utils_api_engine_component.js.md#l392) |

###### Parameters
- methodNameOrRepeatId <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | number  

**Examples**
```var Comp = Fire.Class({
  // ...........
  constructor: function() {
    // declare a variable to store repeat id across different methods
    this.repeat1 = null;
  },

  // start two repeats, one with method name, one with function
  startRepeats: function() {
    // use repeat to repeatedly call a function with a delay in between
    this.repeat1 = this.repeat(function() {
      Fire.log("This message will show in EVERY 2 seconds");
    }, 2);
    // repeat by a method name
    this.repeat("repeat2", 1);
  },

  repeat2: function () {
    Fire.log("This is called with a method name. Will show in EVERY second.");
  },

  // we will cancel the two repeats here
  cancel: function () {
    // cancel repeat1 by id
    this.cancelRepeat(this.repeat1);
    // cancel repeat2 by name
    this.cancelRepeat("repeat2");
  }
});


##### method: `executeInEditMode(constructor, [live=false])`

Makes a component execute in edit mode.
By default, all components are only executed in play mode,
which means they will not have their callback functions executed while the Editor is in edit mode.
By calling this function, each component will also have its callback executed in edit mode.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:582](../files/utils_api_engine_component.js.md#l582) |

###### Parameters
- constructor <a href="../classes/Component.html" class="crosslink">Component</a> The class you want to register, must inherit from Component.
- live <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> If true, the scene view will keep updating this entity in 60 fps when it is selected,
                        otherwise, it will update only if necessary.


##### method: `getComponent(typeOrName)`

Returns the component of supplied type if the entity has one attached, null if it doesn't. You can also get
component in the entity by passing in the name of the script.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:324](../files/utils_api_engine_component.js.md#l324) |
| Return 		 | <a href="../classes/Component.html" class="crosslink">Component</a> 

###### Parameters
- typeOrName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> | string  


##### method: `invoke(functionOrMethodName, [delay=0])`

Invokes the method on this component after a specified delay.
The method will be invoked even if this component is disabled, but will not invoked if this component is
destroyed.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:347](../files/utils_api_engine_component.js.md#l347) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- functionOrMethodName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> | string  
- delay <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of seconds that the function call should be delayed by. If omitted, it defaults to 0. The actual delay may be longer.

**Examples**
```var Comp = Fire.Class({
  // ...........

  //  use this for initialization
  start: function () {
      // use invoke to delay a function call
      this.invoke(function() {
          Fire.log("This message will show in 2 seconds");
          // you can also invoke a instance method name,
          // the second parameter is the delay before function call
          var delay = 1; //in seconds
          this.invoke('hello', delay);
      }, 2);
  },

  // define instance method for invoke
  hello: function () {
      Fire.log("Hello!");
  }
});


##### method: `lateUpdate()`

LateUpdate is called every frame, if the Component is enabled.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:258](../files/utils_api_engine_component.js.md#l258) |



##### method: `onDestroy()`

Called when this component will be destroyed.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:289](../files/utils_api_engine_component.js.md#l289) |



##### method: `onDisable()`

Called when this component becomes disabled or its entity becomes inactive

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:283](../files/utils_api_engine_component.js.md#l283) |



##### method: `onEnable()`

Called when this component becomes enabled and its entity becomes active

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:277](../files/utils_api_engine_component.js.md#l277) |



##### method: `onFocusInEditMode()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:302](../files/utils_api_engine_component.js.md#l302) |



##### method: `onLoad()`

When attaching to an active entity or its entity first activated

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:265](../files/utils_api_engine_component.js.md#l265) |



##### method: `onLostFocusInEditMode()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:306](../files/utils_api_engine_component.js.md#l306) |



##### method: `onPreRender()`

Called when the engine starts rendering the scene.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:295](../files/utils_api_engine_component.js.md#l295) |



##### method: `repeat(functionOrMethodName, [delay=0])`

Invokes the method on this component repeatedly, with a fixed time delay between each call.
The method will be invoked even if this component is disabled, but will not invoked if this component is
destroyed.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:360](../files/utils_api_engine_component.js.md#l360) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- functionOrMethodName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> | string  
- delay <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The number of seconds that the function call should wait before each call to the method. If omitted, it defaults to 0. The actual delay may be longer.

**Examples**
```var Comp = Fire.Class({
  // ...........

  start: function () {
      // Repeatedly to call a named or anonymous function with a delay between each calls
      this.repeat(function() {
          Fire.log("This message will show in every 2 seconds");
      }, 2);
  }
  
});


##### method: `start()`

Called before all scripts' update if the Component is enabled

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:271](../files/utils_api_engine_component.js.md#l271) |



##### method: `update()`

Update is called every frame, if the Component is enabled.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/component.js:252](../files/utils_api_engine_component.js.md#l252) |




