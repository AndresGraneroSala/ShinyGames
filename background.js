/*chrome.runtime.onStartup.addListener(function () {
  // Configura el servidor local al instalarse la extensión
  setupLocalServer();
});

function setupLocalServer() {
  // Crea un servidor web local
  fetch(chrome.runtime.getURL("index.html"))
    .then(response => response.text())
    .then(content => startLocalServer(content))
    .catch(error => console.error('Error fetching index.html:', error));
}

function startLocalServer(content) {
  // Configura las reglas declarativas de la red para manejar las solicitudes
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: '1',
        priority: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            { name: 'Content-Type', value: 'text/html' },
          ],
        },
        condition: {
          urlFilter: {
            schemes: ['http', 'https'],
          },
        },
      },
    ],
  });

  // Crea un servidor web local en el puerto 8080
  chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      return { redirectUrl: 'data:text/html,' + encodeURIComponent(content) };
    },
    {
      urls: ['<all_urls>'],
    },
    ['blocking']
  );
}
*/