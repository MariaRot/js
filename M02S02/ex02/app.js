let personForm = document.getElementById('personForm');
let addSkillButton = document.getElementById('addSkill');
let addSkillInput = document.getElementById('addSkillInput');
let person;
class Person {
    skills = [];

    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;

        this.container = document.getElementById('details');
    }

    render() {
        this.clear();

        this.namePara = document.createElement('p');
        this.surnamePara = document.createElement('p');
        this.agePara = document.createElement('p');
        this.skillsList = document.createElement('ul');


        this.namePara.innerText = this.name;
        this.surnamePara.innerText = this.surname;
        this.agePara.innerText = this.age;

        this.skills.forEach( (skill) => {
            let skillLi = document.createElement('li');
            skillLi.innerText = skill;
            this.skillsList.appendChild(skillLi);
        });

        this.container.appendChild(this.namePara);
        this.container.appendChild(this.surnamePara);
        this.container.appendChild(this.agePara);
        this.container.appendChild(this.skillsList);
    }

    clear() {
        this.container.innerHTML = '';
    }

    addSkill(skill) {
        this.skills.push(skill);
    }
}

personForm.addEventListener('submit', (evt) => {
    let inputArray = evt.target.querySelectorAll('input');
    person = new Person(inputArray[0].value,inputArray[1].value,inputArray[2].value);
    person.render();

    evt.preventDefault();
});

addSkillButton.addEventListener('click', () => {
    let skillName = addSkillInput.value;

    if(skillName.trim().length > 0) {
        person.addSkill(skillName);
        person.render();
    }
});