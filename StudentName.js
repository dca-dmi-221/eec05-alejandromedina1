'use strict'

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";

function wordCutter(word) {
    word = word.split('');
    console.log(word);
    word = word.sort(function () {
        return Math.random() - 0.5
    });
    word.forEach(element => {
        console.log(element);
    });
}
wordCutter(testWord);

/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    let wordsListCopy = wordsList.map((element) => element.toLowerCase());
    targetWord = targetWord.toLowerCase();
    targetWord = normalizeWord(targetWord);
    targetWord = wordsListCopy.includes(targetWord);
    console.log(targetWord);

}

function normalizeWord(word) {
    return word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
wordSearcherIgnoreCase(testTargetWordA, testWordsList);
wordSearcherIgnoreCase(testTargetWordB, testWordsList);
wordSearcherIgnoreCase(testTargetWordC, testWordsList);




/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    longestWord(wordsList);
    shortestWord(wordsList);
    averageWordLength(wordsList);
}

function longestWord(wordsList) {
    let longest = wordsList[0];
    wordsList.forEach(element => {
        if (element.length > longest.length) {
            longest = element;
        }
    });
    console.log(longest);
}

function shortestWord(wordsList) {
    let shortest = wordsList[0];
    wordsList.forEach(element => {
        if (element.length < shortest.length) {
            shortest = element;
        }
    });
    console.log(shortest);
}

function averageWordLength(wordsList) {
    let wordsLengthList = [];
    wordsList.forEach(element => {
        wordsLengthList.push(element.length);
    });
    const initialValue = 0
    const finalLenghts = wordsLengthList.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    const averageLength = finalLenghts / wordsLengthList.length;
    console.log(averageLength);
}
wordLengthClassifier(testSampleList);


/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
    word = word.toLowerCase();
    let referenceWord = word;
    referenceWord = referenceWord.split('').reverse();
    referenceWord = referenceWord.join('');
    if (word === referenceWord) {
        console.log(word + ' is a palindrome');
    } else {
        console.log(word + ' is not a palindrome');
    }
}
palindromeVerifier(onVerificationWordA);
palindromeVerifier(onVerificationWordB);
palindromeVerifier(onVerificationWordC);
palindromeVerifier(onVerificationWordD);

/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list: ["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}

function lettersCounter(objectContainer) {
    let vocalCounter = 0;
    let consonantCounter = 0;
    let numberOfLetters = [];
    for (let i = 0; i < objectContainer.list.length; i++) {
        const word = objectContainer.list[i];
        for (let j = 0; j < word.length; j++) {
            const letter = word[j];
            if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') {
                vocalCounter++;
            } else {
                consonantCounter++;
            }
        }
    }
    numberOfLetters.push(vocalCounter);
    numberOfLetters.push(consonantCounter);
    console.log(numberOfLetters);
}
lettersCounter(containerTestObject);


/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿", "cómo", "estás", "?"];
let wordArrayB = ["te", "ves", "igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    const lists = listA.concat(listB);
    console.log(lists);
}
arrayJoiner(wordArrayA, wordArrayB);


/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana", "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
    let array = [];
    for (let i = 0; i < listOfWords.length; i++) {
        wordToExplore = wordToExplore.split('').sort().join('');
        listOfWords[i] = listOfWords[i].split('').sort().join('');
        if (wordToExplore === listOfWords[i]) {
            array.push(i);
        }
    }
    console.log(array);
}
anagramVerifier(testWordToExplore, wordsToVerify);

/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    let lists = objectMultiContainer.listA.concat(objectMultiContainer.listB);
    for (let i = 0; i < lists.length; i++) {
        lists[i] = lists[i].replace(/[aeiou]/g, '');
    }
    return lists;
}
console.log(vocalsRemoverFromObject(testObjMultiContainer));

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].replace(/.$/, 'x');
    }
    console.log(words);
}
lastVocalReplacer(someWordsToTest);


/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor", "firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}