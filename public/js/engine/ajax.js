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

	        console.log('xhr progress: ' + (Math.floor(done/total*1000)/10) + '%');
	    }, false);

	    if ( xhr.upload ) {
	        xhr.upload.onprogress = function(e) {
	            var done = e.position || e.loaded, total = e.totalSize || e.total;
	            console.log('xhr.upload progress: ' + done + ' / ' + total + ' = ' + (Math.floor(done/total*1000)/10) + '%');
	        };
	    }

	    xhr.onreadystatechange = function(e) {
	        if ( 4 == this.readyState ) {
	            console.log(['xhr upload complete', e]);
	        }
	    };
	    xhr.open('post', '/upload', true);
	    /* Blob*/
	    // xhr.send(file);		

	    // formdata
	    var fd = new FormData();
		fd.append('image', file);
		xhr.send(fd);
	}

	return {
		isSupport: isSupport,
		send: send
	}
})()