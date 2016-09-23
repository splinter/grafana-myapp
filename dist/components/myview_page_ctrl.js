'use strict';

System.register(['app/core/config'], function (_export, _context) {
	"use strict";

	var config, MyViewPageCtrl;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [function (_appCoreConfig) {
			config = _appCoreConfig.default;
		}],
		execute: function () {
			_export('MyViewPageCtrl', MyViewPageCtrl = function MyViewPageCtrl() {
				_classCallCheck(this, MyViewPageCtrl);

				this.name = config.bootData.user.name;
			});

			_export('MyViewPageCtrl', MyViewPageCtrl);

			MyViewPageCtrl.templateUrl = 'components/myview_page_ctrl.html';
		}
	};
});
//# sourceMappingURL=myview_page_ctrl.js.map
