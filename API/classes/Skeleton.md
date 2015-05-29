
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Skeleton` Class

Extends `SkeletonRenderer`

Defined in: [utils/api/engine/spine-runtime.js:9](../files/utils/api/engine/spine-runtime.js.js)

Module: [Fire.Spine](../modules/Fire.Spine.md)




The skeleton animation of spine.

### Index

##### Properties

  - [`animationName`](#property-animationname)
  - [`defaultAnimation`](#property-defaultanimation)
  - [`loop`](#property-loop)
  - [`timeScale`](#property-timescale)



##### Methods

  - [`Skeleton()` **constructor**](#method-skeleton)
  - [`addAnimation(trackIndex, name, loop, delay)`](#method-addanimationtrackindex-name-loop-delay)
  - [`clearTrack(trackIndex)`](#method-cleartracktrackindex)
  - [`clearTracks()`](#method-cleartracks)
  - [`getCurrent(trackIndex)`](#method-getcurrenttrackindex)
  - [`setAnimation(trackIndex, name, loop)`](#method-setanimationtrackindex-name-loop)
  - [`setMix(fromAnimation, toAnimation, duration)`](#method-setmixfromanimation-toanimation-duration)




### Inherited members

##### Properties

- [`skeletonData`](#property-skeletondata)
- [`initialSkinName`](#property-initialskinname)
- [`initialSkinIndex`](#property-initialskinindex)
- [`debugSlots`](#property-debugslots)
- [`debugBones`](#property-debugbones)
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

- [`setToSetupPose()`](#method-settosetuppose)
- [`setBonesToSetupPose()`](#method-setbonestosetuppose)
- [`setSlotsToSetupPose()`](#method-setslotstosetuppose)
- [`findBone(boneName)`](#method-findbone)
- [`findSlot(slotName)`](#method-findslot)
- [`setSkin(skinName)`](#method-setskin)
- [`getAttachment(slotName, attachmentName)`](#method-getattachment)
- [`setAttachment(slotName, attachmentName)`](#method-setattachment)
- [`getWorldBounds([out])`](#method-getworldbounds)
- [`getWorldOrientedBounds([out_bl], [out_tl], [out_tr], [out_br])`](#method-getworldorientedbounds)
- [`getSelfMatrix(out)`](#method-getselfmatrix)
- [`getWorldSize()`](#method-getworldsize)
- [`onPreRender()`](#method-onprerender)
- [`destroy()`](#method-destroy)
- [`_destruct()`](#method-_destruct)
- [`_onPreDestroy()`](#method-_onpredestroy)
- [`_serialize(exporting)`](#method-_serialize)
- [`_deserialize(data, ctx, target)`](#method-_deserialize)
- [`isValid(value)`](#method-isvalid)

##### Events




### Details


#### Properties



##### property: `animationName`

The current playing animation.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/engine/skeleton.js:50](../files/utils_api_engine_skeleton.js.md#l50) |




##### property: `defaultAnimation`

The default animation name.

| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/engine/skeleton.js:40](../files/utils_api_engine_skeleton.js.md#l40) |




##### property: `loop`



| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/skeleton.js:132](../files/utils_api_engine_skeleton.js.md#l132) |
| Default    | false |




##### property: `timeScale`

The time scale of this skeleton.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/skeleton.js:141](../files/utils_api_engine_skeleton.js.md#l141) |
| Default    | 1 |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `Skeleton()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/spine-runtime.js:9](../files/utils_api_engine_spine-runtime.js.md#l9) |



##### method: `addAnimation(trackIndex, name, loop, delay)`

Adds an animation to be played delay seconds after the current or last queued animation.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton.js:210](../files/utils_api_engine_skeleton.js.md#l210) |
| Return 		 | spine.TrackEntry | null 

###### Parameters
- trackIndex <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- loop <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>  
- delay <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `clearTrack(trackIndex)`

Clears track of animation state by trackIndex.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton.js:245](../files/utils_api_engine_skeleton.js.md#l245) |

###### Parameters
- trackIndex <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  


##### method: `clearTracks()`

Clears all tracks of animation state.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton.js:236](../files/utils_api_engine_skeleton.js.md#l236) |



##### method: `getCurrent(trackIndex)`

Returns track entry by trackIndex. spine.TrackEntry is a spine runtime object. Check the [source code](https://github.com/EsotericSoftware/spine-runtimes/blob/master/spine-js/spine.js#L1507-L1515) for details.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton.js:224](../files/utils_api_engine_skeleton.js.md#l224) |
| Return 		 | spine.TrackEntry | null 

###### Parameters
- trackIndex <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>  

**Examples**
```var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function() {
      this.skeleton = null;
    },

    start: function() {
      this.skeleton.setAnimation(0, 'walk', true);
      var trackEntry = this.skeleton.getCurrent(0);
      Fire.log(trackEntry.animation.name); // walk
      Fire.log(trackEntry.timeScale); // 1
      Fire.log(trackEntry.loop); // true
    }
});


##### method: `setAnimation(trackIndex, name, loop)`

Set the current animation. Any queued animations are cleared.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton.js:190](../files/utils_api_engine_skeleton.js.md#l190) |
| Return 		 | spine.TrackEntry | null 

###### Parameters
- trackIndex <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- loop <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>  

**Examples**
```var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function() {
      this.skeleton = null;
    },

    // use this for initialization
    start: function () {
      var self = this;
      // get Skeleton component
      this.skeleton = this.getComponent('Fire.Spine.Skeleton');
      // track 0 for body movement
      self.skeleton.setAnimation(0, 'idle', true);
    },

    playWalk: function () {
      self.setAnimation(0, 'walk', true);
    },

    playShoot: function () {
      // play an animation on a new track, in this example
      // track 0 controls torso and legs, track 1 controls upper body
      self.setAnimation(1, 'shoot', false);
    }
});


##### method: `setMix(fromAnimation, toAnimation, duration)`

Mix applies all keyframe values, interpolated for the specified time and mixed with the current values.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton.js:177](../files/utils_api_engine_skeleton.js.md#l177) |

###### Parameters
- fromAnimation <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- toAnimation <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- duration <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>  

**Examples**
```var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function() {
      this.skeleton = null;
    },
    // use this for initialization
    start: function () {
      var self = this;
      // get Skeleton component
      this.skeleton = this.getComponent('Fire.Spine.Skeleton');
      // you can enable transition between two animations at the start
      self.skeleton.setMix('idle', 'walk', 0.3);
      self.skeleton.setMix('walk', 'idle', 0.3);
    },

    // when any of the following method is called
    // mix between two animation will take effect
    playWalk: function () {
      self.setAnimation(0, 'walk', true);
    },

    playIdle: function () {
      self.setAnimation(0, 'idle', true);
    }
});



