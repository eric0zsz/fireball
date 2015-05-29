
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `SpriteAnimationState` Class


Defined in: [utils/api/builtin/sprite-animation/sprite-animation-state.js:6](../files/utils/api/builtin/sprite-animation/sprite-animation-state.js.js)

Module: [Fire](../modules/Fire.md)




The sprite animation state.

### Index

##### Properties

  - [`clip`](#property-clip)
  - [`length`](#property-length)
  - [`name`](#property-name)
  - [`speed`](#property-speed)
  - [`stopAction`](#property-stopaction)
  - [`totalFrames`](#property-totalframes)
  - [`wrapMode`](#property-wrapmode)



##### Methods

  - [`SpriteAnimationState(animClip)` **constructor**](#method-spriteanimationstateanimclip)
  - [`getCurrentIndex()`](#method-getcurrentindex)
  - [`setDuration(duration)`](#method-setdurationduration)





### Details


#### Properties



##### property: `clip`

The referenced sprite animation clip

| meta | description |
|------|-------------|
| Type | <a href="../classes/SpriteAnimationClip.html" class="crosslink">SpriteAnimationClip</a> |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-state.js:25](../files/utils_api_builtin_sprite-animation_sprite-animation-state.js.md#l25) |




##### property: `length`

The length of the sprite animation in seconds with speed = 1.0f

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-state.js:57](../files/utils_api_builtin_sprite-animation_sprite-animation-state.js.md#l57) |




##### property: `name`

The name of the sprite animation state.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-state.js:19](../files/utils_api_builtin_sprite-animation_sprite-animation-state.js.md#l19) |




##### property: `speed`

The speed to play the sprite animation clip

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-state.js:43](../files/utils_api_builtin_sprite-animation_sprite-animation-state.js.md#l43) |




##### property: `stopAction`

The stop action

| meta | description |
|------|-------------|
| Type | <a href="../classes/SpriteAnimationClip.StopAction.html" class="crosslink">SpriteAnimationClip.StopAction</a> |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-state.js:37](../files/utils_api_builtin_sprite-animation_sprite-animation-state.js.md#l37) |




##### property: `totalFrames`

The total frame count of the sprite animation clip

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-state.js:51](../files/utils_api_builtin_sprite-animation_sprite-animation-state.js.md#l51) |




##### property: `wrapMode`

The wrap mode

| meta | description |
|------|-------------|
| Type | <a href="../classes/SpriteAnimationClip.WrapMode.html" class="crosslink">SpriteAnimationClip.WrapMode</a> |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-state.js:31](../files/utils_api_builtin_sprite-animation_sprite-animation-state.js.md#l31) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `SpriteAnimationState(animClip)`



| meta | description |
|------|-------------|
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-state.js:6](../files/utils_api_builtin_sprite-animation_sprite-animation-state.js.md#l6) |

###### Parameters
- animClip <a href="../classes/SpriteAnimationClip.html" class="crosslink">SpriteAnimationClip</a>  


##### method: `getCurrentIndex()`

The current frame info index.

| meta | description |
|------|-------------|
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-state.js:81](../files/utils_api_builtin_sprite-animation_sprite-animation-state.js.md#l81) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 



##### method: `setDuration(duration)`

Recompute a new speed to make the duration of this animation equals to specified value.

| meta | description |
|------|-------------|
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-state.js:72](../files/utils_api_builtin_sprite-animation_sprite-animation-state.js.md#l72) |

###### Parameters
- duration <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> The expected duration.



