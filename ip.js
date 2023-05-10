fetch("https://api.vvhan.com/api/getIpInfo")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip").textContent = data.ip;
    document.getElementById("prov").textContent = data.info.country+data.info.prov;
    document.getElementById("city").textContent = data.info.city;
  })
  .catch((error) => console.error(error));
fetch("http://ipwho.is")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip").textContent = data.ip;
    document.getElementById("prov").textContent = data.country;
    document.getElementById("city").textContent = data.city;
  })
  .catch((error) => console.error(error));