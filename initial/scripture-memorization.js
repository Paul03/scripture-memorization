const bibleVerseElement = document.querySelector('#BibleVerse');
bibleVerseElement.innerHTML = retrieveBibleVerse();

/* TODO: Select the button element from the DOM and add an event listener to react to user clicks */

function handleButtonClick(event) {

    const bibleVerse = retrieveBibleVerse();

    /* TODO: Select the input element from the DOM and read the value that the user has input */
    const numberOfWordsToRemove = 0;

    /* TODO: Select the div element where the Bible verse is so that we can replace the text there */
    const bibleVerseElement = null;
    // bibleVerseElement.innerHTML = replaceWordsWithBlanks(numberOfWordsToRemove, bibleVerse);

    disableButton(event.target);

}

/**
 * Removes a specified number of words and replaces them with blank lines
 * <p>
 * The input string is unmodified and a new string is returned
 *
 * @param numberOfWordsToReplace {number} the number of words to replace
 * @param str {string} the string to replace words with blanks in
 *
 * @return {string} A new string with the specified number of words replaced with blank lines
 */
function replaceWordsWithBlanks(numberOfWordsToReplace, str) {

    const bibleVerse = cleanString(str);
    const words = bibleVerse.split(' ').filter(word => word !== ''); // Note: `filter` removes any blank words

    const wordCount = words.length;

    const indicesToRemoveAt = determineWhichWordsToRemove(numberOfWordsToReplace, wordCount);
    indicesToRemoveAt.forEach(index => words[index] = '__________');

    return words.join(' ');

}

function disableButton(button) {
    console.log('type', typeof button);
    button.setAttribute('disabled', 'true');
}

/**
 * Removes new line characters and trims leading and trailing spaces
 * <p>
 * Returns a new string without modifying the input string
 *
 * @param str {string} the string to 'clean'
 * @return {string} A new string with new line characters removed and leading/trailing spaces removed
 */
function cleanString(str) {
    return str.replaceAll(/(\r\n|\n|\r)/gm, '')
        .trim();
}

/**
 * Constructs an array with the specified number of items. Each item represents the 0-based index of a word to remove from a string
 *
 * @param numberOfWordsToReplace {number} the number of words to remove from the string
 * @param wordCount {number} the total number of words in the string
 *
 * @return {number[]} an array where each item is a 0-based index of a word to remove from the string
 */
function determineWhichWordsToRemove(numberOfWordsToReplace, wordCount) {

    const result = [];

    while (numberOfWordsToReplace > 0) {
        const indexToRemoveAt = randomNumber(wordCount);
        if (!contains(result, indexToRemoveAt)) {
            result.push(indexToRemoveAt);
            numberOfWordsToReplace--;
        }
    }

    return result;
}

/**
 * Generates a pseudo random integer between 0 and the input max
 *
 * @param max {number} the number that the output should not exceed
 *
 * @return {number} a random number between 0 and the provided max
 */
function randomNumber(max) {
    const floatingPoint = Math.random() * max;
    const integer = Math.floor(floatingPoint);
    return integer;
}

/**
 * Specifies whether the given array contains the given item
 *
 * @param array {T[]}
 * @param item {T}
 *
 * @return {boolean} true if the given array contains the given item; else false
 */
function contains(array, item) {
    return array.some(arrayElement => arrayElement === item);
}

function retrieveBibleVerse() {
    return `
        The Lord passed before him and proclaimed,
        "The Lord, the Lord, a God merciful and gracious,
        slow to anger, and abounding in steadfast love and faithfulness,
        keeping steadfast love for thousands, forgiving iniquity and
        transgression and sin, but who will by no means clear the guilty,
        visiting the iniquity of the fathers on the children and the
        children\'s children, to the third and the fourth generation."`;
}
