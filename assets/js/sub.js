console.log('This is Sub JS')
const changeSubColor = document.getElementById('changeSubColor');
changeSubColor.addEventListener('click', () => {
  const color = mainContainer.style.color;
  if (color === 'red') {
    mainContainer.style.color = '';
  } else {
    mainContainer.style.color = 'red';
  }
  
})