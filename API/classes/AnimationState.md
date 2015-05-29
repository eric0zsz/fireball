
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `AnimationState` Class

Extends `AnimationNode`

Defined in: [utils/api/engine/animation-state.js:8](../files/utils/api/engine/animation-state.js.js)

Module: [Fire](../modules/Fire.md)




The AnimationState gives full control over animation playback process.
In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.

### Index

##### Properties

  - [`clip`](#property-clip)
  - [`name`](#property-name)






### Inherited members

##### Properties

- [`curves`](#property-curves)
- [`delay`](#property-delay)
- [`repeatCount`](#property-repeatcount)
- [`duration`](#property-duration)
- [`speed`](#property-speed)
- [`wrapMode`](#property-wrapmode)
- [`time`](#property-time)
- [`isPlaying`](#property-isplaying)
- [`isUpdating`](#property-isupdating)
- [`isPaused`](#property-ispaused)

##### Attributes


##### Methods

- [``](#method-update)
- [``](#method-onplay)
- [``](#method-onpause)
- [``](#method-onresume)
- [``](#method-onstop)
- [``](#method-onerror)
- [``](#method-play)
- [``](#method-stop)
- [``](#method-pause)
- [``](#method-step)

##### Events




### Details


#### Properties



##### property: `clip`

The clip that is being played by this animation state.

| meta | description |
|------|-------------|
| Type | AnimationClip |
| Defined | [utils/api/engine/animation-state.js:30](../files/utils_api_engine_animation-state.js.md#l30) |




##### property: `name`

The name of the playing animation.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/engine/animation-state.js:40](../files/utils_api_engine_animation-state.js.md#l40) |






