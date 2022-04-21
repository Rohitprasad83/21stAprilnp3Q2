// Import stylesheets
import './style.css';

// Write Javascript code!
const paragraph = document.getElementsByTagName('p');
const btnHighlight = document.getElementsByTagName('button');

btnHighlight[0].addEventListener('click', () => {
  const words = paragraph[0].innerHTML.split(' ');
  let res = document.createElement('div');
  for (let word of words) {
    let span = document.createElement('span');
    span.innerText = word;
    if (word.length > 8) {
      span.style.backgroundColor = 'yellow';
    }
    span.innerText += ' ';
    res.appendChild(span);
  }
  paragraph[0].innerHTML = res.innerHTML;
});
