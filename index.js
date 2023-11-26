let quizData =[
    {
        question: " How many squares does a chessboard have?",
        answer:[
            { text:"62",correct:false},
            { text:"64",correct:true},
            { text:"66",correct:false},
            { text:"68",correct:false},
        ]
    },
    {
        question: " What is it called when a player can't defend an attack against their king?",
        answer:[
            { text:"Chessmate",correct:false},
            { text:"Check",correct:false},
            { text:"Checkmates",correct:false},
            { text:"Checkmate",correct:true},
        ]
    },
    {
        question: " In chess, which piece is considered the most powerful?",
        answer:[
            { text:"Pawn",correct:false},
            { text:"Rook",correct:false},
            { text:"Queen",correct:true},
            { text:"Knight",correct:false},
        ]
    },
    {
        question: " How many pawns does each player start with in a standard game of chess?",
        answer:[
            { text:"8",correct:true},
            { text:"10",correct:false},
            { text:"12",correct:false},
            { text:"6",correct:false},
        ]
    },
    {
        question: " What is the term for when a pawn reaches the opposite end of the chessboard?",
        answer:[
            { text:"Promotion",correct:true},
            { text:"Demotion",correct:false},
            { text:"Upgrade",correct:false},
            { text:"Conversion",correct:false},
        ]
    },
    {
        question: " What is the only piece in chess that can jump over other pieces?",
        answer:[
            { text:"Pawn",correct:false},
            { text:"Rook",correct:false},
            { text:"Bishop",correct:false},
            { text:"Knight",correct:true},
        ]
    },
    {
        question: " In chess notation, what does 'O-O' represent?",
        answer:[
            { text:"Checkmate",correct:false},
            { text:"En passant",correct:false},
            { text:"Castling kingside",correct:true},
            { text:"Pawn promotion",correct:false},
        ]
    },
    {
        question: " What is the term for a move that puts the opponent's king in a position of being attacked and unable to escape?",
        answer:[
            { text:"Checkmate",correct:true},
            { text:"Check",correct:false},
            { text:"Stalemate",correct:false},
            { text:"Draw",correct:false},
        ]
    },
    {
        question: " How many squares does a knight move in an 'L' shape?",
        answer:[
            { text:"2",correct:false},
            { text:"3",correct:true},
            { text:"4",correct:false},
            { text:"5",correct:false},
        ]
    },
    {
        question: " What is the term for a situation in which neither player can achieve checkmate?",
        answer:[
            { text:"Checkmate",correct:false},
            { text:"Stalemate",correct:true},
            { text:"Draw",correct:false},
            { text:"Forfeit",correct:false},
        ]
    }
]




const questionElement = document.getElementById("q");
const optionElements = [
    document.getElementById("o1"),
    document.getElementById("o2"),
    document.getElementById("o3"),
    document.getElementById("o4"),
];

var btn1 = document.getElementById('o1');
var btn2 = document.getElementById('o2');
var btn3 = document.getElementById('o3');
var btn4 = document.getElementById('o4');
var points = 0;

async function displayQues(indexofques) {
    return new Promise((resolve) => {
        var currentques = quizData[indexofques];
        questionElement.textContent = currentques.question;

        currentques.answer.forEach((option, index) => {
            optionElements[index].textContent = option.text;
        });

        btn1.addEventListener("click", function () {
            value = document.getElementById('o1').value;
            console.log(value);
            resolve(value);
        });

        btn2.addEventListener("click", function () {
            value = document.getElementById('o2').value;
            console.log(value);
            resolve(value);
        });

        btn3.addEventListener("click", function () {
            value = document.getElementById('o3').value;
            console.log(value);
            resolve(value);
        });

        btn4.addEventListener("click", function () {
            value = document.getElementById('o4').value;
            console.log(value);
            resolve(value);
        });
    });
}

async function runQuiz() {
    for (let indexofques = 0; indexofques < 10; indexofques++) {
        await displayQues(indexofques);
        console.log("Value after question", indexofques, ":", value);
        if (indexofques === 0 && value === '2') {
            points++;console.log("Points:", points);
        }
        
        if (indexofques === 1 && value === '4') {
            points++;console.log("Points:", points);
        }
        
        if (indexofques === 2 && value === '3') {
            points++;console.log("Points:", points);
        }
        
        if (indexofques === 3 && value === '1') {
            points++;console.log("Points:", points);
        }
        
        if (indexofques === 4 && value === '1') {
            points++;console.log("Points:", points);
        }
        
        if (indexofques === 5 && value === '4') {
            points++;console.log("Points:", points);
        }
        
        if (indexofques === 6 && value === '3') {
            points++;console.log("Points:", points);
        }
        
        if (indexofques === 7 && value === '1') {
            points++;
            console.log("Points:", points);
        }
        
        if (indexofques === 8 && value === '2') {
            points++;
            console.log("Points:", points);
        }
        
        if (indexofques === 9 && value === '2') {
            points++;
            console.log("Points:", points);
        }
        
    }
    points=points*10;
    document.querySelectorAll('div').forEach(div => div.remove());
    const pointsDiv = document.createElement('div');
pointsDiv.classList.add('last');

if (points <= 30) {
    pointsDiv.innerHTML = `You Have <span id="s30">${points}%</span> Score`;
} else if (points > 30 && points <= 60) {
    pointsDiv.innerHTML = `You Have <span id="s60">${points}%</span> Score`;
} else {
    pointsDiv.innerHTML = `You Have <span id="s100">${points}%</span> Score`;
}

document.body.appendChild(pointsDiv);



}

runQuiz();
