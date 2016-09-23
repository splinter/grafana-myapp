import config from 'app/core/config';

export class MyViewPageCtrl {
	constructor(){
		this.name = config.bootData.user.name;            
	}

}

MyViewPageCtrl.templateUrl = 'components/myview_page_ctrl.html';
