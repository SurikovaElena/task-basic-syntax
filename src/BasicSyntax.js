/*export*/ function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let length = str.length;
    const romanNotation = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
        ArabicNotation = [1, 5, 10, 50, 100, 500, 1000];
    for (let i = 0; i < length; i++) {
        let idCurrentSymbol = romanNotation.indexOf(str[i]),
            idNextSymbol = romanNotation.indexOf(str[i + 1]);
        if (ArabicNotation[idCurrentSymbol] < ArabicNotation[idNextSymbol]) {
            result +=
                ArabicNotation[idNextSymbol] - ArabicNotation[idCurrentSymbol];
            i++;
        } else {
            result += ArabicNotation[idCurrentSymbol];
        }
    }
    return result;
}
