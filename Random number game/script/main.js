let vie = 10;
let nb_vie = document.getElementsByClassName('nombrevies');
nb_vie[0].innerHTML = vie + " vies réstantes";

//Déclaration de variable
let i = 0;

//Déclaration selecteurs
let indice = document.getElementById('ploumo');
let result_utilisateur = document.getElementById('resutilisateur');
let rejoue = document.getElementById('rejouer');


//Numéro aléatoire
let random_number = Math.floor(Math.random() * 100);
// let teste = document.getElementById('test');
// teste.innerHTML=random_number;

let soumission = document.getElementById('valider');
soumission.addEventListener('click',verifier);


function verifier(){
    let user_v = document.getElementById('user_val').value;
    console.log(user_v);
    if (vie>1){
        if(user_v != random_number){
            //retrait d'un point de vie
            vie --;

            //analyse du chiffre entré
            if(user_v<random_number){
                indice.innerHTML = "Chiffre trop petit";
            }
            else{
                indice.innerHTML = "Chiffre trop grand";
            }

            //Orthographe de vie(s)
            if (vie<=1){
                nb_vie[0].innerHTML = vie + " vie réstante";
            }
            else{
                nb_vie[0].innerHTML = vie + " vies réstantes";
            }

            //affichage du resultat de l'utilisateur
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(user_v));
            result_utilisateur.appendChild(li);
        }
        else{
            indice.innerHTML = "Trouvé";
            //ajout du résultat
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(user_v));
            result_utilisateur.appendChild(li);
            soumission.disabled = true;

            //ajout du btn rejouer
            let btn = document.createElement('button');
            btn.innerText="Rejouer"; 
            btn.setAttribute('id','again');
            rejoue.append(btn);

            //Ajout de 'click' sur btn
            let btnclick = document.getElementById('again');
            btnclick.addEventListener('click', rej);
        }
    }else{
        indice.innerHTML = "Perdu, la réponsé était " + random_number;
        soumission.disabled = true;

        nb_vie[0].innerHTML = "0 vie réstante";

        //affichage du resultat de l'utilisateur
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(user_v));
        result_utilisateur.appendChild(li);

        //ajout du btn rejouer
        let btn = document.createElement('button');
        btn.innerText="Rejouer"; 
        btn.setAttribute('id','again');
        rejoue.append(btn);

        //Ajout de 'click' sur btn
        let btnclick = document.getElementById('again');
        btnclick.addEventListener('click', rej);
    }
        
}

function rej(){
    soumission.disabled = false;
    random_number = Math.floor(Math.random() * 100);
    while (result_utilisateur.firstChild){
        result_utilisateur.removeChild(result_utilisateur.firstChild);
    }
    rejoue.innerHTML="";
    indice.innerHTML="";
    // teste.innerHTML=random_number;
    vie = 10;
    nb_vie[0].innerHTML = vie + " vies réstantes";
}