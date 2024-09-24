import { validatIp } from './helpers';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
  if (validatIp(ipInput.value)) {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_xHMUodR2e7TIpNqUTjDnwgeFxznsh&ipAddress=${ipInput.value}`
    )
      .then((res) => res.json())
      .then(setInfo);
  }
}

function handleKey(e) {
  if (e.key === 'Enter') {
    getData();
  }
}

function setInfo(mapData) {
  const { country, region, timezone } = mapData.location;

  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = country + ' ' + region;
  timezoneInfo.innerText = timezone;
  ispInfo.innerText = mapData.isp;
}
