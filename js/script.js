const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: './img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: './img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: './img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: './img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: './img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: './img/barbara-ramos-graphic-designer.jpg'
    }
];
const teamElement = document.querySelector('.team-container')

for(let i = 0; i < 6; i++){
    console.log(ourTeam[i].name,)
    console.log(ourTeam[i].role)
    console.log(ourTeam[i].img)
}

for(let i = 0; i < ourTeam.length; i++){
    teamElement.innerHTML +=
    `<div class="team-card">
        <img src="${ourTeam[i].img}">
        <p class="name-class">${ourTeam[i].name}</p>
        <p class="role-class">${ourTeam[i].role}</p>
    </div>`
}

