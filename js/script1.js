'use strict'
const tokens = localStorage.getItem("token")

const sorahscontainer= document.querySelector(".sorahs-grid")
const userprofile=document.querySelector(".profile-tt")
const numbersurah = localStorage.getItem("numbersurah")
// fetch('https://apitest.khouaja.live/v1/quran')
// .then(response=>response.json())
// .then(result=> { console.log(result)
//     for (let i = 1; i < 115; i++) {
// sorahscontainer.innerHTML += `
// <div class="sorah">
//                     <div class="english">
//                         <div class="sorah-number">${i}</div>
//                         <h3>al-fatiha</h3>
//                         <p>the opening</p>
//                     </div>
//                     <div class="arabic">
//                         <div class="sorah-add"><img src="/photos/heart.png" alt="" width="17"></div>
//                         <h3>سُورَةُ ٱلْفَاتِحَةِ</h3>
//                         <p>7 ayahs</p>
//                     </div>
//                 </div>
// `}
// })
// .catch(error=>console.log(error));
//localStorage.setItem("name",JSON.stringify(["ali",5,5]))

//console.log(JSON.parse(localStorage.getItem()))

//// display sorahs
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${tokens}`);
myHeaders.append("Content-Type", "application/json");




var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  
  redirect: 'follow'
};

fetch("https://apitest.khouaja.live/v1/quran", requestOptions)
  .then(response => response.json())
  .then(resultsorah => {console.log(resultsorah.data)
    for (let i = 0; i < 114; i++) {
         sorahscontainer.innerHTML += `
         <div class="sorah"  >
                            <div class="english">
                                 <div class="sorah-number" >${i+1}</div>
                                <h3>${resultsorah.data[i].englishName}</h3>
                               <p>${resultsorah.data[i].englishNameTranslation}</p>
                       </div>
                       <div class="hiddenbtn" id="${i+1}" ></div>
                            <div class="arabic">
                               <div class="sorah-add" ><img src="/photos/heart.png" alt="" width="17" id="${i+1}"></div>
                               <h3>${resultsorah.data[i].name}</h3>
                               <p>${resultsorah.data[i].ayahsNumber
                               } yahs</p>
                            </div>
                        </div>
                        ` 
                        
  ; 
;}})
  .catch(error => console.log('error', error));

  /////user profile
  var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${tokens}`);
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWMwYTNhNGIxODM5MDdhZjkyMThmNiIsImlhdCI6MTY3MjMxMzI5MywiZXhwIjoxNjgwMDg5MjkzfQ.a_6pl5rR5CB2jpY0jjztxckpPnHm3mDCTXJYj_whW3s");



var requestOptions = {
  method: 'GET',
  headers: myHeaders,
 
  redirect: 'follow'
};

fetch("https://apitest.khouaja.live/v1/user/me", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result.data)
      userprofile.innerHTML += `<h1>${result.data.user.name}</h1>
      <h3>${result.data.user.email}</h3>`
})
  .catch(error => console.log('error', error));
  ///////
  ///
  ////
  ////////
  //////
  /////
  setTimeout(() => {
    const sorah = document.querySelectorAll(".hiddenbtn")
    console.log({sorah})
    sorah.forEach((e) => {
      e.addEventListener('click', (sorah) => {
        
        console.log(sorah.target.getAttribute('id'));
        
        window.location.href="/html/readingpage.html"
        localStorage.setItem("numbersurah",sorah.target.getAttribute('id'))
      });
    });
  }, 200);
  //////////
  /////////
  ////////
  ///////
  ////// bookmarks ///////
  fetch(`https://apitest.khouaja.live/v1/quran?surah=${numbersurah} `, requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
    console.log(result.data._id)
    for (let i = 0; i < 114; i++) {
      localStorage.setItem(`surahid${i}`,result.data._id)
      
    }
  })
  .catch(error => console.log('error', error));


  
 ////////////
 ///////////////
 /////////////////

 //////////book mark surah////////
 var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${tokens}`);
myHeaders.append("Content-Type", "application/json");
for (let i = 0; i < 114; i++) {
  
  var raw = JSON.stringify({
    "surahId": `${localStorage.getItem(`surahid${i}`)}`
  });
    
  }


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body:raw,
  redirect: 'follow'
};
setTimeout(() => {
  const sorahaddd = document.querySelectorAll(".sorah-add")
  console.log({sorahaddd})
  sorahaddd.forEach((a) => {
    a.addEventListener('click', (sorahaddd) => {
      fetch("https://apitest.khouaja.live/v1/quran/bookmark", requestOptions)
.then(response => response.json())
.then(result =>{ console.log(result)
console.log(result)
})
.catch(error => console.log('error', error));
     
      console.log(sorahaddd.target.getAttribute('id'));
    });
  });
}, 200);

  
  

 //console.log(sorahaddd.target.getAttribute('id'));
  //window.location.href="/html/readingpage.html"
  //localStorage.setItem("addsurah",sorahaddd.target.getAttribute('id'))