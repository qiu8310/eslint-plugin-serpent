# eslint-plugin-serpent

eslint plugin for serpent

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-serpent`:

```
$ npm install eslint-plugin-serpent --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-serpent` globally.

## Usage

Add `serpent` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "serpent"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "serpent/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





