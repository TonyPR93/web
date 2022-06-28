document.addEventListener('DOMContentLoaded', function (){

    //déclaration boutons
    let starting = document.getElementById('start')
    starting.addEventListener('click', start);
    let stoping = document.getElementById('stop').addEventListener('click', stop);
    let reseting = document.getElementById('reset').addEventListener('click', reset);
    let ajout = document.getElementById('ajouter').addEventListener('click', ajouter_r);
    let spans = document.getElementsByTagName('span');
    let divres = document.getElementById('resultat');
    let ctour = document.getElementById('chronotour');
    let blap = document.getElementById('bestlap');
    let display_bestlap = document.createElement('div');

    //var utilisée
    let interv;
    let h = 0;
    let m = 0;
    let s = 0;
    let ms =0;
    let indice= 0;
    
    
    function start(){
        console.log('lol')
        interv = setInterval(update_c, 1);
        starting.disabled=true;
    }

    function update_c(){
        ms=ms+1;
        if(ms==10){
            ms=0;
            s=s+1;
        }
        if(s==60){
            s=0;
            m=m+1;
        }
        if(m==60){
            m=0;
            h=h+1;
        }
            // console.log(h,m,s,ms)
        spans[0].innerHTML=h;
        spans[1].innerHTML=m;
        spans[2].innerHTML=s;
        spans[3].innerHTML=ms;
    }

    function stop(){
        clearInterval(interv);
        starting.disabled=false;
    }

    function reset(){
        starting.disabled=false;
        clearInterval(interv);
        indice=0;
        h=0;
        m=0;
        s=0;
        ms=0;
        spans[0].innerHTML=0;
        spans[1].innerHTML=0;
        spans[2].innerHTML=0;
        spans[3].innerHTML=0;
        while (divres.lastChild){
            divres.removeChild(divres.lastChild);
            console.log('pas remove');
        }
        while (ctour.lastChild){
            ctour.removeChild(ctour.lastChild);
            console.log('pas remove');
        }
        blap.removeChild(blap.lastChild);   
    }

    function ajouter_r(){
        let tr = document.createElement('div');
        let trtime = document.createElement('div');
        tr.setAttribute('id', 't' + indice);
        trtime.setAttribute('id', 'ttime' + indice);
        tr.innerHTML= 'Tour ' + (indice+1) + ' : <input type="hidden" value="'+h+'" id="ht'+indice+'">' + h + '<span> heures </span><input type="hidden" value="'+m+'" id="mt'+indice+'">' + m + '<span> minutes </span><input type="hidden" value="'+s+'" id="st'+indice+'">' + s + '<span> secondes </span><input type="hidden" value="'+ms+'" id="mst'+indice+'">' + ms + '<span> ms </span>';
        divres.appendChild(tr);
        trtime.innerHTML= 'Effectué en ' + ajoutlap(indice);
        ctour.appendChild(trtime);
        let bestlaptime =bestlap(indice);
        display_bestlap.innerHTML = 'Meilleur temps au tour ' + bestlaptime[4] + ' en ' + bestlaptime[0] + ' h ' + bestlaptime[1]+' m '+bestlaptime[2]+' s '+bestlaptime[3]+' ms ';
        blap.appendChild(display_bestlap);
        indice = indice + 1;
        afficher_mr(bestlaptime[4]);
    }

    function ajoutlap(indice){
        if (indice==0){
            return ('<input type="hidden" value="'+h+'" id="htl'+indice+'">' + h + '<span> heures </span><input type="hidden" value="'+m+'" id="mtl'+indice+'">' + m + '<span> minutes </span><input type="hidden" value="'+s+'" id="stl'+indice+'">' + s + '<span> secondes </span><input type="hidden" value="'+ms+'" id="mstl'+indice+'">' + ms + '<span> ms </span>');
        } else{
            //ms
            let mstra = +(document.getElementById("mst"+indice).value);
            let mstrp = +(document.getElementById('mst'+(indice-1)).value);

            //s
            let stra = +(document.getElementById("st"+indice).value);
            let strp = +(document.getElementById('st'+(indice-1)).value);

            //m
            let mtra = +(document.getElementById("mt"+indice).value);
            let mtrp = +(document.getElementById('mt'+(indice-1)).value);

            //h
            let htra = +(document.getElementById("ht"+indice).value);
            let htrp = +(document.getElementById('ht'+(indice-1)).value);

            if (mstra<mstrp){
                stra = stra-1;
                mstra = mstra + 10;
            }
            if (stra<strp){
                mtra = mtra -1;
                stra = stra +60;
            }
            if (mtra<mtrp){
                htra=htra-1;
                mtra=mtra+60;
            }
            return ('<input type="hidden" value="'+(htra-htrp)+'" id="htl'+indice+'">'+(htra-htrp)+'<span> h </span><input type="hidden" value="'+(mtra-mtrp)+'" id="mtl'+indice+'">'+(mtra-mtrp)+'<span> m </span><input type="hidden" value="'+(stra-strp)+'" id="stl'+indice+'">'+(stra-strp)+'<span> s </span><input type="hidden" value="'+(mstra-mstrp)+'" id="mstl'+indice+'">'+(mstra-mstrp)+"<span> ms </span>");
        }
    }

    let besttime=Array;
    function bestlap(indice){
        console.log(indice);
        if(indice==0){
            let htl = +document.getElementById('htl0').value;
            let mtl = +document.getElementById('mtl0').value;
            let stl = +document.getElementById('stl0').value;
            let mstl = +document.getElementById('mstl0').value;
            besttime = [ htl, mtl, stl, mstl,1];
            // console.log(besttime,'haha');         
        }

        if(indice>=1){
            for (let i = 0; i < ((ctour.childElementCount)-1); i++) {
                console.log(i,'huh')

                let htla = +(document.getElementById('htl'+indice).value);
                let mtla= +(document.getElementById('mtl'+indice).value);
                let stla= +(document.getElementById('stl'+indice).value);
                let mstla= +(document.getElementById('mstl'+indice).value);

                // console.log((((((besttime[0]*60)+besttime[1])*60)+besttime[2])*10)+besttime[3])
                if (((((((besttime[0]*60)+besttime[1])*60)+besttime[2])*10)+besttime[3]) > ((((((htla*60)+mtla)*60)+stla)*10)+mstla)){
                    besttime=[htla, mtla, stla, mstla, indice+1]
                    console.log(i+'tdc')
                }
                

                // if (htla<=besttime[0]){
                //     if (mtla<=besttime[1]){
                //         if (stla<=besttime[2]){
                //             if(mstla<=besttime[3]){
                //                 besttime = [htla,mtla,stla,mstla,(i+2)];
                //             }
                //         }
                //     }
                // }
            }
        }
        console.log(besttime,'hihi'); 
        return besttime;
    }

    function afficher_mr(id_mr){
        console.log(id_mr,'ok')
        let vc= 0;
        let vc2=0;
        for (let i = 0; i < ((divres.childElementCount)-1); i++) {
            vc = document.getElementById('t'+i);
            vc2= document.getElementById('ttime'+i);
            vc.style.color='black';   
            vc2.style.color='black';       
        }
        let id_tochange = document.getElementById('t'+(id_mr-1));
        id_tochange.style.color='green';

        let id_tochange2 = document.getElementById('ttime'+(id_mr-1));
        id_tochange2.style.color='green';

    }
}, false);