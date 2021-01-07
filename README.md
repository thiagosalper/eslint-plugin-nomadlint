# eslint-plugin-nomadlint

Nomad lint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nomadlint`:

```
$ npm install eslint-plugin-nomadlint --save-dev
```


## Usage

Add `nomadlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nomadlint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nomadlint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





