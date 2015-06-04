var Path = require('path');
var Fs = require('fire-fs');
var semver = require('semver');
var chalk = require('chalk');
var chalkProp = chalk.blue;
var chalkModule = chalk.cyan;
var chalkVersion = chalk.red;

function checkAllSubmoduleDeps(submodules) {
	var npmPjson = JSON.parse(Fs.readFileSync('package.json'));
	var bowerPjson = JSON.parse(Fs.readFileSync('bower.json'));
	var moduleList = npmPjson.submodules;
	moduleList.map(function(submodule) {
		checkDeps(submodule, npmPjson, 'dependencies', 'package.json');
		checkDeps(submodule, npmPjson, 'devDependencies', 'package.json');
		checkDeps(submodule, bowerPjson, 'dependencies', 'bower.json');
	});
}

function checkDeps(submodule, mainJson, depkey, filename) {
	var submodulePjson;
	var configPath = Path.join(submodule, filename);
	if (Fs.existsSync(configPath)) {
		submodulePjson = JSON.parse(Fs.readFileSync(configPath));
	} else {
		console.log(chalkModule(submodule + '/' + filename) + ' is missing!');
		return;
	}

	//deps
	var subDeps = submodulePjson[depkey];
	var mainDeps = mainJson[depkey];
	for (var prop in subDeps) {
		if (!mainDeps.hasOwnProperty(prop)) {
			console.log('New dependency ' + chalkProp(prop) + ' found in ' + chalkModule(submodule + '/' + filename) + ', please let @jwu add it to fireball/' + filename);
		} else {
			if (subDeps[prop]) {
				if (subDeps[prop] === mainDeps[prop]) {
					continue;
				} else {
					if (semver.valid(subDeps[prop])) {
						console.log('Dependency ' + chalkProp(prop) + ' in ' + chalkModule(submodule + '/' + filename) + ' has a version ' + chalkVersion(subDeps[prop]) + '. Which is different from main repo version ' + chalkVersion(mainDeps[prop]) + ', please let @jwu decide which version to use.');
					}	else if (subDeps[prop].split('/').length === 2) {
						console.log('Dependency ' + chalkProp(prop) + ' in ' + chalkModule(submodule + '/' + filename) + ' has a github url ' + chalkVersion(subDeps[prop]) + '. Which is different from main repo version ' + chalkVersion(mainDeps[prop]) + ', please let @jwu decide which url to use.');
					} else {
						console.log('Dependency ' + chalkProp(prop) + ' in ' + chalkModule(submodule + '/' + filename) + ' has an invalid version value ' + chalkVersion(subDeps[prop]) + '. The author should specify a valid and fixed semver or github url for that dependency.'); 
					}
				}
			} else {
				console.log('Dependency ' + chalkProp(prop) + ' in ' + chalkModule(submodule + '/' + filename) + ' is missing a fixed semver. The author should specify a valid and fixed semver for that dependency.');
			}
		}
	}
}

module.exports = {
	checkSubmoduleDeps: checkAllSubmoduleDeps
};