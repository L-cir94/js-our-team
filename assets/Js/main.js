/*Consegna
 Utilizzando i dati forniti, creare un array di oggetti per rappresentare 
i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
- nome
- ruolo
- foto
*/
//Creare l’array di oggetti con le informazioni fornite.
const teams = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    },
]

const infoEl = document.querySelector(".row > .info")
generateCard()



//funzioni che posso utilizzare
function generateCard(){
    
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
    for (let i = 0; i < teams.length; i++) {
        const membro = teams[i];
        console.log(membro)
        infoEl.innerHTML +=
            /* Stampare le stesse informazioni su DOM sottoforma di stringhe
           `
           Nome:  ${membro.nome} <br>
           Ruolo: ${membro.ruolo} <br>
           Foto:  ${membro.foto} <br>
           <span></span><br>
           ` */
    
    
            //Organizzare i singoli membri in html
            `
        <div class="card text-center">
            <div class="card-header text-center">
                <h1>
                    ${membro.nome}
                </h1>
            </div>
            <div class="card-body mt-2">
                <img src="./assets/img/${membro.foto}" alt="" class="img-fluid rounded-5">
                <p class="text-center mt-5">
                    ${membro.ruolo}
                </p>
            </div>
        </div> 
    `
    }
    
}