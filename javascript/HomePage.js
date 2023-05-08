let therapists = [  {
  "id": 1,
  "name": "Dr. Jane Smith",
  "specialty": "Depression"
},
{
  "id": 2,
  "name": "Dr. Michael Lee",
  "specialty": "Anxiety"
},
{
  "id": 3,
  "name": "Dr. Karen Johnson",
  "specialty": "Relationship Issues"
},
{
  "id": 4,
  "name": "Dr. Sarah Patel",
  "specialty": "Social Anxiety"
},
{
  "id": 5,
  "name": "Dr. Robert Garcia",
  "specialty": "Addiction"
},
{
  "id": 6,
  "name": "Dr. Amanda Jones",
  "specialty": "Trauma"
},
{
  "id": 7,
  "name": "Dr. Eric Kim",
  "specialty": "Obsessive-Compulsive Disorder (OCD)"
},
{
  "id": 8,
  "name": "Dr. Samantha Chen",
  "specialty": "Attention Deficit Hyperactivity Disorder (ADHD)"
},
{
  "id": 9,
  "name": "Dr. William Davis",
  "specialty": "Bipolar Disorder"
},
{
  "id": 10,
  "name": "Dr. Laura Robinson",
  "specialty": "Child and Adolescent Therapy"
},
{
  "id": 11,
  "name": "Dr. Daniel Hernandez",
  "specialty": "Post-Traumatic Stress Disorder (PTSD)"
},
{
  "id": 12,
  "name": "Dr. Rachel Nguyen",
  "specialty": "Grief and Loss"
},
{
  "id": 13,
  "name": "Dr. John Kim",
  "specialty": "Anger Management"
},
{
  "id": 14,
  "name": "Dr. Elizabeth Martinez",
  "specialty": "Sleep Disorders"
},
{
  "id": 15,
  "name": "Dr. Kevin Lee",
  "specialty": "Phobias"
},
{
  "id": 16,
  "name": "Dr. Anna Brown",
  "specialty": "Borderline Personality Disorder (BPD)"
},
{
  "id": 17,
  "name": "Dr. Timothy Green",
  "specialty": "Gender Identity"
},
{
  "id": 18,
  "name": "Dr. Maria Rodriguez",
  "specialty": "Self-Esteem and Confidence"
},
{
  "id": 19,
  "name": "Dr. Christopher Chen",
  "specialty": "Couples Therapy"
},
{
  "id": 20,
  "name": "Dr. Emily Taylor",
  "specialty": "Career Counseling"
},
{
  "id": 21,
  "name": "Dr. Matthew Adams",
  "specialty": "Social Anxiety"
},
{
  "id": 22,
  "name": "Dr. Jasmine Kim",
  "specialty": "Body Image Issues"
},
{
  "id": 23,
  "name": "Dr. Stephen Park",
  "specialty": "Panic Attacks"
}
]


const hamburger = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');
const searchArea = document.querySelector('.form');
const midContainer = document.querySelector('#middle-container');


const startArea = document.querySelector('.startBtns');
const existUserBtn = document.querySelector('#UserBtn');
const getHelpBtn = document.querySelector('#HelpBtn');
const searchBtn = document.querySelector('.searchBtn');
const search = document.querySelector('#search-text')


hamburger.addEventListener('click', function() {
  dropdown.classList.toggle('active');
});

getHelpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Help button pressed')
  startArea.classList.toggle('hide')
  searchArea.classList.toggle('hide')
});

existUserBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Existing user button pressed');
})

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  midContainer.innerHTML = '';
  let specialtySearch = search.value;
  console.log(specialtySearch);
  createTherapistList(therapists, specialtySearch)
});


// Function for creating profile cells for therapist search results.
  let createTherapistList = (arr, specialty) => {
    arr.forEach(therapist => {
      if(specialty?specialty.toLowerCase() === therapist.specialty.toLowerCase() : true) {
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
      }
    });
  }
