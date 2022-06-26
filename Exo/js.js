document.addEventListener('DOMContentLoaded', function (){

    //for the carousel
    // let slidep = document.getElementById('sliderpage');
    let contentslide = document.getElementsByClassName('txt');
    var el = document.querySelectorAll(".navbar");

    //for the targeting on 3rd page
    let sliderp_t=document.getElementsByClassName('target-slider');
    let explain_t=document.getElementById('container_exp');
    /*let navi_t=document.querySelectorAll(".navbar");
    let txt_t = document.getElementsByClassName('txt');*/

    for (let index = 1; index < contentslide.length; index++) {
        contentslide[index].style.transform = 'translateX(80%)';
    }

    //console.log(contentslide)
    for (let i = 0; i < (el.length); i++) {
        el[i].addEventListener("click", function(){
            console.log("You clicked on the element " + i);
            for (let x = 0; x < el.length; x++) {
                if (i<x){
                    contentslide[x].style.transform = 'translateX(80%)';
                    console.log("The element "+ x +" is on the right");
                }
                else if (i>x){
                    contentslide[x].style.transform = 'translateX(-80%)';
                    console.log("The element "+ x +" is on the left");
                }
                contentslide[i].style.transform = 'translateX(0%)';
            }
            //console.log(ind,i)
            //ind = i;
            for (let j = 0; j < el.length; j++) {
                contentslide[j].classList.remove("active")

            }
            contentslide[i].classList.add("active");
        });
    }



    //Targeting part
    for (let tgt = 0; tgt < sliderp_t.length; tgt++) {
        sliderp_t[tgt].addEventListener('mouseover', function(e){
            if (tgt == 0){
                contentslide[2].classList.add("targeted");
                explain_t.innerHTML="Contain all the pages who slide";

            }
            else if (tgt == 1){
                el[0].classList.add("targeted");
                el[1].classList.add("targeted");
                el[2].classList.add("targeted");
                el[3].classList.add("targeted");

                explain_t.innerHTML="Contain the 4 li of the nav";
            }
            else if (tgt == 2){
                sliderp_t[0].classList.add("targeted");
                sliderp_t[1].classList.add("targeted");
                sliderp_t[2].classList.add("targeted");
                sliderp_t[3].classList.add("targeted");
                explain_t.innerHTML="<p>Contain the lines who appear here to be targeted later</p>";
            }
            else if(tgt == 3){
                explain_t.classList.add("targeted");
                explain_t.innerHTML="Contain a div for make appear some explications";
            }
        })
        sliderp_t[tgt].addEventListener('mouseleave', function(e){
            contentslide[2].classList.remove("targeted");
            
            el[0].classList.remove("targeted");
            el[1].classList.remove("targeted");
            el[2].classList.remove("targeted");
            el[3].classList.remove("targeted");

            sliderp_t[0].classList.remove("targeted");
            sliderp_t[1].classList.remove("targeted");
            sliderp_t[2].classList.remove("targeted");
            sliderp_t[3].classList.remove("targeted");

            explain_t.classList.remove("targeted");

            explain_t.innerHTML="";
        })
        
    }
    /*-------------MAKING A FOR LOOP FOR THIS----------
    sliderp_t[0].addEventListener('mouseover', function(e){
        navi_t.classList.add("targeted");
    })

    sliderp_t[0].addEventListener('mouseleave', function(e){
        navi_t.classList.remove("targeted");
    })

    sliderp_t[1].addEventListener('mouseover', function(e){
        txt_t[2].classList.add("targeted");
    })

    sliderp_t[1].addEventListener('mouseleave', function(e){
        txt_t[2].classList.remove("targeted");
    })*/
});