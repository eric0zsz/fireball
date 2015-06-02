## Install

```bash
# Initialize submodules

git submodule update --init

# Install npm packages
sh utils/npm.sh install # DO NOT use npm directly

# Install bower packages
bower install

# Install electron
gulp update-electron

# Install builtin packages
sh utils/install-builtin.sh
```

## Run

Here are the ways to running fireball

```bash
# Run fireball's dashboard
sh utils/fireball.sh

# Open a project in Fireball Cavans Studio
sh utils/fireball.sh "your/project/path"

# Open Fireball Package Studio
sh utils/package-studio.sh
```

## Test

```bash
# Run all tests
npm test

# Run a single test
npm run test -- testfile
```

All test files are located in [test](/test/) folder.
