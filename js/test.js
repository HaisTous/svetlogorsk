const isCorrectAnswer = (question, correctAnswer) => {
    const q = document.getElementsByName(question);
    let answer = '';

    for (let i = 0; i < q.length; i++) {
        if (q[i].checked) {
            answer += String(i);
        }
    }

    return answer === correctAnswer
}

document.getElementById('button').onclick = function () {
    const correctAnswers = ['None', '1', '1', '0235', '2', '023468', '2', '0', '1', '2', '1', '2', '0', '2', '1', '1',
        '0', '1', '1', '0', '1', '0', '2', '0', '1', '0', '2', '1', '0', '2'];
    let numberOfPoints = 0;

    for (let i = 1; i <= correctAnswers.length; i++) {
        numberOfPoints += isCorrectAnswer('q' + String(i), correctAnswers[i]);
    }

    alert(`Вы ответили правильно на ${numberOfPoints} вопросов из 29!`);
};