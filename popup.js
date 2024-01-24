document.addEventListener("click", function(event) {

  
    var imagen = document.getElementById("Click");
    var fueraDeImagen = !imagen.contains(event.target);
    
    if (fueraDeImagen) {
      imagen.style.display = "block";
    } else {
      imagen.style.display = "none";
      var iframe = document.getElementById("game");
        iframe.contentWindow.focus();
    }

    
  });



