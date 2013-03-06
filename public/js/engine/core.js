window.Engine = (function () {

	var _file;

	var config_env = window.config_html5;

	var updateData = function (data) {
		_file = data;
	}

	var convertParam = function (type, val) {
		console.log(type, val);
		if (type === "jquery") {
			return $(val);
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

			if (available_cpt[name].type && available_cpt[name].value && available_cpt[name].type === "text") {
				var content = available_cpt[name].value;
				Render.text(clas, content)	
			}
		}

		if (acts && acts.length === 0) return;

		for (i = 0, len = acts.length; i < len; i++) {
			var fn = act_list[acts[i]]["fn"],
				param = act_list[acts[i]]["param"];	//参数有可能是数组

			var param_length = param.length;

			fn(convertParam(param.type, param.val));
		}
	}

	return {
		test: gotoStatus
	}


})();