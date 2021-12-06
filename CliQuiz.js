const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var name = "";
r1.question("Enter Your Name: ", (answer) => {
    name = answer;
    console.log("Welcome " + name + "\n");
    quiz();
});

var i = 0;
var score = 0;

const questions = [
    "Who killed Ganesh Gaitonde's mother? ",
    "Question 2?",
    "Question 3?",
    "Question 4?",
    "Question 5?"
];
const options = [
    ["Gaitonde's first father ", "Isa Suleiman ", "Ganesh Gaitonde ", "Bunty"],
    ["option 1", "option 2", "option 3", "option 4"],
    ["option 1", "option 2", "option 3", "option 4"],
    ["option 1", "option 2", "option 3", "option 4"],
    ["option 1", "option 2", "option 3", "option 4"]
];

var quiz = () => {
    if (i == 0) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " " + options[i][j]);
        }
        r1.question("Enter Option:- ", (answer) => {
            if (answer === "1") {
                score += 5;
                console.log("Correct Answer!!");
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][0]);
                score -= 2;
                quiz();
            }
            i += 1;

        });
    } else if (i === 1) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " " + options[i][j]);
        }
        r1.question("Enter Option:- ", (answer) => {
            if (answer === "1") {
                score += 5;
                console.log("Correct Answer!!");
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][1]);
                score -= 2;
                quiz();
            }
            i += 1;

        });
    } else if (i === 2) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " " + options[i][j]);
        }
        r1.question("Enter Option:- ", (answer) => {
            if (answer === "3") {
                score += 5;
                console.log("Correct Answer!!");
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][2]);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 3) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " " + options[i][j]);
        }
        r1.question("Enter Option:- ", (answer) => {
            if (answer === "3") {
                score += 5;
                console.log("Correct Answer!!");
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][0]);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 4) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " " + options[i][j]);
        }
        r1.question("Enter Option:- ", (answer) => {
            if (answer === "3") {
                score += 5;
                console.log("Correct Answer!!");
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][0]);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else {
        console.log("Final Score Of " + name + " is :- " + score);
        r1.close();
    }
}
