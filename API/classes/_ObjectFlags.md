
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `_ObjectFlags` Class


Defined in: [utils/api/core/definition.js:126](../files/utils/api/core/definition.js.js)

Module: [Fire](../modules/Fire.md)




Bit mask that controls object states.

### Index

##### Properties

  - [`DontDestroy`](#property-dontdestroy)
  - [`DontSave`](#property-dontsave)
  - [`EditorOnly`](#property-editoronly)
  - [`Hide`](#property-hide)
  - [`HideInEditor`](#property-hideineditor)
  - [`HideInGame`](#property-hideingame)







### Details


#### Properties



##### property: `DontDestroy`

Dont destroy automatically when loading a new scene.

| meta | description |
|------|-------------|
| Type | unknown |
| Defined | [utils/api/core/definition.js:152](../files/utils_api_core_definition.js.md#l152) |




##### property: `DontSave`

The object will not be saved.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/definition.js:136](../files/utils_api_core_definition.js.md#l136) |




##### property: `EditorOnly`

The object will not be saved when building a player.

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/definition.js:143](../files/utils_api_core_definition.js.md#l143) |




##### property: `Hide`

Hide in game view, hierarchy, and scene view... etc.
This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags()

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/definition.js:188](../files/utils_api_core_definition.js.md#l188) |




##### property: `HideInEditor`

This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags()

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/definition.js:173](../files/utils_api_core_definition.js.md#l173) |




##### property: `HideInGame`

Hide in game and hierarchy.
This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags()

| meta | description |
|------|-------------|
| Type | number |
| Defined | [utils/api/core/definition.js:163](../files/utils_api_core_definition.js.md#l163) |






