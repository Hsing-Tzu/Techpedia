const postimgElements = [...document.getElementsByClassName('postimg') ];
postimgElements.forEach((postimgElement, idx) => {
  const aElement = document.createElement('a');
  const imgElement = document.createElement('img');
  aElement.href = post[idx].href;
  imgElement.src = post[idx].src;
  postimgElement.appendChild(imgElement);
});

const titleElements = [...document.getElementsByClassName('posttitle') ];
titleElements.forEach((titleElement, idx) => {
  const aElement = document.createElement('a');
  aElement.href = post[idx].href;
  aElement.innerText = post[idx].text;
  titleElement.appendChild(aElement);
});

const contentElements = [...document.getElementsByClassName('postcontent') ];
contentElements.forEach((contentElement, idx) => {
  const aElement = document.createElement('a');
  aElement.href = post[idx].href;
  aElement.innerText = post[idx].content;
  contentElement.appendChild(aElement);
});