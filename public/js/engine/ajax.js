window.xhr = (function () {
	var isSupport = function () {
		var xhr = new XMLHttpRequest();
		if (xhr.upload) return true;
		else return false;
	}
	var send = function (file) {
		console.log(file);
		var xhr = new XMLHttpRequest();
	    xhr.file = file; 
	    xhr.addEventListener('progress', function(e) {
	        var done = e.position || e.loaded, 
	        	total = e.totalSize || e.total;
	        var percent = (Math.floor(done/total*1000)/10);

            console.log(percent);
            Render.progress(percent);
	    }, false);

	    if ( xhr.upload ) {
	        xhr.upload.onprogress = function(e) {
	            var done = e.position || e.loaded, total = e.totalSize || e.total;
	            var percent = Math.floor(done/total*1000)/10;
	            
	            console.log(percent);
	            Render.progress(percent);
	        };
	    }

	    xhr.onreadystatechange = function(e) {
	        if ( 4 == this.readyState ) {
	        	Engine.gotoStatus('complete');
	            // console.log(['xhr upload complete', e]);
	        }
	    };
	    xhr.open('post', '/upload', true);
	    xhr.send(file);		
	}

	return {
		isSupport: isSupport,
		send: send
	}
})()