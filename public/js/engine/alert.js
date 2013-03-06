window.Alert = (function () {
	var _config = {
		clas: "cpt-alert",
		403: {
			content: "您上传的文件太大或者格式不对，仅限小于5M 的 jpg或png"
		}
	}


	var alert = function (code) {
		var al = $('.' + _config.clas + '');
		show();
		$('.text', al).text(_config[403]["content"]);
	}

	var hide = function () {
		console.log(_config.clas);
		var al = $('.' + _config.clas + '');
		al.addClass('invisible');
	}

	var show = function () {
		var al = $('.' + _config.clas + '');
		al.removeClass('invisible');
	}

	return {
		show: show,
		alert: alert,
		hide: hide
	}
})()