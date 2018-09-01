# Zensory

Want to provide a zene and peaceful feeling for your site's visitors? Look no further!

Zensory is a Node Packaged Module that censors and replaces predefined sensitive words with "****". Custom words can be added and removed by using the corresponding functions.

## Install

With [npm](https://www.npmjs.com/) installed, run

```
$ npm install censory
```

## Usage

To censor words in a string:
```
censor('string')
```

To add word to the custome censor list:
```
addCustomCensoredWord('word')
```

To remove word from the custom censor list:
```
removeCustomCensoredWord('word')
```

To retrieve system censor list:
```
getSystemCensoredWord()
```

To retrieve custom censor list:
```
getCustomCensoredWords()
```

To retrieve all censor words:
```
getAllCensoredWords()
```

## Authors

* [**Elsa Ng**](https://github.com/elsa-ng)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used

