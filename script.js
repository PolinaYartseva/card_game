let difficulty = document.getElementById('levels');

const difficultyLabels = [
    document.getElementById('label-simple'),
    document.getElementById('label-average'),
    document.getElementById('label-difficult'),
];

const difficultyMap = {
    'Простой': {
        'class': 'three-card-game',
        'cardNumber': 3,
    },
    'Средний': {
        'class': 'six-card-game',
        'cardNumber': 6,
    },
    'Сложный': {
        'class': 'ten-card-game',
        'cardNumber': 10,
    },
}

let clickOnCard = false;

difficultyLabels.forEach(difficultyButton => {
    difficultyButton.onclick = function() {
    };
});



const startButton = document.getElementById('button');

startButton.addEventListener('click', () => {

});
