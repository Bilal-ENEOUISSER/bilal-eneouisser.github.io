var icon = document.getElementById("icon");
      var icon2 = document.getElementById("icon2");


      icon.onclick=function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
          icon.src = "img/sun.png"
          icon2.src = "img/logo11.png"
        }else{
          icon.src = "img/moon.png"
          icon2.src = "img/logo22.png"
        }
      }