 window.Polymer = {rootPath: '/'};

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
	    	navigator.serviceWorker.register('service-worker.js', {
        	scope: Polymer.rootPath,
    	});
    });
}

function toHashISW(hash){

    if(!window.app)
        window.app = document.querySelector('my-app');

    window.app.set('route.path',hash);

    if(event)
        event.preventDefault();

}

function toHash(hash, direcao){
    var options = {
        "direction": direcao, // left|right|up|down
        "duration": 250
    };

    if(options.direction) {
        try {
            window.plugins.nativepagetransitions.slide(options);
        } catch (erro) {
            console.log("[Sem suporte a Native Transition no Navegador]");
        }
    }

    window.location.hash = hash;

    if(event)
        event.preventDefault();

}
