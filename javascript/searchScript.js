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
    "specialty": "Eating Disorders"
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

const callButton = document.querySelector('.callBtn')
const scheduleButton = document.querySelector('.scheduleBtn')
const bioButton = document.querySelector('bioBtn')


callButton.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('calling')
})

scheduleButton.addEventListener('click', (e)=>{
    e.preventDefault()
})

bioButton.addEventListener('click', (e)=>{
    e.preventDefault()
})