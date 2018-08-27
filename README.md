# js-2-json [![Build Status](https://travis-ci.com/jajaperson/js-2-json.svg?branch=master)](https://travis-ci.com/jajaperson/js-2-json)
Easily use JavaScript for configuration files to be converted to JSON.

## Usage
First, install the package

**Globally**
```sh
npm install js-2-json
```
**Locally**
(recommended if you are using `js-2-json` in your build step)
```sh
npm install --save-dev js-2-json
```

Then, run the command like so

```sh
js-2-json --input example.json.js
```

You can also use `--output` to specify the output path

```sh
js-2-json --input example.json.js --output my-new-json-file.json
```

## Advanced options
```
$ js-2-json --help
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
a javascript file that `module.exports` the object and`js-2-json` to your build
step.
