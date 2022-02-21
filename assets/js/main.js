let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];


let input = document.getElementById("input");
let output = document.getElementById("output");
let exp = document.getElementById("expl")

console.log(input, output);
let morseOutput;

let calc = () => {
    console.log("test");
    let tempArr = input.value.split("");
    console.log(tempArr);
    for (let i = 0; i < tempArr.length; i++) {
        console.log(tempArr[i].toUpperCase());
        for (let j = 0; j < morseAlphabet.length; j++) {
            if (tempArr[i] == " ") {
                morseOutput = ` / `;

            }
            if (tempArr[i].toUpperCase() == morseAlphabet[j].letter) {
                console.log(morseAlphabet[j].morseCode);
                morseOutput = morseAlphabet[j].morseCode;
                exp.innerHTML += `${tempArr[i]} = ${morseAlphabet[j].morseCode} <br>`;
            }

        } output.innerHTML += ` ${morseOutput} `;


        console.log("first outputline: " + morseOutput);
    } //output.innerHTML += `${morseOutput}`;
    console.log("2nd outputline: " + morseOutput);
    //output.innerHTML += ` ${morseOutput} `;
}

