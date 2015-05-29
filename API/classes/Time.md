
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Time` Class


Defined in: [utils/api/engine/time.js:4](../files/utils/api/engine/time.js.js)

Module: [Fire](../modules/Fire.md)




The interface to get time information from Fireball.

See [Time](/en/scripting/time/)

### Index

##### Properties

  - [`deltaTime`](#property-deltatime)
  - [`frameCount`](#property-framecount)
  - [`maxDeltaTime`](#property-maxdeltatime)
  - [`realTime`](#property-realtime)
  - [`time`](#property-time)



##### Methods

  - [`Fire.Time._update(timestamp, [paused=false], [maxDeltaTime=Time.maxDeltaTime])`](#method-fire.time._updatetimestamp-pausedfalse-maxdeltatimetime.maxdeltatime)





### Details


#### Properties



##### property: `deltaTime`

The time in seconds it took to complete the last frame. Use this property to make your game frame rate independent.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/time.js:36](../files/utils_api_engine_time.js.md#l36) |




##### property: `frameCount`

The total number of frames that have passed.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/time.js:44](../files/utils_api_engine_time.js.md#l44) |




##### property: `maxDeltaTime`

The maximum time a frame can take.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/time.js:52](../files/utils_api_engine_time.js.md#l52) |




##### property: `realTime`

The time at the beginning of this frame. This is the real time in seconds since the start of the game.

`Time.realTime` not affected by time scale, and also keeps increasing while the player is paused in editor or in the background.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/time.js:26](../files/utils_api_engine_time.js.md#l26) |




##### property: `time`

The time at the beginning of this frame. This is the time in seconds since the start of the game.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/time.js:18](../files/utils_api_engine_time.js.md#l18) |






<!-- Method Block -->
#### Methods


##### method: `Fire.Time._update(timestamp, [paused=false], [maxDeltaTime=Time.maxDeltaTime])`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/time.js:63](../files/utils_api_engine_time.js.md#l63) |

###### Parameters
- timestamp <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- paused <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> if true, only realTime will be updated
- maxDeltaTime <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  



