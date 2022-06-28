window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");


    const allchiffre = document.querySelectorAll('.btnc');
    // console.log(allchiffre.length);
    var affichage_c=document.getElementById('affichagenbr');
    var affichage_r=document.getElementById('affichageres');
    var cpt=0;
    test=true;

    for (var i=0; i< (allchiffre.length); i++){
        affichage_c.innerHTML="0";
        let UnChiffre = allchiffre[i];
        UnChiffre.addEventListener("click", function(){
            verification(UnChiffre.innerHTML);
            if (UnChiffre.innerHTML!="C" && UnChiffre.innerHTML!="Enter" && UnChiffre.innerHTML!="()"){
                afficher(UnChiffre.innerHTML);
                test=false;
            }
        });
    }
   

    function verification(symbole){
        if (symbole=="C"){
            affichage_c.innerHTML="0";
            affichage_r.innerHTML="";
            cpt=0;
            test=true;
        }

        else if (symbole=="()"){
            console.log(cpt);
            if (cpt==0 && test==true){
                affichage_c.innerHTML="";
                affichage_c.innerHTML+="(";
                cpt+=1;
            }
            else {
                // console.log(cpt);
                // console.log(cpt%2);
                if(cpt%2==0){
                    affichage_c.innerHTML += "(";
                }
                else{
                    affichage_c.innerHTML += ")"
                }
                cpt+=1;
            }
        }

        else if (symbole=="Enter"){
            affichage_r.innerHTML=eval(affichage_c.innerHTML);
        }
    }

    function afficher(a){
        if(affichage_c.innerHTML=="0"){
            affichage_c.innerHTML = a;
        }else{
            affichage_c.innerHTML += a;
        }
    }

  });