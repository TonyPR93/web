document.addEventListener('DOMContentLoaded', function() {
    console.log('ok');

    document.getElementById('tailleuser').value='';
    document.getElementById('poidsuser').value='';

    //btn submit
    let btnsub = document.getElementById('submit');
    btnsub.addEventListener('click', imc);

    //btn reset
    let btnreset = document.getElementById('reset');
    btnreset.addEventListener('click', reset);

    //création d'element dom
    //affichage du résultat
    let resultat = document.getElementById('resultat');
    let affichage_resultat = document.createElement('div');
    affichage_resultat.setAttribute('id','afres');

    //affichage de l'explication
    let affichage_explication = document.createElement('div');
    affichage_explication.setAttribute('id', 'afexp');

    //quand on clique sur "calculer"
    function imc(){
        let poids = document.getElementById('poidsuser').value;
        let taille= document.getElementById('tailleuser').value;
        let res_imc= ((poids / (taille * taille))*10000).toFixed(2); //calcul IMC a base des inputes a 2 décimales
        console.log(poids, taille, res_imc);
        affichage_resultat.innerHTML=("Votre IMC est de : "+res_imc+" kg/m²"); //affectation du résultat
        resultat.appendChild(affichage_resultat);   //appendchild
        affichage_explication.innerHTML=''; // Permet d'effacer le contenue pour ensuite le réafficher adecuatement
        if (res_imc<=18.4){
            affichage_explication.innerHTML='Vous êtes maigre';
            resultat.appendChild(affichage_explication);
        }
        else if (res_imc>=18.5 && res_imc<=24.99){
            affichage_explication.innerHTML='Vous êtes normale';
            resultat.appendChild(affichage_explication); 
        }
        else if (res_imc>=25 && res_imc<=29.99){
            affichage_explication.innerHTML='Vous êtes en surpoids';
            resultat.appendChild(affichage_explication); 
        }
        else if (res_imc>=30 && res_imc<=34.99){
            affichage_explication.innerHTML='Vous êtes en obésité modérée';
            resultat.appendChild(affichage_explication); 
        }
        else if (res_imc>=35 && res_imc<=39.99){
            affichage_explication.innerHTML='Vous êtes en obésité sévère';
            resultat.appendChild(affichage_explication); 
        }
        else if (res_imc>=40){
            affichage_explication.innerHTML='Vous êtes en obésité morbide';
            resultat.appendChild(affichage_explication); 
        }
        //interpretation graphique
        let interpretation = document.getElementById('interpretation');
        if (interpretation.childElementCount !== 0){ //????
            console.log('nym');
        }else{
            // let interpretation = document.getElementById('interpretation');
            for (let index = 0; index < 60; index++) { //création de 60 div, pour afficher l'imc de 1 a 60
                let divimc = document.createElement('div');
                divimc.setAttribute('id',index);
                divimc.setAttribute('class','divimcs');
                divimc.innerHTML=index+1;
                interpretation.appendChild(divimc); //déclaré en ligne 59
            }
        }
        indication();
        graphique();
    }

    //quand on clique sur reset
    function reset(){
        let point_rouger= document.getElementById('pr');
        document.getElementById('tailleuser').value='';
        document.getElementById('poidsuser').value='';
        while (resultat.lastChild){
            resultat.removeChild(resultat.lastChild);
        }
        while(interpretation.lastChild){
            interpretation.removeChild(interpretation.lastChild);
        }
        point_rouger.style.bottom = -3.5 + "px";
        point_rouger.style.left= -3 + "px";
    }


    function indication(){
        let poidsi = document.getElementById('poidsuser').value;
        let taillei= document.getElementById('tailleuser').value;
        let nimc= Math.trunc(((poidsi / (taillei * taillei))*10000)); //recalcul imc avec troncage
        console.log(poidsi,taillei,nimc);
        for (let i = 0; i < 60; i++) {
            let placement = document.getElementById(i); 
            if(placement.getAttribute('id')==nimc-1){ //si l'index = IMC alors...
                placement.style.color = 'red';
                placement.style.fontSize = '20px';
                placement.style.padding ='21.6px 0px';
            }else{ //sinon... Permet de le faire en continue
                placement.style.color = 'black';
                placement.style.fontSize ='15px';
                placement.style.padding ='25px 0px';
            }
            console.log(nimc);
        }
    }

    function graphique(){
        let point_rouge = document.getElementById('pr');
        let poidsg = (document.getElementById('poidsuser').value)-30;
        let tailleg= (document.getElementById('tailleuser').value)-140;
        console.log(tailleg, poidsg)
        if (tailleg<0){
            tailleg=0;
        }else if(tailleg>70){
            tailleg=70;
        }
        if (poidsg<0){
            poidsg=0;
        }else if (poidsg>170){
            poidsg=170;
        }
        point_rouge.style.bottom = (((516/170)*poidsg)-2.5) + "px";
        point_rouge.style.left= (((384/70)*tailleg)-2.8) + "px";
        // let nimc= Math.trunc(((poidsi / (taillei * taillei))*10000));        
    }

});