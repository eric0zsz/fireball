
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `SkeletonRenderer` Class

Extends `Renderer`

Defined in: [utils/api/engine/skeleton-renderer.js:13](../files/utils/api/engine/skeleton-renderer.js.js)

Module: [Fire.Spine](../modules/Fire.Spine.md)




The base class of Skeleton.

### Index

##### Properties

  - [`debugBones`](#property-debugbones)
  - [`debugSlots`](#property-debugslots)
  - [`initialSkinIndex`](#property-initialskinindex)
  - [`initialSkinName`](#property-initialskinname)
  - [`skeletonData`](#property-skeletondata)



##### Methods

  - [`SkeletonRenderer()` **constructor**](#method-skeletonrenderer)
  - [`findBone(boneName)`](#method-findbonebonename)
  - [`findSlot(slotName)`](#method-findslotslotname)
  - [`getAttachment(slotName, attachmentName)`](#method-getattachmentslotname-attachmentname)
  - [`setAttachment(slotName, attachmentName)`](#method-setattachmentslotname-attachmentname)
  - [`setBonesToSetupPose()`](#method-setbonestosetuppose)
  - [`setSkin(skinName)`](#method-setskinskinname)
  - [`setSlotsToSetupPose()`](#method-setslotstosetuppose)
  - [`setToSetupPose()`](#method-settosetuppose)




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




### Inheritance tree


### Details


#### Properties



##### property: `debugBones`

Indicates whether open debug bones.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/skeleton-renderer.js:135](../files/utils_api_engine_skeleton-renderer.js.md#l135) |
| Default    | false |




##### property: `debugSlots`

Indicates whether open debug slots.

| meta | description |
|------|-------------|
| Type | boolean |
| Defined | [utils/api/engine/skeleton-renderer.js:114](../files/utils_api_engine_skeleton-renderer.js.md#l114) |
| Default    | false |




##### property: `initialSkinIndex`



| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/engine/skeleton-renderer.js:62](../files/utils_api_engine_skeleton-renderer.js.md#l62) |




##### property: `initialSkinName`



| meta | description |
|------|-------------|
| Type | string |
| Defined | [utils/api/engine/skeleton-renderer.js:48](../files/utils_api_engine_skeleton-renderer.js.md#l48) |




##### property: `skeletonData`



| meta | description |
|------|-------------|
| Type | <a href="../classes/SkeletonDataAsset.html" class="crosslink">SkeletonDataAsset</a> |
| Defined | [utils/api/engine/skeleton-renderer.js:26](../files/utils_api_engine_skeleton-renderer.js.md#l26) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `SkeletonRenderer()`



| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton-renderer.js:13](../files/utils_api_engine_skeleton-renderer.js.md#l13) |



##### method: `findBone(boneName)`

Finds a bone by name. This does a string comparison for every bone.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton-renderer.js:204](../files/utils_api_engine_skeleton-renderer.js.md#l204) |
| Return 		 | spine.Bone 

###### Parameters
- boneName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `findSlot(slotName)`

Finds a slot by name. This does a string comparison for every slot.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton-renderer.js:215](../files/utils_api_engine_skeleton-renderer.js.md#l215) |
| Return 		 | spine.Slot 

###### Parameters
- slotName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `getAttachment(slotName, attachmentName)`

Returns the attachment for the slot and attachment name. The skeleton looks first in its skin, then in the
skeleton data’s default skin.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton-renderer.js:238](../files/utils_api_engine_skeleton-renderer.js.md#l238) |
| Return 		 | spine.RegionAttachment | spine.BoundingBoxAttachment 

###### Parameters
- slotName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- attachmentName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `setAttachment(slotName, attachmentName)`

Sets the attachment for the slot and attachment name. The skeleton looks first in its skin, then in the
skeleton data’s default skin.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton-renderer.js:251](../files/utils_api_engine_skeleton-renderer.js.md#l251) |

###### Parameters
- slotName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  
- attachmentName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `setBonesToSetupPose()`

Sets the bones to the setup pose, using the values from the `BoneData` list in the `SkeletonData`.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton-renderer.js:186](../files/utils_api_engine_skeleton-renderer.js.md#l186) |



##### method: `setSkin(skinName)`

Finds a skin by name and makes it the active skin. This does a string comparison for every skin. Note that
setting the skin does not change which attachments are visible.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton-renderer.js:226](../files/utils_api_engine_skeleton-renderer.js.md#l226) |
| Return 		 | spine.Skin 

###### Parameters
- skinName <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>  


##### method: `setSlotsToSetupPose()`

Sets the slots to the setup pose, using the values from the `SlotData` list in the `SkeletonData`.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton-renderer.js:195](../files/utils_api_engine_skeleton-renderer.js.md#l195) |



##### method: `setToSetupPose()`

Sets the bones and slots to the setup pose.

| meta | description |
|------|-------------|
| Defined | [utils/api/engine/skeleton-renderer.js:177](../files/utils_api_engine_skeleton-renderer.js.md#l177) |




