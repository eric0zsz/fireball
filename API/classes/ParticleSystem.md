
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `ParticleSystem` Class

Extends `Renderer`

Defined in: [utils/api/engine/particle-system.js:48](../files/utils/api/engine/particle-system.js.js)

Module: [Fire](../modules/Fire.md)




The Particle System component.

### Index

##### Properties

  - [`angle`](#property-angle)
  - [`angleVar`](#property-anglevar)
  - [`baseSprite`](#property-basesprite)
  - [`duration`](#property-duration)
  - [`emissionRate`](#property-emissionrate)
  - [`emitterMode`](#property-emittermode)
  - [`endColor`](#property-endcolor)
  - [`endColorVar`](#property-endcolorvar)
  - [`endRadius`](#property-endradius)
  - [`endRadiusVar`](#property-endradiusvar)
  - [`endSize`](#property-endsize)
  - [`endSizeVar`](#property-endsizevar)
  - [`endSpin`](#property-endspin)
  - [`endSpinVar`](#property-endspinvar)
  - [`gravity`](#property-gravity)
  - [`isAutoRemoveOnFinish`](#property-isautoremoveonfinish)
  - [`life`](#property-life)
  - [`lifeVar`](#property-lifevar)
  - [`loop`](#property-loop)
  - [`maxParticles`](#property-maxparticles)
  - [`playOnLoad`](#property-playonload)
  - [`positionType`](#property-positiontype)
  - [`positionVar`](#property-positionvar)
  - [`radialAccel`](#property-radialaccel)
  - [`radialAccelVar`](#property-radialaccelvar)
  - [`rotatePerSecond`](#property-rotatepersecond)
  - [`rotatePerSecondVar`](#property-rotatepersecondvar)
  - [`speed`](#property-speed)
  - [`speedVar`](#property-speedvar)
  - [`startColor`](#property-startcolor)
  - [`startColorVar`](#property-startcolorvar)
  - [`startRadius`](#property-startradius)
  - [`startRadiusVar`](#property-startradiusvar)
  - [`startSize`](#property-startsize)
  - [`startSizeVar`](#property-startsizevar)
  - [`startSpin`](#property-startspin)
  - [`startSpinVar`](#property-startspinvar)
  - [`tangentialAccel`](#property-tangentialaccel)
  - [`tangentialAccelVar`](#property-tangentialaccelvar)



##### Methods

  - [`ParticleSystem()` **constructor**](#method-particlesystem)
  - [`calculateEmissionRate()`](#method-calculateemissionrate)
  - [`play()`](#method-play)
  - [`stop()`](#method-stop)




### Inherited members

##### Properties

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

- [``](#method-getworldbounds)
- [``](#method-getworldorientedbounds)
- [``](#method-getselfmatrix)
- [``](#method-getworldsize)
- [``](#method-onprerender)
- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Details


#### Properties



##### property: `angle`

Angle of each particle setter.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:269](../files/utils_api_engine_particle-system.js.md#l269) |
| Default    | 90 |




##### property: `angleVar`

Variation of angle of each particle setter.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:286](../files/utils_api_engine_particle-system.js.md#l286) |
| Default    | 20 |




##### property: `baseSprite`

The baseSprite of Particle System.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Sprite.html" class="crosslink">Sprite</a> |
| Defined | [utils/api/engine/particle-system.js:64](../files/utils_api_engine_particle-system.js.md#l64) |
| Default    | null |




##### property: `duration`

How many seconds the emitter wil run. -1 means 'forever'.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:117](../files/utils_api_engine_particle-system.js.md#l117) |
| Default    | -1 |




##### property: `emissionRate`

Emission rate of the particles.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:143](../files/utils_api_engine_particle-system.js.md#l143) |
| Default    | 10 |




##### property: `emitterMode`

Emitter modes:
Gravity: uses gravity, speed, radial and tangential acceleration;
Radius: uses radius movement + rotation.

| meta | description |
|------|-------------|
| Type | Fire.ParticleSystem.EmitterMode |
| Defined | [utils/api/engine/particle-system.js:484](../files/utils_api_engine_particle-system.js.md#l484) |
| Default    | EmitterMode.Gravity |




##### property: `endColor`

Ending color of each particle.

| meta | description |
|------|-------------|
| Type | color |
| Defined | [utils/api/engine/particle-system.js:340](../files/utils_api_engine_particle-system.js.md#l340) |




##### property: `endColorVar`

Variation of the end color.

| meta | description |
|------|-------------|
| Type | color |
| Defined | [utils/api/engine/particle-system.js:357](../files/utils_api_engine_particle-system.js.md#l357) |
| Default    | new Fire.Color(0, 0, 0, 0) |




##### property: `endRadius`

Ending radius of the particles. Only available in 'Radius' mode.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:751](../files/utils_api_engine_particle-system.js.md#l751) |
| Default    | 0 |




##### property: `endRadiusVar`

Variation of the ending radius.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:773](../files/utils_api_engine_particle-system.js.md#l773) |
| Default    | 0 |




##### property: `endSize`

End size in pixels of each particle.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:233](../files/utils_api_engine_particle-system.js.md#l233) |
| Default    | -1 |




##### property: `endSizeVar`

Variation of end size in pixels.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:250](../files/utils_api_engine_particle-system.js.md#l250) |
| Default    | 0 |




##### property: `endSpin`

End angle of each particle.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:449](../files/utils_api_engine_particle-system.js.md#l449) |
| Default    | 0 |




##### property: `endSpinVar`

Variation of end angle.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:466](../files/utils_api_engine_particle-system.js.md#l466) |
| Default    | 0 |




##### property: `gravity`

Gravity of the emitter.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/engine/particle-system.js:505](../files/utils_api_engine_particle-system.js.md#l505) |
| Default    | Fire.Vec2(0, 0) |




##### property: `isAutoRemoveOnFinish`

Indicate whether the node will be auto-removed when it has no particles left.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/particle-system.js:797](../files/utils_api_engine_particle-system.js.md#l797) |
| Default    | false |




##### property: `life`

Life of each particle setter.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:163](../files/utils_api_engine_particle-system.js.md#l163) |
| Default    | 1 |




##### property: `lifeVar`

Variation of life.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:180](../files/utils_api_engine_particle-system.js.md#l180) |
| Default    | 0 |




##### property: `loop`

If set to true, the particle system will loop play.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/particle-system.js:100](../files/utils_api_engine_particle-system.js.md#l100) |
| Default    | true |




##### property: `maxParticles`

Maximum particles of the system.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:82](../files/utils_api_engine_particle-system.js.md#l82) |
| Default    | 100 |




##### property: `playOnLoad`

If set to true, the particle system will automatically start playing on onLoad.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/particle-system.js:813](../files/utils_api_engine_particle-system.js.md#l813) |
| Default    | true |




##### property: `positionType`

Particles movement type: Free | Grouped.

| meta | description |
|------|-------------|
| Type | Fire.ParticleSystem.PositionType |
| Defined | [utils/api/engine/particle-system.js:377](../files/utils_api_engine_particle-system.js.md#l377) |
| Default    | Free |




##### property: `positionVar`

Variation of source position.

| meta | description |
|------|-------------|
| Type | <a href="../classes/Vec2.html" class="crosslink">Vec2</a> |
| Defined | [utils/api/engine/particle-system.js:395](../files/utils_api_engine_particle-system.js.md#l395) |
| Default    | Fire.Vec2(0, 0) |




##### property: `radialAccel`

Radial acceleration of each particle. Only available in 'Gravity' mode.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:572](../files/utils_api_engine_particle-system.js.md#l572) |
| Default    | 0 |




##### property: `radialAccelVar`

Variation of the radial acceleration.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:594](../files/utils_api_engine_particle-system.js.md#l594) |
| Default    | 0 |




##### property: `rotatePerSecond`

Number of degress to rotate a particle around the source pos per second.
Only available in 'Radius' mode.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:706](../files/utils_api_engine_particle-system.js.md#l706) |
| Default    | 0 |




##### property: `rotatePerSecondVar`

Variation of the degress to rotate a particle around the source pos per second.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:729](../files/utils_api_engine_particle-system.js.md#l729) |
| Default    | 0 |




##### property: `speed`

Speed of the emitter.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:528](../files/utils_api_engine_particle-system.js.md#l528) |
| Default    | 180 |




##### property: `speedVar`

Variation of the speed.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:550](../files/utils_api_engine_particle-system.js.md#l550) |
| Default    | 50 |




##### property: `startColor`

Start color of each particle.

| meta | description |
|------|-------------|
| Type | color |
| Defined | [utils/api/engine/particle-system.js:305](../files/utils_api_engine_particle-system.js.md#l305) |




##### property: `startColorVar`

Variation of the start color.

| meta | description |
|------|-------------|
| Type | color |
| Defined | [utils/api/engine/particle-system.js:322](../files/utils_api_engine_particle-system.js.md#l322) |
| Default    | new Fire.Color(0, 0, 0, 0) |




##### property: `startRadius`

Starting radius of the particles. Only available in 'Radius' mode.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:662](../files/utils_api_engine_particle-system.js.md#l662) |
| Default    | 0 |




##### property: `startRadiusVar`

Variation of the starting radius.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:684](../files/utils_api_engine_particle-system.js.md#l684) |
| Default    | 0 |




##### property: `startSize`

Start size in pixels of each particle.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:199](../files/utils_api_engine_particle-system.js.md#l199) |
| Default    | 50 |




##### property: `startSizeVar`

Variation of start size in pixels.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:216](../files/utils_api_engine_particle-system.js.md#l216) |
| Default    | 0 |




##### property: `startSpin`

Start angle of each particle.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:415](../files/utils_api_engine_particle-system.js.md#l415) |
| Default    | 0 |




##### property: `startSpinVar`

Variation of start angle.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:432](../files/utils_api_engine_particle-system.js.md#l432) |
| Default    | 0 |




##### property: `tangentialAccel`

Tangential acceleration of each particle. Only available in 'Gravity' mode.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:616](../files/utils_api_engine_particle-system.js.md#l616) |
| Default    | 80 |




##### property: `tangentialAccelVar`

Variation of the tangential acceleration.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/particle-system.js:638](../files/utils_api_engine_particle-system.js.md#l638) |
| Default    | 0 |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `ParticleSystem()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/particle-system.js:48](../files/utils_api_engine_particle-system.js.md#l48) |



##### method: `calculateEmissionRate()`

calculate emission rate

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/particle-system.js:823](../files/utils_api_engine_particle-system.js.md#l823) |



##### method: `play()`

play the particle system

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/particle-system.js:832](../files/utils_api_engine_particle-system.js.md#l832) |



##### method: `stop()`

stop the particle system

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/particle-system.js:841](../files/utils_api_engine_particle-system.js.md#l841) |




