window.zoom = (function () {
	var _width, _count = 0, _percent = 10, num = 1, temp = 0, w;
	var isPress = 0, allowPress = 1;
	var btn_pos_x, btn_pos_y, mou_pos_x, mouse_pos_y, diff;

	var reset = function (e) {
		_count = 0;
		adjustZoom();
	}

	var widthPlus = function (val) {
		_count = _count + val;
	}

	var widthMinus = function (val) {
		_count = _count - val;
	}

	var getPercent = function () {
		var w = _width + _count * _percent,
			percent = parseFloat(w / _width);

		return percent;
	}

	var showPercent = function (selector) {
		var percent = parseFloat(w / _width);
			percent = percent.toFixed(2);
			percent = percent * 100;

			percent = parseInt(percent);

		selector.val(percent + "%");
	}

	var getWheelVal = function (e) {
		var val = e.originalEvent.wheelDelta || e.originalEvent.detail;
		if (val < 0) _count--;
		else _count++;		
	}

	var adjustZoom = function (val) {
		// var w;
		if (!val) w = _width + _count * _percent;
		else w = _width + (_count + val) * _percent;
		var percent = parseFloat(w / _width);
		$('img').css({
	        'position': 'absolute',
	        'left': '50%',
	        'width': w + "px",
	        'margin-left': w * (-1) / 2 + "px"
	    });
	    showPercent($('.input-width-val'));
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
			$(this).addClass('animate').addClass('target');
			$('.target').Jcrop();
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

	var compute = function () {
	    diff = mou_pos_x - btn_pos_x;
	    zoom.adjustZoom(diff);
	}

	var initMouse = function (clas) {
		$(document).on('mousedown', function (e) {
			diff = 0
		    var ev = e.originalEvent, target = $(e.target);
		    if (target.hasClass(clas) || target.parent().hasClass(clas)) {
		        isPress = 1;
		        btn_pos_x = ev.clientX;
		        btn_pos_y = ev.clientY;
		    }
		}).on('mouseup', function (e) {
			zoom.widthPlus(diff);
		    isPress = 0;
		    allowPress = 1;
		}).on('mousemove', function (e) {

		    allowPress = 0;
		    if (!isPress) return false;
		    mou_pos_x = e.originalEvent.clientX;
		    mou_pos_y = e.originalEvent.clientY;
		    compute();

		})
	}

	return {
		adjustZoom: adjustZoom,
		insertImg: insertImg,
		initWheel: initWheel,
		reset: reset,
		widthPlus: widthPlus,
		widthMinus: widthMinus,
		getPercent: getPercent,
		showPercent: showPercent,
		initMouse: initMouse
	}
})()