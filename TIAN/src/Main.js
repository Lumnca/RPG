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

var player1 = new Object();

//基础信息
player1.hp = 10000;
player1.shp = 10000;
player1.mp = 1000;
player1.smp = 1000;
player1.ssp = 0;
player1.sp = 100;
player1.name = '陈靖仇';
player1.start  = false;
window.player = player1;

player1.x = 0;
player1.y = 0;

player1.gj = 112;
player1.fy = 52;
player1.money = 500;

player1.positionInfor = 0;
player1.battlefy = 0;
window.skillType = 0;

Laya.stage.on(Laya.Event.KEY_DOWN,this,infor);

function infor(e){
	var i =e["keyCode"];
	if(i==101){
		
	}
	else if(i==32){
		Laya.Scene.open("infor.scene");
		//Laya.Scene.open("sence/gift2.scene");
	}
}


window.giftFlag = false;
window.giftSeekNum = 0;
window.GettingGifts = function(name){
	if(name==='24352337782914'){
		console.log(name+'生日快乐');
	}
	else{
		console.log('---------------查看所有代码可以在Js资源中---------------');
	}
}

         //--------------------------------------------
        	// 创建Video元素
            var videoElement = Laya.Browser.createElement("video");
            Laya.Browser.document.body.appendChild(videoElement);
    
            // 设置Video元素地样式和属性
            videoElement.style.zInddex = Laya.Render.canvas.style.zIndex + 1;
            videoElement.src = "birth.mp4";
            videoElement.controls = true;
            // 阻止IOS视频全屏
            videoElement.setAttribute("webkit-playsinline", true);
            videoElement.setAttribute("playsinline", true);
    
            // 设置画布上的对齐参照物
            var reference = new Laya.Sprite();
            
            reference.pos(10, 10);
            reference.size(1200, 750);
            reference.graphics.drawRect(0, 0, reference.width, reference.height, "#000000");
            // 每次舞台尺寸变更时，都会调用Utils.fitDOMElementInArea设置Video的位置，对齐的位置和refence重合
            Laya.stage.on(Laya.Event.RESIZE, this, Laya.Utils.fitDOMElementInArea, [videoElement, reference, 0, 0, reference.width, reference.height]);
			Laya.stage.addChild(reference);
			document.getElementsByTagName('video')[0].hidden = 'false';
			Laya.loader.load("sence/gift1.scene");
			Laya.loader.load("sence/gift2.scene");
			Laya.loader.load("sence/gift3.scene");
			Laya.loader.load("music/bg/startBg.mp3");
			Laya.loader.load("music/bg/sence1Bg.mp3");
			Laya.loader.load("music/bg/zd.mp3");
			Laya.loader.load("music/bg/g1.mp3");
			Laya.loader.load("music/playBattle/attack.mp3");
			Laya.loader.load("music/playBattle/lei.mp3");
			Laya.loader.load("music/playBattle/shi.mp3");
			Laya.loader.load("music/playBattle/skill1.mp3");
			Laya.loader.load("music/playBattle/zhu.mp3");
			Laya.loader.load("music/playBattle/guang.mp3");