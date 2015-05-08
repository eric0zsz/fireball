# Fireball Open Sourced Repos

Fireball contains several submodule repos. Some of them are open sourced, others will be open sourced in the near future. Since we will refactor the structure in a month or two, we think it's best to publish those repos once we've done with the refactoring.

## Public Modules

### Core Modules

- [Core](https://github.com/fireball-x/core) - The basic classes used in fireball engine and editors
- [Engine](https://github.com/fireball-x/engine) - An Entity/Compnoent system designed for both game and editors
- [Editor UI](https://github.com/fireball-x/editor-ui) - UI components and widgets crafted with [Polymer](polymer-project.org) for Fireball Editor. You can use them in your own Polymer projects.

After beta, we will refactor these two repos and make them into one, called engine-framework. After that it can be used standalone, and is easy to integrate with your favorite runtime ( cocos2d-js, pixi.js even three.js ).

### Tool Modules

- [Fireball Node Modules](https://github.com/fireball-x/modules) - NPM modules used in Fireball.
- [Sprite Animation](https://github.com/fireball-x/sprite-animation) - Sprite Animation clip, state and component.
- [Code Editor](https://github.com/fireball-x/code-editor) - Builtin code editor based on [CodeMirror](https://github.com/codemirror/codemirror).
- [Firedoc](https://github.com/fireball-x/firedoc) - API Doc generator based on YUIDoc, with multi-language description tags, direct members of modules, file-based `@example`, single-line `@property` and `@enum` tag.


## Fireball Structure

```plain
Fireball
  |--*main (The main program and static resources)
  |--core (The basic classes used in fireball engine and editors)
  |--engine (Fireball game engine based on Pixi.js)
  |--*editor (Fireball editor, built with Polymer and Electron)
  |--*builtin (Fireball builtin plugins)
  |     |--scene view
  |     |--game view
  |     |--console
  |     |--assets-manager
  |     |--code-editor
  |     |--etc...
  |--*runtime (runtime layer to map data interfaces from editor to game engine)
        |--cocos (Cocos2D-JS)
        |--basic (Pixi.js)
```

Repos start with "\*" is currently private. After Fireball beta release, we will refactor the structure to the following and makes all parts public.

## Structure In the Future

```plain
Fireball
  |--main (The main program and static resources)
  |--engine-framework (an Entity-Component interface for connecting Fireball Editor and other game engines)
  |--editor-framework (The backbone of Fireball editor, a framework for easy dockable editor making)
  |--asset-database (Assets and data management system, integrated with VCS and custom data interpreter)
  |--fireball-editor (Fireball editor, based on editor-framework and Polymer)
  |--packages
      |--packageA
      |--packageB
      |--etc...
```

Once the refactoring is finished, all repos will be public. And developers can utilize **Engine-Framework**, **Editor-Framework** and **Asset-Database** to combine their favorite game engine and editor tools to make the perfect game development toolset they need.

By then, you can access full source code in this repo. Follow this repo to keep up with the latest development and changes of Fireball.
