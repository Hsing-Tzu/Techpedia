const titleElements = [...document.getElementsByClassName('title') ];
titleElements.forEach((titleElement, idx) => {
  const aElement = document.createElement('a');
  aElement.href = currentnews[idx].href;
  aElement.innerText = currentnews[idx].text;
  titleElement.appendChild(aElement);
});

const sourceElements = [...document.getElementsByClassName('source') ];
sourceElements.forEach((sourceElement, idx) => {
  const aElement = document.createElement('a');
  aElement.href = currentnews[idx].href;
  aElement.innerText = currentnews[idx].source;
  sourceElement.appendChild(aElement);
});

const contentElements = [...document.getElementsByClassName('newscontent') ];
contentElements.forEach((contentElement, idx) => {
  const aElement = document.createElement('a');
  aElement.href = currentnews[idx].href;
  aElement.innerText = currentnews[idx].content;
  contentElement.appendChild(aElement);
});