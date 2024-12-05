function concatStrings(a, b) {
  return a + b;
}

function isString(value) {
  return typeof value === "string";
}

function identifySign(value) {
  if (value === 0) {
    return "Ноль";
  } else if (value > 0) {
    return "Положительное число";
  } else {
    return "Отрицательное число";
  }
}

function reverseWords(text) {
  return text.split(" ").reverse().join(" ");
}

function wordsCount(text) {
  return text.split(" ").length;
}

export { concatStrings, isString, identifySign, reverseWords, wordsCount };
