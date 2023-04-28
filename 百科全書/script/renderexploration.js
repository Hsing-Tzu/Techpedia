const wordsimageElements = [...document.getElementsByClassName('words-image')];
wordsimageElements.forEach((wordimageElement, idx) => {
  const aElement = document.createElement('a');
  const imgElement = document.createElement('img');
  aElement.href = word[idx].href;
  imgElement.src = word[idx].src;
  wordimageElement.appendChild(aElement);
  aElement.appendChild(imgElement);
});

const wordstextElements = [...document.getElementsByClassName('words-text')];
wordstextElements.forEach((wordtextElement, idx) => {
  const aElement = document.createElement('a');
  aElement.href = word[idx].href;
  aElement.innerText = word[idx].ctitle + " \n" + word[idx].etitle;
  wordtextElement.appendChild(aElement);
});