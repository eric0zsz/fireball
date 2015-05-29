
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `SpriteAnimation` Class

Extends `Component`

Defined in: [utils/api/builtin/sprite-animation/sprite-animation.js:7](../files/utils/api/builtin/sprite-animation/sprite-animation.js.js)

Module: [Fire](../modules/Fire.md)




The sprite animation Component.

### Index

##### Properties

  - [`animations`](#property-animations)
  - [`defaultAnimation`](#property-defaultanimation)
  - [`playAutomatically`](#property-playautomatically)



##### Methods

  - [`SpriteAnimation()` **constructor**](#method-spriteanimation)
  - [`getAnimState(animName)`](#method-getanimstateanimname)
  - [`isPlaying([name])`](#method-isplayingname)
  - [`play([animState], [time])`](#method-playanimstate-time)
  - [`stop([animState])`](#method-stopanimstate)




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
- [``](#method-destroy)
- [``](#method-_destruct)
- [``](#method-_onpredestroy)
- [``](#method-_serialize)
- [``](#method-_deserialize)
- [``](#method-isvalid)

##### Events




### Details


#### Properties



##### property: `animations`

The Animated clip list.

| meta | description |
|------|-------------|
| Type | <a href="../classes/SpriteAnimationClip.html" class="crosslink">SpriteAnimationClip[]</a> |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation.js:40](../files/utils_api_builtin_sprite-animation_sprite-animation.js.md#l40) |
| Default    | [] |




##### property: `defaultAnimation`

The default animation.

| meta | description |
|------|-------------|
| Type | <a href="../classes/SpriteAnimationClip.html" class="crosslink">SpriteAnimationClip</a> |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation.js:30](../files/utils_api_builtin_sprite-animation_sprite-animation.js.md#l30) |
| Default    | null |




##### property: `playAutomatically`

Should the default animation clip (Animation.clip) automatically start playing on startup.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation.js:52](../files/utils_api_builtin_sprite-animation_sprite-animation.js.md#l52) |
| Default    | true |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `SpriteAnimation()`



| meta | description |
|------|-------------|
| Defined | [utils/api/builtin/sprite-animation/sprite-animation.js:7](../files/utils_api_builtin_sprite-animation_sprite-animation.js.md#l7) |



##### method: `getAnimState(animName)`

Get Animation State.

| meta | description |
|------|-------------|
| Defined | [utils/api/builtin/sprite-animation/sprite-animation.js:96](../files/utils_api_builtin_sprite-animation_sprite-animation.js.md#l96) |
| Return 		 | <a href="../classes/SpriteAnimationState.html" class="crosslink">SpriteAnimationState</a> 

###### Parameters
- animName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the animation


##### method: `isPlaying([name])`

Indicates whether the animation is playing

| meta | description |
|------|-------------|
| Defined | [utils/api/builtin/sprite-animation/sprite-animation.js:105](../files/utils_api_builtin_sprite-animation_sprite-animation.js.md#l105) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the animation


##### method: `play([animState], [time])`

Play Animation

| meta | description |
|------|-------------|
| Defined | [utils/api/builtin/sprite-animation/sprite-animation.js:115](../files/utils_api_builtin_sprite-animation_sprite-animation.js.md#l115) |

###### Parameters
- animState <a href="../classes/SpriteAnimationState.html" class="crosslink">SpriteAnimationState</a> The animState of the sprite Animation state or animation name
- time <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The time of the animation time


##### method: `stop([animState])`

Stop Animation

| meta | description |
|------|-------------|
| Defined | [utils/api/builtin/sprite-animation/sprite-animation.js:136](../files/utils_api_builtin_sprite-animation_sprite-animation.js.md#l136) |

###### Parameters
- animState <a href="../classes/SpriteAnimationState.html" class="crosslink">SpriteAnimationState</a> The animState of the sprite animation state or animation name



