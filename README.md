# js2json [![NPM Version](https://img.shields.io/npm/v/@jajaperson/js2json.svg?style=for-the-badge)](https://www.npmjs.com/package/@jajaperson/js2json) [![Build Status](https://img.shields.io/travis/com/jajaperson/js2json.svg?style=for-the-badge)](https://www.npmjs.com/package/@jajaperson/js2json)
Easily use JavaScript for configuration files to be converted to JSON.

## Usage
First, install the package

**Globally**
```sh
npm install @jajaperson/js2json
```
**Locally**
(recommended if you are using `js2json` in your build step)
```sh
npm install --save-dev @jajaperson/js2json
```

Then, run the command like so

```sh
js2json --input example.json.js
```

You can also use `--output` to specify the output path

```sh
js2json --input example.json.js --output my-new-json-file.json
```

## Advanced options
```
$ js2json --help
--input <input file> [args]

Options:
  --version, -v   Show version number                                  [boolean]
  -i, --input     js file to convert                         [string] [required]
  -o, --output    json file to output           [string] [default: <input>.json]
  -p, --pretty    format the json output                               [boolean]
  --sp, --spaces  number of spaces to use for indentation  [number] [default: 2]
  --help, -h      Show help                                            [boolean]
```

## Use Cases
If you want to include dynamic values in a JSON configuration file, you can use
a javascript file that `module.exports` the object and`js2json` to your build
step.
