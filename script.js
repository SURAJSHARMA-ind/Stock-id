const userDB = [
    {
      name:" VISHAL SINGH",
      dob:"DOB = 01/01/2002",
      mobileno:"MOBILE NO = 1234567890",
      panno:"PAN NO = 1234567890",
      email:"EMAIL = example@gmail.com",

    },
    {
        name:"NAME = Krishna",
        dob:"01/01/2002",
        mobileno:"1234567890",
        panno:"1234567890",
        email:"example@gmail.com",
        
    },
    {
      name:"NAME = Neeta",
      dob:"01/01/2002",
      mobileno:"1234567890",
      panno:"1234567890",
      email:"example@gmail.com",

    },
    {
      name:"NAME = Vinod",
      dob:"01/01/2002",
      mobileno:"1234567890",
      panno:"1234567890",
      email:"example@gmail.com",

    },
    {
      name:"NAME = VISHAL SINGH",
      dob:"01/01/2002",
      mobileno:"1234567890",
      panno:"1234567890",
      email:"example@gmail.com",

    },
    {
      name:"NAME = VISHAL SINGH",
      mobileno:"1234567890",
      panno:"1234567890",
      email:"example@gmail.com",

    }
]

const username = document.querySelector('#username');
const dob = document.querySelector('#dob');
const pan = document.querySelector('#pan');
const mobile = document.querySelector('#mobile');
const email = document.querySelector('#email');

const loadData = ()=>{
username.innerText = userDB[0].name;
dob.innerText = userDB[0].dob;
pan.innerText = userDB[0].panno;
mobile.innerText = userDB[0].mobileno;
email.innerText = userDB[0].email;
}


loadData();


