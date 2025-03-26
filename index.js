const question = document.querySelector(".question")
const answerText = document.querySelector(".answer__text")
const answer = document.querySelector(".answer")

question.textContent = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon."

const odpoved = prompt("Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.")

answerText.textContent = odpoved


if (odpoved === "Bell") {
    answer.classList.add("answer--correct")
} else {
    answer.classList.add("answer--wrong")
}