/*document.addEventListener('DOMContentLoaded', function() {
    var abrirVentanaButton = document.getElementById('abrirVentana');
    abrirVentanaButton.addEventListener('click', function() {
      chrome.windows.create({
        'url': chrome.runtime.getURL('http://127.0.0.1:3000/Connect4/index.html'),
        'type': 'popup',
        'width': 960,
        'height': 800
      });
    });
  });*/
  /*document.write("a");
  setupLocalServer();
  chrome.runtime.onStartup.addListener(function () {
    // Configura el servidor local al instalarse la extensión
    //setupLocalServer();
  });
  
  function setupLocalServer() {
    // Obtiene la URL del archivo index.html en la extensión
    const indexUrl = chrome.runtime.getURL("Connect4/index.html");
    document.write(indexUrl);

    // Crea un iframe y establece su src con la URL del archivo en localhost
    const iframe = document.createElement("iframe");
    iframe.src = indexUrl;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    document.body.appendChild(iframe);
  }
  */