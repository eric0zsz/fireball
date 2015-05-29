
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `SpriteAnimationClip` Class

Extends `CustomAsset`

Defined in: [utils/api/builtin/sprite-animation/sprite-animation-clip.js:77](../files/utils/api/builtin/sprite-animation/sprite-animation-clip.js.js)

Module: [Fire](../modules/Fire.md)




The sprite animation clip.

### Index

##### Properties

  - [`frameInfos`](#property-frameinfos)
  - [`frameRate`](#property-framerate)
  - [`speed`](#property-speed)
  - [`stopAction`](#property-stopaction)
  - [`wrapMode`](#property-wrapmode)






### Inherited members

##### Properties


##### Attributes


##### Methods


##### Events




### Details


#### Properties



##### property: `frameInfos`

The frame infos in the sprite animation clips.
are array of {sprite: Sprite, frames: Sustained_how_many_frames}

| meta | description |
|------|-------------|
| Type | object |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-clip.js:139](../files/utils_api_builtin_sprite-animation_sprite-animation-clip.js.md#l139) |
| Default    | [] |




##### property: `frameRate`

The sample rate used in this animation clip.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-clip.js:123](../files/utils_api_builtin_sprite-animation_sprite-animation-clip.js.md#l123) |
| Default    | 60 |




##### property: `speed`

The default speed of the animation clip.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-clip.js:114](../files/utils_api_builtin_sprite-animation_sprite-animation-clip.js.md#l114) |
| Default    | 1 |




##### property: `stopAction`

The default type of action used when the animation stopped.

| meta | description |
|------|-------------|
| Type | <a href="../classes/SpriteAnimationClip.StopAction.html" class="crosslink">SpriteAnimationClip.StopAction</a> |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-clip.js:104](../files/utils_api_builtin_sprite-animation_sprite-animation-clip.js.md#l104) |
| Default    | SpriteAnimationClip.StopAction.DoNothing |




##### property: `wrapMode`

Default wrap mode.

| meta | description |
|------|-------------|
| Type | <a href="../classes/SpriteAnimationClip.WrapMode.html" class="crosslink">SpriteAnimationClip.WrapMode</a> |
| Defined | [utils/api/builtin/sprite-animation/sprite-animation-clip.js:94](../files/utils_api_builtin_sprite-animation_sprite-animation-clip.js.md#l94) |
| Default    | SpriteAnimationClip.WrapMode.Default |






