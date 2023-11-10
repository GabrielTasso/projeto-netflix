function toggleAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}