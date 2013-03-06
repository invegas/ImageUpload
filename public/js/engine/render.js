window.Render = (function () {
	var show = function (clas) {
		if (clas == "cpt-upload") {
			$('.cpt-upload').addClass('cpt-upload-leave')
		} else {
			$('.' + clas + '').removeClass('invisible');
		}
	}

	var hide = function (clas) {
		if (clas == "cpt-upload") {
			$('.cpt-upload').removeClass('cpt-upload-leave')
		} else {
			$('.' + clas + '').addClass('invisible');
		}
	}

	var text = function (clas, content) {
		var sel = $('.' + clas + '');
		if (sel.hasClass('text')) {
			sel.text(content);
		} else {
			sel.find('.text[data-belong="' + clas + '"]').text(content);
		}
	}

	var button = function (btn, content) {
		$('.' + btn + '').val(content);
	}

	var progress = function () {
		
	}

	return {
		show: show,
		hide: hide,
		text: text,
		button: button
	}
})()