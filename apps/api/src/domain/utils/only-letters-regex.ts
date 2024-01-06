/**
 * Regex to validate that the input consists only of letter characters.
 *
 * It matches any kind of letter from any language (including Latin, Kanji, Cyrillic, etc.)
 *
 * The 'u' flag enables Unicode support, necessary for \p{L} to work properly.
 */
export const onlyLettersRegex = /^[\p{L} ]+$/u;
