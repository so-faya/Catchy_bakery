// for food slide
var myIndex = 0;
        carousel();
        
        function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}    
          x[myIndex-1].style.display = "block";  
          setTimeout(carousel, 2000); // Change image every 2 seconds
        }

        // for navbar
        const openbutnode= document.querySelector(".openbut")
        const closebutnode= document.querySelector(".closebut")
        const buttonsnode= document.querySelector(".buttons")
        const buttongnode= document.querySelector(".buttong")
        const fullnavnode= document.querySelector(".fullnav")
        const linkinode= document.querySelector(".linki")
        const linkiinode= document.querySelector(".linkii")

        
        openbutnode.addEventListener("click",function(event){
            fullnavnode.style.display="flex"
            openbutnode.style.display="none"
            closebutnode.style.display="initial"
        })

        
        closebutnode.addEventListener("click",function(event){
            fullnavnode.style.display="none"
            openbutnode.style.display= "initial"
            closebutnode.style.display= "none"
        })
        buttonsnode.addEventListener("click",function(event){
            linkinode.style.display="initial"
            linkiinode.style.display= "none"
        })

        
        buttongnode.addEventListener("click",function(event){
            linkiinode.style.display="initial"
            linkinode.style.display= "none"
        })