//DAY 3 Task

//1.For the given json iterate over all for loops (for, for in, for of, forEach)

var books = [
   {
       title: "Lord of the Rings",
       year: 1994,
       pages: 3000
   },
   {
       title: "1984",
       year: 1984,
       pages: 2000
   },
   {
       title: "Art of war",
       year: 2000,
       pages: 5000
   }
]

// for method

for (var i=0; i < books.length; i++) {
    console.log(books[i]);
}

// for in method

for (let i in books) {
    console.log(books[i]);
 }

//2.Create you own resume data in JSON format

let myResume={
    "basics": {
      "name": "MOHAMED SALMAN FARIS S",
      "email": "md.salmanfaris03@gamil.com",
      "phone": 8438270183,
      "degree": "B.E",
      "location": {
        "address": "31/A, kamarjar street",
        "postalCode": 609110,
        "city": "Sirkazhi",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/mohamed-salman-faris?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FITEuo%2BLQK2a765JocPbYw%3D%3D",
          "github":"https://github.com/SalluuuBhai"
        }
      ]
    },
    
    "education": [
      {
        "institution": "Annamalai University",
        "department": "Electrical and Electronics Engineering",
        "studyType": "fulltime",
        "batch start year": 2017,
        "batch end year": 2020,
        
      },
      {
        "institution": "Aries Polytechnic College",
        "department": "Electrical and Electronics Engineering",
        "studyType": "fulltime",
        "batch start year": 2011,
        "batch end year": 2014,
        
      }
    ],
    "skills": [
      {
        "name": "html","css","bootstrap","javascript",
        "level": "beginer",
        "project": "https://offerads.in/"
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
   
  }
  console.log(myResume);