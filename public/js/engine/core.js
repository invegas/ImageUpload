window.Engine = (function () {

	var _file;
	var config_env = window.config_html5;

	var updateData = function (data) {
		_file = data;

		// validate
		if (!_file || !_file.type || !_file.size || !fileReader.validateType(_file.type) || !fileReader.validateSize(_file.size)) {

			if (_file) Alert.alert(403);
			gotoStatus("wait");
			return false;
		}

		gotoStatus("ready");
	}

	var sendData = function () {
		xhr.send(_file);
	}

	var executeFn = function (fn, param) {
		var convert = function (param) {
			var type = param.type,
				value = param.value;

			if (type === "jquery") {
				return $(value)
			} else if (type === "int") {
				return parseInt(value)
			} else if (type === "float") {
				return parseFloat(value)
			}
		}

		if (!param) {
			fn()
			return;
		}

		var len = param.length;
		if (len === 1) {
			fn(convert(param[0]))
		} else if (len === 2) {
			fn(convert(param[0]), convert(param[1]))
		} else if (len === 3) {
			fn(convert(param[0]), convert(param[1]), convert(param[2]))
		}
	}

	var gotoStatus = function (status) {

		var available_cpt = config_env[status].available_cpt,
			acts = config_env[status].action,

			act_list = config_global.action_list,		
			cpts = config_global.component_list;

		// component
		for (var i = 0, len = cpts.length; i < len; i++) {

			var name = cpts[i]["name"], clas = cpts[i]["class"];

			if (available_cpt[name]) {
				Render.show(clas);
			} else {
				Render.hide(clas);
				continue;
			}

			//the status
			if (available_cpt[name].type) {
				var type = available_cpt[name].type;
				if (type === "text") {
					var content = available_cpt[name].value;
					Render.text(clas, content)						
				} else if (type === "file") {
					console.log(_file);
					var content = _file.name
					Render.text(clas, content)
				} else if (type === "img") {
					Render.show(clas);
					// fileReader.readDataUrl()
				} else if (type === "button") {
					Render.show(clas);
					if (available_cpt[name].value) Render.button(clas, available_cpt[name].value)
				}

			}
		}
		// the action in this status
		if (!acts || acts.length === 0) return false;

		for (i = 0, len = acts.length; i < len; i++) {
			var fn = act_list[acts[i]]["fn"],
				param = act_list[acts[i]]["param"];	//参数有可能是数组

			executeFn(fn, param);
		}
	}

	return {
		gotoStatus: gotoStatus,
		updateData: updateData,
		sendData: sendData
	}


})();