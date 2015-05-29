
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `WrapMode` Enum


Defined in: [utils/api/engine/types.js:14](../files/utils/api/engine/types.js.js)

Module: [Fire](../modules/Fire.md)




Specifies how time is treated when it is outside of the keyframe range of an Animation.

### Index

##### Properties
  - `Default`
  - `Loop`
  - `LoopReverse`
  - `Normal`
  - `PingPong`
  - `PingPongReverse`
  - `Reverse`


### Details

#### Properties


##### property: `Default`

Reads the default wrap mode set higher up.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:20](../files/utils_api_engine_types.js.md#l20) |




##### property: `Loop`

When time reaches the end of the animation, time will continue at the beginning.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:47](../files/utils_api_engine_types.js.md#l47) |




##### property: `LoopReverse`

All iterations are played in the reverse direction from the way they are specified.
And when time reaches the start of the animation, time will continue at the ending.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:56](../files/utils_api_engine_types.js.md#l56) |




##### property: `Normal`

All iterations are played as specified.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:29](../files/utils_api_engine_types.js.md#l29) |




##### property: `PingPong`

Even iterations are played as specified, odd iterations are played in the reverse direction from the way they
are specified.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:66](../files/utils_api_engine_types.js.md#l66) |




##### property: `PingPongReverse`

Even iterations are played in the reverse direction from the way they are specified, odd iterations are played
as specified.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:76](../files/utils_api_engine_types.js.md#l76) |




##### property: `Reverse`

All iterations are played in the reverse direction from the way they are specified.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/types.js:38](../files/utils_api_engine_types.js.md#l38) |



