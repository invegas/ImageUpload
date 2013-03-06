/* drag and drop module */

window.Drag = (function () {

	var isSupport = function () {

		var input = document.createElement("span");

		if ("draggable" in input) return true;
		return false
	}

	var offEvent = function (el) {
		console.log('off event');
		el.off('dragenter').off('dragover').off('dragover').off('dragleave').off('drop');
	}

	var init = function (el) {
		console.log('drag init!');
		// event bind
		el.on('dragenter', function (e) {
			return false;
		}).on('dragover', function (e) {
			$(this).addClass('cpt-upload-over');
			return false;
		}).on('dragleave', function () {
			$(this).removeClass('cpt-upload-over');
		}).on('drop', function (e) {
			$(this).removeClass('cpt-upload-over');
			var ev = e.originalEvent,
				file = ev.dataTransfer.files[0];

			Engine.updateData(file);

			return false;
		})

	}

	return {
		init: init,
		offEvent: offEvent
	}
})();