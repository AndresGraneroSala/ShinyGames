/*document.addEventListener("click", function(event) {

  
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

*/




document.addEventListener("click", function(event){

  /*const boton = document.getElementById("guardarDato");

  var fueraDeBoton= !boton.contains(event.target);

  if(!fueraDeBoton){
    document.write("se ha pulsado el boton"); 
  }*/
  


  
  const clickImg  = document.getElementById("ClickIMG");
  var fueraDeImgClick= !clickImg.contains(event.target);

  if(!fueraDeImgClick){
    const iframeGame = document.getElementById("gameIframe");
    iframeGame.contentWindow.focus();

    clickImg.style.display="none";
    }else{
      clickImg.style.display="block";

    }


    const gameButton = document.getElementById("selectorGameUrl");
    var fueraDeSelector= !gameButton.contains(event.target);
  
    if(!fueraDeSelector){
      clickImg.style.display="none";
      const iframeGame = document.getElementById("gameIframe");
      iframeGame.contentWindow.focus();
      
  
    }

});