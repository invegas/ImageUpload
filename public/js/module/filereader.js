window.fileReader = (function () {

	var read = function (file, fn) {
		var reader = new FileReader();

		reader.onload = function (e) {
			console.log(e.target);
			fn(e.target.result);
		};

	    reader.readAsDataURL(file);
	};

	return {
		read: read
	};
})();