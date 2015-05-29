
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Animation` Class

Extends `Component`

Defined in: [utils/api/engine/animation.js:7](../files/utils/api/engine/animation.js.js)

Module: [Fire](../modules/Fire.md)




 

### Index

##### Properties

  - [`_clips`](#property-_clips)
  - [`defaultClip`](#property-defaultclip)
  - [`isPlaying`](#property-isplaying)
  - [`playAutomatically`](#property-playautomatically)



##### Methods

  - [`Animation()` **constructor**](#method-animation)
  - [`addClip(clip, [newName])`](#method-addclipclip-newname)
  - [`getAnimationState(name)`](#method-getanimationstatename)
  - [`play([name])`](#method-playname)
  - [`removeClip(clip)`](#method-removeclipclip)
  - [`sample()`](#method-sample)
  - [`stop([name])`](#method-stopname)




### Inherited members

##### Properties

- [`entity`](#property-entity)
- [`_enabled`](#property-_enabled)
- [`enabled`](#property-enabled)
- [`enabledInHierarchy`](#property-enabledinhierarchy)
- [`transform`](#property-transform)
- [`isOnLoadCalled`](#property-isonloadcalled)
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

- [``](#method-update)
- [``](#method-lateupdate)
- [``](#method-onload)
- [``](#method-start)
- [``](#method-onenable)
- [``](#method-ondisable)
- [``](#method-ondestroy)
- [``](#method-onprerender)
- [``](#method-onfocusineditmode)
- [``](#method-onlostfocusineditmode)
- [``](#method-addcomponent)
- [``](#method-getcomponent)
- [``](#method-invoke)
- [``](#method-repeat)
- [``](#method-cancelinvoke)
- [``](#method-cancelrepeat)
- [``](#method-addcomponentmenu)
- [``](#method-executeineditmode)
- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Details


#### Properties



##### property: `_clips`

The array of animations which available in play() method.

| meta | description |
|------|-------------|
| Type | AnimationClip |
| Defined | [utils/api/engine/animation.js:42](../files/utils_api_engine_animation.js.md#l42) |
| Default    | [] |




##### property: `defaultClip`

The default animation.

| meta | description |
|------|-------------|
| Type | AnimationClip |
| Defined | [utils/api/engine/animation.js:30](../files/utils_api_engine_animation.js.md#l30) |
| Default    | null |




##### property: `isPlaying`

is playing any animations?

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/animation.js:74](../files/utils_api_engine_animation.js.md#l74) |




##### property: `playAutomatically`

Should the default animation clip (Animation.defaultClip) automatically play on start.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/animation.js:66](../files/utils_api_engine_animation.js.md#l66) |
| Default    | true |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Animation()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/animation.js:7](../files/utils_api_engine_animation.js.md#l7) |



##### method: `addClip(clip, [newName])`

Adds a clip to the animation with name newName. If a clip with that name already exists it will be replaced with the new clip.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/animation.js:163](../files/utils_api_engine_animation.js.md#l163) |
| Return 		 | <a href="../classes/AnimationState.html" class="crosslink">AnimationState</a> 

###### Parameters
- clip AnimationClip the clip to add
- newName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `getAnimationState(name)`

Returns the animation state named name. If no animation with the specified name, the function will return null.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/animation.js:153](../files/utils_api_engine_animation.js.md#l153) |
| Return 		 | <a href="../classes/AnimationState.html" class="crosslink">AnimationState</a> 

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `play([name])`

Plays an animation.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/animation.js:111](../files/utils_api_engine_animation.js.md#l111) |
| Return 		 | <a href="../classes/AnimationState.html" class="crosslink">AnimationState</a> 

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of animation to play. If no name is supplied then the default animation will be played.


##### method: `removeClip(clip)`

Remove clip from the animation list. This will remove the clip and any animation states based on it.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/animation.js:206](../files/utils_api_engine_animation.js.md#l206) |

###### Parameters
- clip AnimationClip  


##### method: `sample()`

Samples animations at the current state.
This is useful when you explicitly want to set up some animation state, and sample it once.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/animation.js:246](../files/utils_api_engine_animation.js.md#l246) |



##### method: `stop([name])`

Stops an animation named name. If no name is supplied then stops all playing animations that were started with this Animation.
Stopping an animation also Rewinds it to the Start.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/animation.js:132](../files/utils_api_engine_animation.js.md#l132) |

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The animation to stop, if not supplied then stops all playing animations.



