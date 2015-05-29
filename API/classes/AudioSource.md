
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `AudioSource` Class

Extends `Component`

Defined in: [utils/api/engine/audio-source.js:7](../files/utils/api/engine/audio-source.js.js)

Module: [Fire](../modules/Fire.md)




The audio source component.

### Index

##### Properties

  - [`clip`](#property-clip)
  - [`isPaused`](#property-ispaused)
  - [`isPlaying`](#property-isplaying)
  - [`loop`](#property-loop)
  - [`mute`](#property-mute)
  - [`onEnd`](#property-onend)
  - [`playbackRate`](#property-playbackrate)
  - [`playOnLoad`](#property-playonload)
  - [`time`](#property-time)
  - [`volume`](#property-volume)



##### Methods

  - [`AudioSource()` **constructor**](#method-audiosource)
  - [`pause()`](#method-pause)
  - [`play()`](#method-play)
  - [`stop()`](#method-stop)




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



##### property: `clip`

The audio clip to play.

| meta | description |
|------|-------------|
| Type | <a href="../classes/AudioClip.html" class="crosslink">AudioClip</a> |
| Defined | [utils/api/engine/audio-source.js:85](../files/utils_api_engine_audio-source.js.md#l85) |
| Default    | null |




##### property: `isPaused`

Is the audio source paused (Read Only)?

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/audio-source.js:53](../files/utils_api_engine_audio-source.js.md#l53) |
| Default    | false |




##### property: `isPlaying`

Is the audio source playing (Read Only)？

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/audio-source.js:40](../files/utils_api_engine_audio-source.js.md#l40) |
| Default    | false |




##### property: `loop`

Is the audio source looping?

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/audio-source.js:104](../files/utils_api_engine_audio-source.js.md#l104) |
| Default    | false |




##### property: `mute`

Is the audio source mute?

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/audio-source.js:123](../files/utils_api_engine_audio-source.js.md#l123) |
| Default    | false |




##### property: `onEnd`

The callback function which will be invoked when the audio stops

| meta | description |
|------|-------------|
| Type | function |
| Defined | [utils/api/engine/audio-source.js:31](../files/utils_api_engine_audio-source.js.md#l31) |
| Default    | null |




##### property: `playbackRate`

The playback rate of the audio source.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/audio-source.js:162](../files/utils_api_engine_audio-source.js.md#l162) |
| Default    | 1 |




##### property: `playOnLoad`

If set to true, the audio source will automatically start playing on onLoad.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/audio-source.js:181](../files/utils_api_engine_audio-source.js.md#l181) |
| Default    | true |




##### property: `time`

Playback position in seconds.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/audio-source.js:66](../files/utils_api_engine_audio-source.js.md#l66) |
| Default    | 0 |




##### property: `volume`

The volume of the audio source.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/audio-source.js:142](../files/utils_api_engine_audio-source.js.md#l142) |
| Default    | 1 |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `AudioSource()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/audio-source.js:7](../files/utils_api_engine_audio-source.js.md#l7) |



##### method: `pause()`

Pauses the clip.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/audio-source.js:197](../files/utils_api_engine_audio-source.js.md#l197) |



##### method: `play()`

Plays the clip.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/audio-source.js:208](../files/utils_api_engine_audio-source.js.md#l208) |



##### method: `stop()`

Stops the clip

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/audio-source.js:224](../files/utils_api_engine_audio-source.js.md#l224) |




