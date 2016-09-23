'use strict';

System.register(['/components/myeditor_page_ctrl.js', '/components/myview_page_ctrl.js'], function (_export, _context) {
  "use strict";

  var MyEditorPageCtrl, MyViewPageCtrl;
  return {
    setters: [function (_componentsMyeditor_page_ctrlJs) {
      MyEditorPageCtrl = _componentsMyeditor_page_ctrlJs.MyEditorPageCtrl;
    }, function (_componentsMyview_page_ctrlJs) {
      MyViewPageCtrl = _componentsMyview_page_ctrlJs.MyViewPageCtrl;
    }],
    execute: function () {
      _export('MyEditorPageCtrl', MyEditorPageCtrl);

      _export('MyViewPageCtrl', MyViewPageCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
