console.log("This is index.js file of cv screencer project");

const applicants = [
    {
        name: 'Mudassir',
        age : 22,
        city: 'Lahore',
        language: 'C-sharp',
        framework: 'MVC-5',
        url: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Hashim',
        age : 21,
        city: 'Sialkot',
        language: 'JavaScript',
        framework: 'Angular Js',
        url: 'https://randomuser.me/api/portraits/men/66.jpg'
    },
    {
        name: 'Asma',
        age : 25,
        city: 'Karachi',
        language: 'JavaScript',
        framework: 'React Js',
        url: 'https://randomuser.me/api/portraits/women/52.jpg'
    },
    {
        name: 'Alina',
        age : 23,
        city: 'Karachi',
        language: 'C-sharp',
        framework: 'Xamarin',
        url: 'https://randomuser.me/api/portraits/women/95.jpg'
    },
    {
        name: 'Ali',
        age : 26,
        city: 'Lahore',
        language: 'JavaScript',
        framework: 'Vue Js',
        url: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
        name: 'Ayub',
        age : 21,
        city: 'Hyderabad',
        language: 'JavaScript',
        framework: 'Angular Js',
        url: 'https://randomuser.me/api/portraits/men/35.jpg'
    },
    {
        name: 'Soumya',
        age : 28,
        city: 'Rawalpindi',
        language: 'C-sharp',
        framework: 'ASP.net Core',
        url: 'https://randomuser.me/api/portraits/women/51.jpg'
    },
    {
        name: 'Amna',
        age : 22,
        city: 'Islamabad',
        language: 'Python',
        framework: 'Django',
        url: 'https://randomuser.me/api/portraits/women/9.jpg'
    },
    {
        name: 'Sunny',
        age : 27,
        city: 'Peshawar',
        language: 'Python',
        framework: 'Flask',
        url: 'https://randomuser.me/api/portraits/men/21.jpg'
    },
    {
        name: 'Usman',
        age : 25,
        city: 'Quetta',
        language: 'JavaScript',
        framework: 'React Js',
        url: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
];


// CV iterator 

function cvIterator(profiles) {
let nextIndex = 0;
return {
    next : function() {
        return (nextIndex < profiles.length) ?
            {value: profiles[nextIndex++], done: false} :
            {done: true};
    }
};
}

let candidate = cvIterator(applicants);
nextCV();

let next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
    let currentCandidate = candidate.next().value;
    // console.log(currentCandidate);
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src="${currentCandidate.url}" alt="profile-image">`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">primarily use ${currentCandidate.language} language</li>
    <li class="list-group-item">work in ${currentCandidate.framework} framework</li>
  </ul>`;
    } else {
        alert("End of cadidate applications");
        window.location.reload();
    }
}