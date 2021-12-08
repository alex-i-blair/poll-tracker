export function renderPoll(poll) {
    const div = document.createElement('div');
    const questionDiv = document.createElement('p');
    questionDiv.textContent = poll.pollQuestion;
    const option1Div = renderOptions(poll.pollOption1, poll.pollCount1);
    const option2Div = renderOptions(poll.pollOption2, poll.pollCount2);
    div.append(questionDiv, option1Div, option2Div);

    div.classList.add('poll');
    // console.log(div.outerHTML);
    return div;
}

function renderOptions(option, count) {
    const pollDiv = document.createElement('div');
    const optionDiv = document.createElement('p');
    const countDiv = document.createElement('p');
    optionDiv.textContent = option;
    countDiv.textContent = count;
    pollDiv.append(optionDiv, countDiv);
    // console.log(teamDiv.outerHTML);
    return pollDiv;
}