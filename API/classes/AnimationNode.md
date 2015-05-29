
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `AnimationNode` Class

Extends `AnimationNodeBase`

Defined in: [utils/api/engine/types.js:117](../files/utils/api/engine/types.js.js)

Module: [Fire](../modules/Fire.md)




The collection and instance of playing animations created by entity.animate.

### Index

##### Properties

  - [`curves`](#property-curves)
  - [`delay`](#property-delay)
  - [`duration`](#property-duration)
  - [`repeatCount`](#property-repeatcount)
  - [`speed`](#property-speed)
  - [`time`](#property-time)
  - [`wrapMode`](#property-wrapmode)






### Inherited members

##### Properties

- [`isPlaying`](#property-isplaying)
- [`isUpdating`](#property-isupdating)
- [`isPaused`](#property-ispaused)

##### Attributes


##### Methods

- [`update(deltaTime)`](#method-update)
- [`onPlay()`](#method-onplay)
- [`onPause()`](#method-onpause)
- [`onResume()`](#method-onresume)
- [`onStop()`](#method-onstop)
- [`onError(errorCode)`](#method-onerror)
- [`play()`](#method-play)
- [`stop()`](#method-stop)
- [`pause()`](#method-pause)
- [`step()`](#method-step)

##### Events




### Details


#### Properties



##### property: `curves`



| meta | description |
|------|-------------|
| Type | AnimCurve |
| Defined | [utils/api/engine/types.js:131](../files/utils_api_engine_types.js.md#l131) |




##### property: `delay`

The start delay which represents the number of seconds from an animation's start time to the start of
the active interval.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:139](../files/utils_api_engine_types.js.md#l139) |
| Default    | 0 |




##### property: `duration`

The iteration duration of this animation in seconds. (length)

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:167](../files/utils_api_engine_types.js.md#l167) |




##### property: `repeatCount`

The animation's iteration count property.

A real number greater than or equal to zero (including positive infinity) representing the number of times
to repeat the animation node.

Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
calculations.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:150](../files/utils_api_engine_types.js.md#l150) |
| Default    | 1 |




##### property: `speed`

The animation's playback speed. 1 is normal playback speed.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:177](../files/utils_api_engine_types.js.md#l177) |
| Default    | : 1.0 |




##### property: `time`

The current time of this animation in seconds.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:235](../files/utils_api_engine_types.js.md#l235) |
| Default    | 0 |




##### property: `wrapMode`

Wrapping mode of the playing animation.

| meta | description |
|------|-------------|
| Type | <a href="../classes/WrapMode.html" class="crosslink">WrapMode</a> |
| Defined | [utils/api/engine/types.js:186](../files/utils_api_engine_types.js.md#l186) |
| Default    | : Fire.WrapMode.Normal |






