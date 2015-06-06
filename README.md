# Fireball Game Editor

Fireball is a hackable game editor for creating mobile and HTML5 games, built with extremely extendable structure.

## Prerequisite

- Install [node.js v0.12+](https://nodejs.org/) or [io.js v2.0+](https://iojs.org/en/index.html)
- Install [gulp](https://github.com/gulpjs/gulp) command line tool
- Install [bower](http://bower.io/) command line tool

## Install

In cloned project folder, run the following command to setup dev environment:

```bash
# Initialize gulp task dependencies
npm run init

# bootstrap
gulp bootstrap
```

Bootstrap task will run the following command in sequence, so if anything goes wrong during the bootstrap process, you can manually run these commands to get back on track:

```bash
# Initialize git submodules
git submodule update --init

# Install builtin packages
gulp install-builtin

# Install runtime packages
gulp install-runtime

# Install fireshell(electron)
gulp update-fire-shell

# Install npm packages
gulp npm # DO NOT use npm directly

# Install bower packages
bower install
```

## Run

Here are ways to run fireball development version:

```bash
# Run fireball's dashboard
gulp run

# Open Fireball Package Studio
gulp package-studio
```

You can run package studio with path parameter like this:

```bash
# Open Fireball Package Studio
sh utils/package-studio.sh editor-framework/demo/
```

## Update

To get the latest fireball build:

```bash
# Update fireball from github repo,
# also update builtin packages and electron binary
gulp update

# Optional, update npm and bower dependencies
gulp update-deps
```

`gulp update` will run `git pull origin` in fireball's root folder. This way submodules will be updated according to fireball repo's commit. In case you want to update all submodules to latest commit, run following command:

```bash
gulp pull-submodules
```

## Test

```bash
# Run all tests
npm test

# Run a single test
npm run test <testfile...>

# Run test in submodule
npm run test editor-framework/<testfile...>
```

All test files are located in [test](/test/) folder or submodule's `/test` folder.
