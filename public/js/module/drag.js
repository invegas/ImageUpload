/* drag and drop module */

window.Drag = (function (reader) {

	var isSupport = function () {

		var input = document.createElement("span");

		if ("draggable" in input) return true;
		return false
	}

	var init = function (el) {

		if (!isSupport()) return;

		// show drop area
		el.addClass('allow-drag');

		// event bind
		el.on('dragenter', function (e) {
			return false;
		}).on('dragover', function (e) {
			$(this).addClass('drag-over');
			return false;
		}).on('dragleave', function () {
			$(this).removeClass('drag-over');
		}).on('drop', function (e) {
			var ev = e.originalEvent,
				file = ev.dataTransfer.files[0];

			var callback = function (data) {
				el.css({
					'background-image': 'url(' + data + ')'
				})
				el.css({
					// 'opacity': 0.1
				})
			}

			reader.read(file, callback);
			return false;
		})

	}

	return {
		isSupport: isSupport,
		init: init
	}
})(fileReader);