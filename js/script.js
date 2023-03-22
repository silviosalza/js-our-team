
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.


const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "./img/wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "./img/angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "./img/walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "./img/angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "./img/scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "./img/barbara-ramos-graphic-designer.jpg",
    }
]

console.log(team);

const cardRow = document.querySelector(".row")

let cards = ""
for (let i = 0; i < team.length; i++){

    const curMember = team[i];
    cards += `
    <div class="col">
        <div class="card">
            <div class="card-body">
                <img src="${curMember.foto}" alt="">
                <h5 class="card-title">${curMember.nome}</h5>
                <h6 class="card-subtitle">${curMember.ruolo}</h6>
            </div>
        </div>
    </div>
    `
}

cardRow.innerHTML = cards