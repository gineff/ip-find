const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);


function getData() {
  fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_xHMUodR2e7TIpNqUTjDnwgeFxznsh&ipAddress=${ipInput.value}`)
  .then(res=> res.json())
  .then(console.log)
}

function handleKey(e) {
  if (e.key === 'Enter') {
      getData();
  }
}
