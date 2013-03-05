window.config_global = {
	component_list: ["cpt-alert", "cpt-upload", "cpt-file_name", "cpt-preview", "btn-select", "btn-confirm", "btn-cancel", "btn-file", "cpt-progress"]
}

window.config_html5 = {
	wait: {
		available_cpt: {
			cpt-upload: {
				type: 'text',
				value: '还可以把图片拖拽到这'
			},
			btn-select: {
				type: 'button'
			}
		}		
	},
	ready: {
		available_cpt: {
			cpt-upload: {
				type: 'text',
				value: '可以上传了'
			},
			cpt-file_name: {
				type: 'text'
			},
			cpt-preview: {
				type: 'img'
			},
			btn-select: {
				type: 'button'
			},						
			btn-confirm: {
				type: 'button'
			}			
		}		
	},
	upload: {
		available_cpt: {
			cpt-upload: {
				type: 'text',
				value: '正在上传'
			},
			cpt-file_name: {
				type: 'text'
			},
			cpt-preview: {
				type: 'img'
			},
			btn-cancel: {
				type: 'button'
			},
			cpt-progress: {
				type: 'text',
				value: '正在上传'
			},
			cpt-preview: {
				type: 'img'
			}
		}		
	},
	complete: {
		available_cpt: {
			cpt-upload: {
				type: 'text',
				value: '上传成功'
			},
			cpt-file_name: {
				type: 'text'
			},
			cpt-preview: {
				type: 'img'
			},
			btn-select: {
				type: 'button'
			},
			cpt-progress: {
				type: 'text',
				value: '上传成功'
			}
		}		
	}

}