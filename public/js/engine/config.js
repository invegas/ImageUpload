window.config_global = {
	file: {
		type: ["image/jpeg", "image/png"],
		maxSize: 1000000 * 5
	},
	component_list: [
		// {
		// 	name: "alert",
		// 	class: "cpt-alert"
		// },
		{
			name: "upload",
			class: "cpt-upload"
		},
		{
			name: "file_name",
			class: "cpt-file_name"
		},
		{
			name: "preview",
			class: "cpt-preview"
		},
		{
			name: "select",
			class: "btn-select"
		},
		{
			name: "confirm",
			class: "btn-confirm"
		},
		{
			name: "continue",
			class: "btn-continue"
		},						 
		{
			name: "file",
			class: "btn-file"
		},			
		{
			name: "progress",
			class: "cpt-progress"
		}					 		
	],
	action_list: {
		add_drag: {
			fn: Drag.init,
			param: [
				{
					type: "jquery",
					value: ".cpt-upload"
				}
			]
		},
		remove_drag: {
			fn: Drag.offEvent,
			param: [
				{
					type: "jquery",
					value: ".cpt-upload"
				}
			]
		}		
	}
		
}

window.config_html5 = {
	wait: {
		available_cpt: {
			upload: {
				type: 'text',
				value: '还可以把图片拖拽到这'
			},
			select: {
				type: 'button',
				value: '选择上传图片'
			}
		},
		action: ["remove_drag", "add_drag"]
	},
	ready: {
		available_cpt: {
			upload: {
				type: 'text',
				value: '可以上传了'
			},
			file_name: {
				type: 'file'
			},
			preview: {
				type: 'img'
			},
			select: {
				type: 'button',
				value: '点我重新选择'
			},						
			confirm: {
				type: 'button'
			}			
		}		
	},
	upload: {
		available_cpt: {
			upload: {
				type: 'text',
				value: '正在上传'
			},
			file_name: {
				type: 'text'
			},
			preview: {
				type: 'img'
			},
			cancel: {
				type: 'button'
			},
			progress: {
				type: 'text',
				value: '正在上传'
			},
			preview: {
				type: 'img'
			}
		}		
	},
	complete: {
		available_cpt: {
			upload: {
				type: 'text',
				value: '上传成功'
			},
			file_name: {
				type: 'text'
			},
			select: {
				type: 'button',
				value: '重新选择上传'
			},		
			continue: {
				type: 'button'
			},
			preview: {
				type: 'img'
			},
			progress: {
				type: 'text',
				value: '上传成功'
			}
		}		
	}

}