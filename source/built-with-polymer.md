# Built with Polymer

Fireball uses [Polymer](polymer-project.org) to build the whole editor front end. This doc is for crediting Polymer for it's the only UI solution that suits a complex game editor toolset. Also we'd like to introduce our thoughts on how to utilize Polymer so developer with a similar need can use these informations.

## Why Polymer

Fireball is a single cross-platform app with a lot of panels. We evaluated CSS frameworks such as Zurb Foundation and Semantic-UI. But they are all too heavy and not precise enough for a game editing tools. We decided to build our own light weight custom element UI system, to populate panels with UI elements and components.

The UI elements we created is not just for Fireball's core editor, we'd like our users to be able to reuse Fireball's custom-elements or even build their own elements to extend the editor UI and create tools to fit their exact needs.

Currently there are several contenders in custom element domain, such as Angular, Ember and React. But they are all too heavy with MV* patterns. Polymer is the only one that keep it light and focus on UI creating.

On another important note, Fireball's UI panels are designed to be able to extend by users. We need to make sure there are no CSS pollution between core panels and user created panels. Shadow DOM technology used by Polymer is by far the best solution for our need.

Polymer utilizes the power of Custom Element, Shadow DOM and Data Binding without importing irrelevant functions. The design pattern is on the same track as Fireball. Fireball aims to use HTML5 web development technology (Elements, Styles, Data Attributes) to create the core of a powerful but flexible Editor UI system, and Polymer is the wheel we don't have to reinvent.

## Fireball UI Library and Panels Built With Polymer

[Editor UI](https://github.com/fireball-x/editor-ui) is our UI component and widget library crafted with [Polymer](polymer-project.org) for Fireball Editor. You can use them in your own Polymer projects.

Besides elements, we create all of our editor panels and tools (Such as scene editor, asset manager and console) as Polymer apps. We will be publish those tools in the near future. So stay tuned!
