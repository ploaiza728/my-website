const words = document.querySelectorAll(".word");
const dropZones = document.querySelectorAll(".drop-zone");
const checkButton = document.getElementById("check-button");
const feedback = document.getElementById("feedback");

// Allow dragging of words
words.forEach(word => {
    word.addEventListener("dragstart", dragStart);
});

function dragStart(e) {
    e.dataTransfer.setData("text", e.target.textContent);
}

// Allow dropping into drop zones
dropZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropWord);
});

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("over");
}

function dropWord(e) {
    e.preventDefault();
    e.target.classList.remove("over");
    const droppedWord = e.dataTransfer.getData("text");
    e.target.textContent = droppedWord;
}

// Check the answer
checkButton.addEventListener("click", () => {
    const subject = document.getElementById("subject-area").textContent.trim();
    const verb = document.getElementById("verb-area").textContent.trim();
    const object = document.getElementById("object-area").textContent.trim();

    if (subject === "fox" && verb === "jumps" && object === "dog") {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.style.color = "red";
    }
});
