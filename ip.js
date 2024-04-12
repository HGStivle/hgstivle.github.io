document.getElementById('UserAgent').textContent = navigator.userAgent;
fetch("https://api.vvhan.com/api/ipInfo")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip").textContent = data.ip;
    document.getElementById("prov").textContent = data.info.country+data.info.prov;
    document.getElementById("city").textContent = data.info.city;
  })
  .catch((error) => console.error(error));
