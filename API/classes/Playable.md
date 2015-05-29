
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Playable` Class


Defined in: [utils/api/engine/playable.js:5](../files/utils/api/engine/playable.js.js)

Module: [Fire](../modules/Fire.md)




 

### Index

##### Properties

  - [`isPaused`](#property-ispaused)
  - [`isPlaying`](#property-isplaying)
  - [`isUpdating`](#property-isupdating)



##### Methods

  - [`Playable()` **constructor**](#method-playable)
  - [`onError(errorCode)`](#method-onerrorerrorcode)
  - [`onPause()`](#method-onpause)
  - [`onPlay()`](#method-onplay)
  - [`onResume()`](#method-onresume)
  - [`onStop()`](#method-onstop)
  - [`pause()`](#method-pause)
  - [`play()`](#method-play)
  - [`step()`](#method-step)
  - [`stop()`](#method-stop)





### Details


#### Properties



##### property: `isPaused`

Is currently paused? This can be true even if in edit mode(isPlaying == false).

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/playable.js:46](../files/utils_api_engine_playable.js.md#l46) |
| Default    | false |




##### property: `isPlaying`

Is playing?
This property ignores the paused state, so even it is currently paused, this property still true.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/playable.js:20](../files/utils_api_engine_playable.js.md#l20) |
| Default    | false |




##### property: `isUpdating`

Is currently updating?
This property is just the result of (this.isPlaying == true && this.isPaused == false)

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/playable.js:33](../files/utils_api_engine_playable.js.md#l33) |
| Default    | false |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Playable()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/playable.js:5](../files/utils_api_engine_playable.js.md#l5) |



##### method: `onError(errorCode)`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/playable.js:80](../files/utils_api_engine_playable.js.md#l80) |

###### Parameters
- errorCode <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `onPause()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/playable.js:65](../files/utils_api_engine_playable.js.md#l65) |



##### method: `onPlay()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/playable.js:60](../files/utils_api_engine_playable.js.md#l60) |



##### method: `onResume()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/playable.js:70](../files/utils_api_engine_playable.js.md#l70) |



##### method: `onStop()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/playable.js:75](../files/utils_api_engine_playable.js.md#l75) |



##### method: `pause()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/playable.js:126](../files/utils_api_engine_playable.js.md#l126) |



##### method: `play()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/playable.js:89](../files/utils_api_engine_playable.js.md#l89) |



##### method: `step()`

Perform a single frame step.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/playable.js:136](../files/utils_api_engine_playable.js.md#l136) |



##### method: `stop()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/playable.js:113](../files/utils_api_engine_playable.js.md#l113) |




