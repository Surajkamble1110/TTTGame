let boxes = document.querySelectorAll(".btn");
let resetButton = document.querySelector("#reset");
let messageContainer = document.querySelector(".message-container");
let message = document.querySelector("#msg");
let newButton = document.querySelector("#new-game");
let turnO = true;

const winPatterns = [[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8]];


const resetGame = () => {

    turnO = true;
    messageContainer.classList.add("hide");
    enabledBoxes();

};

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turnO) {

            box.innerText = "O";
            // box.style.backgroundColor="b";
            box.style.color="blue";
            turnO = false;
        }
        else {

            box.innerText = "X";
            // box.style.backgroundColor="gray";
            box.style.color="orange";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();

    });

});


const disabledBoxes = () => {

    for (let box of boxes) {

        box.disabled = true;

    }
};

const enabledBoxes = () => {

    for (let box of boxes) {

        box.disabled = false;
        box.innerText = "";
    }
};

const show = (winner) => {

    message.innerText = `Congratulations! Winner is ${winner}`;
    messageContainer.classList.remove("hide");

    disabledBoxes();

};


const checkWinner = () => {

    for (let pattern of winPatterns) {

        pos1Value = boxes[pattern[0]].innerText;
        pos2Value = boxes[pattern[1]].innerText;
        pos3Value = boxes[pattern[2]].innerText;


        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {


            if (pos1Value === pos2Value && pos2Value === pos3Value) {

                show(pos1Value);
            }
        }
    }

};


newButton.addEventListener("click", resetGame);


resetButton.addEventListener("click", resetGame);