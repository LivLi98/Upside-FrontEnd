const hamburger = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');
const searchArea = document.querySelector('.form');
const midContainer = document.querySelector('#middle-container');


const HBtn = document.getElementById('homeBtn')
const startArea = document.querySelector('.startBtns');
const existUserBtn = document.querySelector('#UserBtn');
const getHelpBtn = document.querySelector('#HelpBtn');
const searchBtn = document.querySelector('.searchBtn');
const search = document.querySelector('#search-text');

let url = `https://upside-backend.onrender.com/`;

let searchFetch = async (searchString) => {
  const url = `https://cors-proxy4.p.rapidapi.com/?url=https%3A%2F%2Fupside-backend.onrender.com%2Ftherapists%2Fsearch%2F${searchString}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eb9c01dd2amsh29cc615fc4e14e2p163bddjsnd09fbf5da34e',
      'X-RapidAPI-Host': 'cors-proxy4.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    createTherapistList(result);
  } catch (error) {
    console.error(error);
  }
}


HBtn.addEventListener('click', (w) => {
    w.preventDefault();
    window.open('/', '_top');
    console.log('Button Pushed');
});

existUserBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('/HTML/SignIn.html','_top')
    console.log('Existing user button pressed');
});

getHelpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Help button pressed')
  startArea.classList.toggle('hide')
  searchArea.classList.toggle('hide')
});

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  midContainer.innerHTML = '';
  let specialtySearch = encodeURIComponent(search.value);
  searchFetch(specialtySearch); 
  // createTherapistList(, specialtySearch)
});


// Function for creating profile cells for therapist search results.
  let createTherapistList = (arr) => {
    arr.forEach(therapist => {
        let cell = document.createElement('article');
        cell.setAttribute('class', 'therapistCell');
        midContainer.append(cell);

        let cardInfo = document.createElement('header');
        cardInfo.setAttribute('class', 'cardInfo');
        cell.append(cardInfo);

        if (therapist.profilePic) {
          let profilePic = document.createElement('img')
          profilePic.setAttribute('class', 'therapistPic')
          profilePic.src = `${therapist.profilePic}`;
          cardInfo.append(profilePic);
        } 

        let name = document.createElement('h');
        name.setAttribute('class', 'therapistName');
        name.innerText = therapist.name;
        cardInfo.append(name);

        let specializations = document.createElement('p');
        specializations.setAttribute('class', 'therapistSpecs');
        specializations.innerText = therapist.specialty;
        cardInfo.append(specializations);

        let optionsBtns = document.createElement('div')
        optionsBtns.setAttribute('class', 'options')
        cell.append(optionsBtns);

          let callNowBtn = document.createElement('button');
          callNowBtn.addEventListener('click', (e) => {
            //Here we need some code to bring us to the active call page.
          })
          callNowBtn.setAttribute('class', 'callBtn');
          callNowBtn.innerText = 'Call now';
          optionsBtns.append(callNowBtn);
          
          let aptBtn = document.createElement('button');
          aptBtn.addEventListener('click', (e) => {
            //Here we need some code to take us to a scheduling page.
          })
          aptBtn.setAttribute('class', 'aptBtn');
          aptBtn.innerText = 'Schedule Apt.'
          optionsBtns.append(aptBtn);

          let profileBtn = document.createElement('button');
          profileBtn.addEventListener('click', (e) => {
            //Here we need some code to bring up a full profile
          });
          profileBtn.innerText = 'View Profile'
          profileBtn.setAttribute('class', 'optionBtn')
          optionsBtns.append(profileBtn);
  
    });
  }
