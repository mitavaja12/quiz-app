let questionsList = [];
let score = 0;

const fetchQuestions = async () => {
    try {
        const response = await fetch('http://localhost:3000/questions'); 
        const data = await response.json();
        questionsList = data;
        displayQuestions();
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
};

const displayQuestions = () => {
    document.querySelector(".quiz-container").innerHTML = ""; 
    questionsList.forEach((questionData, index) => {
        let questionElement = document.createElement("h1");
        questionElement.innerHTML = `${questionData.question}`;
        
        let optionButtons = [];
        for (let i = 1; i <= 4; i++) {
            let optionButton = document.createElement("button");
            optionButton.innerHTML = `${String.fromCharCode(64 + i)}. ${questionData[`option${i}`]}`;
            optionButton.className = "btn";
            optionButton.addEventListener("click", () => {
                checkAnswer(index, questionData[`option${i}`], optionButton);
            });
            optionButtons.push(optionButton);
        }

        document.querySelector(".quiz-container").append(questionElement, ...optionButtons);
    });
};

const addQuestion = async (e) => {
    e.preventDefault();
    let questionText = document.querySelector("#question").value;
    let option1Text = document.querySelector("#option1").value;
    let option2Text = document.querySelector("#option2").value;
    let option3Text = document.querySelector("#option3").value;
    let option4Text = document.querySelector("#option4").value;
    let correctAnswerText = document.querySelector("#correct-answer").value;

    let newQuestion = {
        question: questionText,
        option1: option1Text,
        option2: option2Text,
        option3: option3Text,
        option4: option4Text,
        answer: correctAnswerText
    };

    try {
        const response = await fetch('http://localhost:3000/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuestion)
        });

        const data = await response.json();
        questionsList.push(data);

        displayQuestions(); 
        document.querySelector("#quiz-form").reset(); 
    } catch (error) {
        console.error("Error adding question:", error);
    }
};

const checkAnswer = (index, selectedAnswer, button) => {
    const correctAnswer = questionsList[index].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
        button.style.backgroundColor = "green"; 
    } else {
        button.style.backgroundColor = "red"; 
    }
};

document.querySelector("#quiz-form").addEventListener("submit", addQuestion);

window.onload = async () => {
    await fetchQuestions();
};
