'use strict'
const tokens = localStorage.getItem("token")
const ayat = document.querySelector(".quran-ayat")
const surahlist= document.querySelector(".list")
const surahsearch= document.querySelector(".search-ayat")
const numbersurah = localStorage.getItem("numbersurah")

///// display sorah
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${tokens}`);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWMwYTNhNGIxODM5MDdhZjkyMThmNiIsImlhdCI6MTY3MjMxMzI5MywiZXhwIjoxNjgwMDg5MjkzfQ.a_6pl5rR5CB2jpY0jjztxckpPnHm3mDCTXJYj_whW3s");
  
 
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`https://apitest.khouaja.live/v1/quran?surah=${numbersurah}`, requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result.data)
    for (let i =0; i < result.data.ayahsNumber
        ; i++){
         
          let ayats = result.data.ayahs[i].text;
          ayat.innerHTML += `<span> ${ayats} (${result.data.ayahs[i].numberInSurah})</span>`
    
          const bismilah = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
          if (ayats.includes(bismilah)) {
             ayats.replace("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", "")
            console.log(bismilah)
          }}
    })
    .catch(error => console.log('error', error));
//////
//////
///////
//////
///
    ///search surah
    
        
   
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
  .then(result => {console.log(result.data)
    for (let i = 0; i < 114; i++) {
         surahlist.innerHTML += `
        <span class="item" id="${i+1}">${result.data[i].englishName}</span>
         `}
  })
  .catch(error => console.log('error', error));

  //////////////
  /////////////
  ////////////
  ///////////
  setTimeout(() => {
    const sorahlist = document.querySelectorAll(".item")
    console.log({sorahlist})
    sorahlist.forEach((e) => {
      e.addEventListener('click', (sorahlist) => {
        
        console.log(sorahlist.target.getAttribute('id'));
        
        window.location.href="/html/readingpage.html"
        localStorage.setItem("numbersurah",sorahlist.target.getAttribute('id'))
      });
    });
  }, 200);
  /////////////
  ////////////
  ///////////
  /////////
  //// audio ////
  const audioplayer= document.querySelector(".listen")
const ap = document.querySelector(".player-container")
audioplayer.addEventListener('click', ()=>{
  ap.classList.toggle("hidden")
  console.log(ap)
  })
//////
///////
var surahplayed = new Audio;
var muted = false;
var vol = 1;
const currentTime=
surahplayed.type = 'audio/mpeg';
// audio url
surahplayed.src = ` https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${numbersurah}.mp3`; 

function skip(time) {
   if (time == 'back') {
    surahplayed.currentTime = (surahplayed.currentTime - 5);
   } else if (time == 'fwd') {
    surahplayed.currentTime = (surahplayed.currentTime + 5);
   }
}
//pause button
function playpause() {
   if (!surahplayed.paused) {
    surahplayed.pause();
   } else {
    surahplayed.play();
   }
}
//stop button
function stop() {
  surahplayed.pause();
  surahplayed.currentTime = 0;
   document.getElementById('seek').value = 0;
}

function setPos(pos) {
  surahplayed.currentTime = pos;
}
//sound mute button
function mute() {
  if (muted) {
    surahplayed.volume = vol;
    muted = false;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
  } else {
    surahplayed.volume = 0;
    muted = true;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-off"></i>';
  }
}

function setVolume(volume) {
  surahplayed.volume = volume;
   vol = volume;
}

surahplayed.addEventListener('timeupdate',function() {
  let curtime = parseInt(surahplayed.currentTime,10);
   document.getElementById('seek').max = surahplayed.duration;
   document.getElementById('seek').value = curtime;
})