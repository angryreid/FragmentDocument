console.log('This is Main JS')
const renderingSub = document.getElementById('renderingSub');
const mainContainer = document.getElementById('mian');
const source = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
                  <script src="assets/js/sub.js"></script>
                </head>
                <body>
                  Hello World.
                  <button id="changeSubColor">Change Rendering Color</button>
                </body>
                </html>`;
renderingSub.addEventListener('click', () => {
  console.log('hh');
  const fragment = document.createDocumentFragment();
  const contextualFragment = document.createRange().createContextualFragment(source);
  fragment.appendChild(contextualFragment);
  mainContainer.appendChild(fragment);
})