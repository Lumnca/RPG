import GameConfig from "./GameConfig";
import ui from "./ui/layaMaxUI";
import lognShow from "./start/lognShow";
import playmoving from "./start/playmoving";
class Main {
	constructor() {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		Laya.stage.alignV = GameConfig.alignV;
		Laya.stage.alignH = GameConfig.alignH;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded() {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded() {
		//加载IDE指定的场景
		GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
	}
}
//激活启动类
new Main();

Laya.stage.width = 1278;
Laya.stage.height = 480;
Laya.Scene.open("start.scene");

Laya.stage.once(Laya.Event.MOUSE_DOWN,this,gameStart);


var player1 = new Object();

//基础信息
player1.hp = 500;
player1.shp = 500;
player1.mp = 100;
player1.smp = 100;
player1.ssp = 0;
player1.sp = 100;
player1.name = '云傲天';
player1.start  = false;
window.player = player1;

player1.gj = 100;
player1.fy = 50;









function gameStart(){
	Laya.Scene.open("Sence1.scene");
	Laya.SoundManager.playMusic("../laya/assets/music/bg/sence1bg.mp3");
}

Laya.stage.on(Laya.Event.KEY_DOWN,this,infor);

function infor(e){
	var i =e["keyCode"];
	if(i==101){
		
	}
	else if(i==32){
		Laya.Scene.open("infor.scene");
	}
}


