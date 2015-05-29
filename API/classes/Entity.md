
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Entity` Class


Defined in: [utils/api/engine/entity.js:4](../files/utils/api/engine/entity.js.js)

Module: [Fire](../modules/Fire.md)




Class of all entities in scenes.

### Index

##### Properties

  - [`_children`](#property-_children)
  - [`_components`](#property-_components)
  - [`_defaultFlags`](#property-_defaultflags)
  - [`active`](#property-active)
  - [`activeInHierarchy`](#property-activeinhierarchy)
  - [`childCount`](#property-childcount)
  - [`dontDestroyOnLoad`](#property-dontdestroyonload)
  - [`parent`](#property-parent)
  - [`transform`](#property-transform)



##### Methods

  - [`Entity(name)` **constructor**](#method-entityname)
  - [`addComponent(typeOrName)`](#method-addcomponenttypeorname)
  - [`animate(keyFrames, timingInput)`](#method-animatekeyframes-timinginput)
  - [`find(path)`](#method-findpath)
  - [`find(path)`](#method-findpath)
  - [`getChild(index)`](#method-getchildindex)
  - [`getChildren()`](#method-getchildren)
  - [`getComponent(typeOrName)`](#method-getcomponenttypeorname)
  - [`getSibling(index)`](#method-getsiblingindex)
  - [`getSiblingIndex()`](#method-getsiblingindex)
  - [`hitTest(worldX, worldY)`](#method-hittestworldx-worldy)
  - [`isChildOf(parent)`](#method-ischildofparent)
  - [`setAsFirstSibling()`](#method-setasfirstsibling)
  - [`setAsLastSibling()`](#method-setaslastsibling)
  - [`setSiblingIndex(index)`](#method-setsiblingindexindex)





### Details


#### Properties



##### property: `_children`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Entity.html" class="crosslink">Entity[]</a> |
| Defined | [utils/api/engine/entity.js:224](../files/utils_api_engine_entity.js.md#l224) |
| Default    | [] |




##### property: `_components`



| meta | description |
|------|-------------|
| Type | <a href="../classes/Component.html" class="crosslink">Component[]</a> |
| Defined | [utils/api/engine/entity.js:233](../files/utils_api_engine_entity.js.md#l233) |
| Default    | [] |




##### property: `_defaultFlags`

The temp property that indicates the current creating entity should
binded with supplied object flags. This property only used in editor.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/entity.js:783](../files/utils_api_engine_entity.js.md#l783) |
| Default    | 0 |




##### property: `active`

The local active state of this Entity.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/entity.js:76](../files/utils_api_engine_entity.js.md#l76) |
| Default    | true |




##### property: `activeInHierarchy`

Indicates whether this entity is active in the scene.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/entity.js:99](../files/utils_api_engine_entity.js.md#l99) |




##### property: `childCount`

Get the amount of children

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/entity.js:187](../files/utils_api_engine_entity.js.md#l187) |




##### property: `dontDestroyOnLoad`

If true, the entity will not be destroyed automatically when loading a new scene.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/entity.js:199](../files/utils_api_engine_entity.js.md#l199) |
| Default    | false |




##### property: `parent`

The parent of the entity.
Changing the parent will keep the transform's local space position, rotation and scale the same but modify
the world space position, scale and rotation.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Entity.html" class="crosslink">Entity</a> |
| Defined | [utils/api/engine/entity.js:121](../files/utils_api_engine_entity.js.md#l121) |
| Default    | null |




##### property: `transform`

Returns the {% crosslink Fire.Transform Transform %} attached to the entity.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Transform.html" class="crosslink">Transform</a> |
| Defined | [utils/api/engine/entity.js:110](../files/utils_api_engine_entity.js.md#l110) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Entity(name)`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:4](../files/utils_api_engine_entity.js.md#l4) |

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the name of the entity


##### method: `addComponent(typeOrName)`

Adds a component class to the entity. You can also add component to entity by passing in the name of the script.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:325](../files/utils_api_engine_entity.js.md#l325) |
| Return 		 | <a href="../classes/Component.html" class="crosslink">Component</a> 

###### Parameters
- typeOrName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> | string the constructor or the class name of the component to add


##### method: `animate(keyFrames, timingInput)`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:660](../files/utils_api_engine_entity.js.md#l660) |
| Return 		 | <a href="../classes/AnimationNode.html" class="crosslink">AnimationNode</a> 

###### Parameters
- keyFrames <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object[]</a>  
- timingInput <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> This dictionary is used as a convenience
for specifying the timing properties of an Animation in bulk.
	- delay <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> delay in seconds before start the animation
	- repeatCount <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> how many times should the animation goes
	- speed <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> the play speed of animation
	- wrapMode Fire.WrapMode animation should play towards which Fire.WrapMode

**Examples**
```var startPos = Fire.v2(200,0);
var duration = 2; //animation duration in seconds
var animNode1 = this.entity.animate(
    // first parameter is an array of key frames
    [
        // Component name as first property
        {
            "Fire.Transform": {
                // property whose value to animate
                "position": startPos // set startPos as the first key frame property's value
            },
            // We also need to specify a normalized time mark for a key frame
            // with 'ratio' property with a value from 0 to 1.
            // 0 means at the very beginning of the animation process;
            // 1 means the key frame is at the very end.
            ratio: 0
        },
        {
            "Fire.Transform": {
                "position": Fire.Vec2.zero // set Vec2.zero as the last key frame property's value
            },
            ratio: 1
        }
    ],
    {
        // delay the animation for a bit
        delay: 0.5,
        // the total duration of the animation in seconds
        duration: duration
    }
).on('stop', function() { // callback when animation finished
  Fire.log("Animation finished playing!");
});


##### method: `find(path)`

Finds an entity by name in all children of this entity. This function will still returns the entity even if it
is inactive. It is recommended to not use this function every frame instead cache the result at startup.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:432](../files/utils_api_engine_entity.js.md#l432) |
| Return 		 | <a href="../classes/Entity.html" class="crosslink">Entity</a> 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `find(path)`

Finds an entity by hierarchy path, the path is case-sensitive, and must start with a '/' character.
It will traverse the hierarchy by splitting the path using '/' character.
It is recommended to not use this function every frame instead cache the result at startup.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:795](../files/utils_api_engine_entity.js.md#l795) |
| Return 		 | <a href="../classes/Entity.html" class="crosslink">Entity</a> 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `getChild(index)`

Returns an entity child by index.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:484](../files/utils_api_engine_entity.js.md#l484) |
| Return 		 | <a href="../classes/Entity.html" class="crosslink">Entity</a> 

###### Parameters
- index <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `getChildren()`

Returns a new arrays of all children.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:495](../files/utils_api_engine_entity.js.md#l495) |
| Return 		 | <a href="../classes/Entity.html" class="crosslink">Entity[]</a> 



##### method: `getComponent(typeOrName)`

Returns the component of supplied type if the entity has one attached, null if it doesn't. You can also get
component in the entity by passing in the name of the script.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:374](../files/utils_api_engine_entity.js.md#l374) |
| Return 		 | <a href="../classes/Component.html" class="crosslink">Component</a> 

###### Parameters
- typeOrName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> | string  


##### method: `getSibling(index)`

Get the indexed sibling.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:542](../files/utils_api_engine_entity.js.md#l542) |
| Return 		 | <a href="../classes/Entity.html" class="crosslink">Entity</a> 

###### Parameters
- index <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `getSiblingIndex()`

Get the sibling index.

NOTE: If this entity does not have parent and not belongs to the current scene,
      The return value will be -1

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:524](../files/utils_api_engine_entity.js.md#l524) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### method: `hitTest(worldX, worldY)`

Tests whether the entity intersects the specified point in world coordinates
This ignores the alpha of the renderer.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:608](../files/utils_api_engine_entity.js.md#l608) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- worldX <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The world X position to check.
- worldY <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The world Y position to check.


##### method: `isChildOf(parent)`

Is this entity a child of the parent?

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:505](../files/utils_api_engine_entity.js.md#l505) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- parent <a href="../classes/Entity.html" class="crosslink">Entity</a>  


##### method: `setAsFirstSibling()`

Move the entity to the top.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:586](../files/utils_api_engine_entity.js.md#l586) |



##### method: `setAsLastSibling()`

Move the entity to the bottom.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:595](../files/utils_api_engine_entity.js.md#l595) |



##### method: `setSiblingIndex(index)`

Set the sibling index of this entity.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/entity.js:558](../files/utils_api_engine_entity.js.md#l558) |

###### Parameters
- index <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  



