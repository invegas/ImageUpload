window.zoom = (function () {
	var _width, _count = 0, _percent = 10;	

	var reset = function (e) {
		_count = 0;
		adjustZoom();
	}

	var getWheelVal = function (e) {
		var val = e.originalEvent.wheelDelta || e.originalEvent.detail;
		if (val < 0) _count--;
		else _count++;		
	}

	var adjustZoom = function (e) {

		var w = _width + _count * _percent;
		var percent = parseFloat(w / _width);
		console.log(percent.toFixed(2));
		$('img').css({
	        'position': 'absolute',
	        'left': '50%',
	        'width': w + "px",
	        'margin-left': w * (-1) / 2 + "px"
	    });
	}

	var insertImg = function (src, selector) {
		var img = new Image();

		img.onload = function () {
			_width = this.width;
			$(this).appendTo(selector).css({
			    'position': 'absolute',
			    'left': '50%',
			    'width': _width + "px",
			    'margin-left': _width * (-1) / 2 + "px",
			    'margin-top': '100px'
			});
			$(this).addClass('animate');
		}

		img.src = src;
	}


	var initWheel = function () {
		$(document).on('mousewheel', function (e) {
			getWheelVal(e);
			adjustZoom();
		}).on('DOMMouseScroll', function (e) {
			getWheelVal(e);
			adjustZoom(e);
		})
	}

	return {
		insertImg: insertImg,
		initWheel: initWheel,
		reset: reset
	}
})()