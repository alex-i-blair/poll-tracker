// import functions and grab DOM elements
import {
    renderPoll,
    
} from './render-utils.js';

const pollFormEl = document.querySelector('#poll-form');

const addOption1El = document.querySelector('#add-option-1');
const addOption2El = document.querySelector('#add-option-2');

const undoOption1El = document.querySelector('#undo-option-1');
const undoOption2El = document.querySelector('#undo-option-2');

const pollQuestionEl = document.querySelector('#poll-question');
const option1NameEl = document.querySelector('#option-1-name');
const option1CountEl = document.querySelector('#option-1-count');
const option2NameEl = document.querySelector('#option-2-name');
const option2CountEl = document.querySelector('#option-2-count');
const displayPastPollEl = document.querySelector('#display-past-polls');
const closePollEl = document.querySelector('#close-poll');

// let state
let pastPollsArr = [];
let pollQuestion = '';
let pollOption1 = '';
let pollOption2 = '';
let pollCount1 = 0;
let pollCount2 = 0;

pollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(pollFormEl);
    pollQuestion = data.get('question');
    pollOption1 = data.get('option-1');
    pollOption2 = data.get('option-2');
    pollFormEl.reset();

    pollQuestionEl.textContent = pollQuestion;
    // console.log(pollQuestionEl);
    option1NameEl.textContent = pollOption1;
    option2NameEl.textContent = pollOption2;
});

addOption1El.addEventListener('click', () => {
    pollCount1++;
    option1CountEl.textContent = pollCount1;
});
addOption2El.addEventListener('click', () => {
    pollCount2++;
    option2CountEl.textContent = pollCount2;
});
undoOption1El.addEventListener('click', () => {
    pollCount1--;
    option1CountEl.textContent = pollCount1;
});
undoOption2El.addEventListener('click', () => {
    pollCount2--;
    option2CountEl.textContent = pollCount2;
});

closePollEl.addEventListener('click', () => {
    const poll = makePoll();
    pastPollsArr.push(poll);
    displayAllPolls();
    resetState();
    displayCurrentPoll();
    

});

function resetState() {
    pollQuestion = '';
    pollOption1 = '';
    pollOption2 = '';
    pollCount1 = '';
    pollCount2 = '';
}

function displayCurrentPoll() {
    pollQuestionEl.textContent = pollQuestion;
    // console.log(pollQuestionEl);
    option1NameEl.textContent = pollOption1;
    option2NameEl.textContent = pollOption2;
    option1CountEl.textContent = pollCount1;
    option2CountEl.textContent = pollCount2;
    
}


function makePoll() {
    return {
        pollQuestion,
        pollOption1,
        pollOption2,
        pollCount1,
        pollCount2
    };
}
function displayAllPolls() {
    
    displayPastPollEl.textContent = '';
    for (let polls of pastPollsArr) {
        const container = renderPoll(polls);
        displayPastPollEl.append(container);
    }
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
