var censoredWords = ["fuck", "shit", "bitch", "fucking", "bitching"];
var customCensoredWords = [];

function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }

    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }

    return inStr;
}

function addCustomCensoredWord(word) {
    if (!customCensoredWords.includes(word)) {
        customCensoredWords.push(word);
    }
}

function removeCustomCensoredWord(word) {
    if (customCensoredWords.includes(word)) {
        var idx = customCensoredWords.indexOf(word);
        customCensoredWords.splice(idx, 1);
    }
}

function getSystemCensoredWord() {
    return censoredWords;
}

function getCustomCensoredWords() {
    return customCensoredWords;
}

function getAllCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCustomCensoredWord = addCustomCensoredWord;
exports.removeCustomCensoredWord = removeCustomCensoredWord;
exports.getSystemCensoredWord = getSystemCensoredWord;
exports.getCustomCensoredWords = getCustomCensoredWords;
exports.getAllCensoredWords = getAllCensoredWords;