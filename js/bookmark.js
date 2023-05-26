'use strict'
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWMwYTNhNGIxODM5MDdhZjkyMThmNiIsImlhdCI6MTY3MjI1NzM2OSwiZXhwIjoxNjgwMDMzMzY5fQ.y67W-IrJIPMBn-QFdnngT5C_FykKiTTHYBLgLm7KX1A");
myHeaders.append("Content-Type", "application/json");



var requestOptions = {
  method: 'GET',
  headers: myHeaders,

  redirect: 'follow'
};

fetch("https://apitest.khouaja.live/v1/quran/bookmark", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)

  })
  .catch(error => console.log('error', error));