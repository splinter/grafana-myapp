'use strict';

System.register(['./components/myeditor_page_ctrl', './components/myview_page_ctrl'], function (_export, _context) {
  "use strict";

  var MyEditorPageCtrl, MyViewPageCtrl;
  return {
    setters: [function (_componentsMyeditor_page_ctrl) {
      MyEditorPageCtrl = _componentsMyeditor_page_ctrl.MyEditorPageCtrl;
    }, function (_componentsMyview_page_ctrl) {
      MyViewPageCtrl = _componentsMyview_page_ctrl.MyViewPageCtrl;
    }],
    execute: function () {
      _export('MyEditorPageCtrl', MyEditorPageCtrl);

      _export('MyViewPageCtrl', MyViewPageCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
