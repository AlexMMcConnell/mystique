oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mystique
$ mystique COMMAND
running command...
$ mystique (--version)
mystique/0.0.0 darwin-x64 node-v20.5.0
$ mystique --help [COMMAND]
USAGE
  $ mystique COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mystique hello PERSON`](#mystique-hello-person)
* [`mystique hello world`](#mystique-hello-world)
* [`mystique help [COMMANDS]`](#mystique-help-commands)
* [`mystique plugins`](#mystique-plugins)
* [`mystique plugins:install PLUGIN...`](#mystique-pluginsinstall-plugin)
* [`mystique plugins:inspect PLUGIN...`](#mystique-pluginsinspect-plugin)
* [`mystique plugins:install PLUGIN...`](#mystique-pluginsinstall-plugin-1)
* [`mystique plugins:link PLUGIN`](#mystique-pluginslink-plugin)
* [`mystique plugins:uninstall PLUGIN...`](#mystique-pluginsuninstall-plugin)
* [`mystique plugins:uninstall PLUGIN...`](#mystique-pluginsuninstall-plugin-1)
* [`mystique plugins:uninstall PLUGIN...`](#mystique-pluginsuninstall-plugin-2)
* [`mystique plugins update`](#mystique-plugins-update)

## `mystique hello PERSON`

Say hello

```
USAGE
  $ mystique hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/AlexMMcConnell/mystique/blob/v0.0.0/dist/commands/hello/index.ts)_

## `mystique hello world`

Say hello world

```
USAGE
  $ mystique hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ mystique hello world
  hello world! (./src/commands/hello/world.ts)
```

## `mystique help [COMMANDS]`

Display help for mystique.

```
USAGE
  $ mystique help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mystique.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.14/src/commands/help.ts)_

## `mystique plugins`

List installed plugins.

```
USAGE
  $ mystique plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mystique plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `mystique plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mystique plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mystique plugins add

EXAMPLES
  $ mystique plugins:install myplugin 

  $ mystique plugins:install https://github.com/someuser/someplugin

  $ mystique plugins:install someuser/someplugin
```

## `mystique plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mystique plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mystique plugins:inspect myplugin
```

## `mystique plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mystique plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mystique plugins add

EXAMPLES
  $ mystique plugins:install myplugin 

  $ mystique plugins:install https://github.com/someuser/someplugin

  $ mystique plugins:install someuser/someplugin
```

## `mystique plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mystique plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ mystique plugins:link myplugin
```

## `mystique plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mystique plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mystique plugins unlink
  $ mystique plugins remove
```

## `mystique plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mystique plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mystique plugins unlink
  $ mystique plugins remove
```

## `mystique plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mystique plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mystique plugins unlink
  $ mystique plugins remove
```

## `mystique plugins update`

Update installed plugins.

```
USAGE
  $ mystique plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
