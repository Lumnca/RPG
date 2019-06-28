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

//---------------------------------
Laya.loader.load("texiao/skill_1/21-1.jpg");
Laya.loader.load("texiao/skill_1/21-2.jpg");
Laya.loader.load("texiao/skill_1/21-3.jpg");
Laya.loader.load("texiao/skill_1/21-4.jpg");
Laya.loader.load("texiao/skill_1/21-5.jpg");
Laya.loader.load("texiao/skill_1/21-6.jpg");
Laya.loader.load("texiao/skill_1/21-7.jpg");
Laya.loader.load("texiao/skill_1/21-8.jpg");
Laya.loader.load("texiao/skill_1/21-9.jpg");
Laya.loader.load("texiao/skill_1/21-10.jpg");
Laya.loader.load("texiao/skill_1/21-11.jpg");
Laya.loader.load("texiao/skill_1/21-12.jpg");
Laya.loader.load("texiao/skill_1/21-13.jpg");
Laya.loader.load("texiao/skill_1/21-14.jpg");
Laya.loader.load("texiao/skill_1/21-15.jpg");
Laya.loader.load("texiao/skill_1/21-16.jpg");
Laya.loader.load("texiao/skill_1/21-17.jpg");
Laya.loader.load("texiao/skill_1/21-18.jpg");
Laya.loader.load("texiao/skill_1/21-19.jpg");
Laya.loader.load("texiao/skill_1/21-20.jpg");
Laya.loader.load("texiao/skill_1/21-21.jpg");
Laya.loader.load("texiao/skill_1/21-22.jpg");
Laya.loader.load("texiao/skill_1/21-23.jpg");
Laya.loader.load("texiao/skill_1/21-24.jpg");
Laya.loader.load("texiao/skill_1/21-25.jpg");
Laya.loader.load("texiao/skill_1/21-26.jpg");
Laya.loader.load("texiao/skill_1/21-27.jpg");
Laya.loader.load("texiao/skill_1/21-28.jpg");
Laya.loader.load("texiao/skill_1/21-29.jpg");
Laya.loader.load("texiao/skill_1/21-30.jpg");
Laya.loader.load("texiao/skill_1/21-31.jpg");
Laya.loader.load("texiao/skill_1/21-32.jpg");
Laya.loader.load("texiao/skill_1/21-33.jpg");
Laya.loader.load("texiao/skill_1/21-34.jpg");
Laya.loader.load("texiao/skill_1/21-35.jpg");
Laya.loader.load("texiao/skill_1/21-36.jpg");
Laya.loader.load("texiao/skill_1/21-37.jpg");
Laya.loader.load("texiao/skill_1/21-38.jpg");
Laya.loader.load("texiao/skill_1/21-39.jpg");
Laya.loader.load("texiao/skill_1/21-40.jpg");
Laya.loader.load("texiao/skill_1/21-41.jpg");
Laya.loader.load("texiao/skill_1/21-42.jpg");
Laya.loader.load("texiao/skill_1/21-43.jpg");
Laya.loader.load("texiao/skill_1/21-44.jpg");
Laya.loader.load("texiao/skill_1/21-45.jpg");
Laya.loader.load("texiao/skill_1/21-46.jpg");
Laya.loader.load("texiao/skill_1/21-47.jpg");
Laya.loader.load("texiao/skill_1/21-48.jpg");
Laya.loader.load("texiao/skill_1/21-49.jpg");
Laya.loader.load("texiao/skill_1/21-50.jpg");
Laya.loader.load("texiao/skill_1/21-51.jpg");
Laya.loader.load("texiao/skill_1/21-52.jpg");
Laya.loader.load("texiao/skill_1/21-53.jpg");
//
Laya.loader.load("texiao/attack1_0 (1).png");
Laya.loader.load("texiao/attack1_0 (2).png");
Laya.loader.load("texiao/attack1_0 (3).png");
Laya.loader.load("texiao/attack1_0 (4).png");
Laya.loader.load("texiao/attack1_0 (5).png");
Laya.loader.load("texiao/attack1_0 (6).png");
Laya.loader.load("texiao/comp1_00000.png");
Laya.loader.load("texiao/comp1_00001.png");
Laya.loader.load("texiao/comp1_00002.png");
Laya.loader.load("texiao/comp1_00003.png");
Laya.loader.load("texiao/comp1_00004.png");
Laya.loader.load("texiao/comp1_00005.png");
Laya.loader.load("texiao/comp1_00006.png");
Laya.loader.load("texiao/comp1_00007.png");
Laya.loader.load("texiao/comp1_00008.png");
Laya.loader.load("texiao/comp1_00009.png");
//
Laya.loader.load("texiao/skill_2/374-1.jpg");
Laya.loader.load("texiao/skill_2/374-2.jpg");
Laya.loader.load("texiao/skill_2/374-3.jpg");
Laya.loader.load("texiao/skill_2/374-4.jpg");
Laya.loader.load("texiao/skill_2/374-5.jpg");
Laya.loader.load("texiao/skill_2/374-6.jpg");
Laya.loader.load("texiao/skill_2/374-7.jpg");
Laya.loader.load("texiao/skill_2/374-8.jpg");
Laya.loader.load("texiao/skill_2/374-9.jpg");
Laya.loader.load("texiao/skill_2/374-10.jpg");
Laya.loader.load("texiao/skill_2/374-11.jpg");
Laya.loader.load("texiao/skill_2/374-12.jpg");
Laya.loader.load("texiao/skill_2/374-13.jpg");
Laya.loader.load("texiao/skill_2/374-14.jpg");
//
Laya.loader.load("texiao/skill_3/405-1.jpg");
Laya.loader.load("texiao/skill_3/405-2.jpg");
Laya.loader.load("texiao/skill_3/405-3.jpg");
Laya.loader.load("texiao/skill_3/405-4.jpg");
Laya.loader.load("texiao/skill_3/405-5.jpg");
Laya.loader.load("texiao/skill_3/405-6.jpg");
Laya.loader.load("texiao/skill_3/405-7.jpg");
Laya.loader.load("texiao/skill_3/405-8.jpg");
Laya.loader.load("texiao/skill_3/405-9.jpg");
Laya.loader.load("texiao/skill_3/405-10.jpg");
Laya.loader.load("texiao/skill_3/405-11.jpg");
//
Laya.loader.load("texiao/skill_4/17-1.jpg");
Laya.loader.load("texiao/skill_4/17-2.jpg");
Laya.loader.load("texiao/skill_4/17-3.jpg");
Laya.loader.load("texiao/skill_4/17-4.jpg");
Laya.loader.load("texiao/skill_4/17-5.jpg");
Laya.loader.load("texiao/skill_4/17-6.jpg");
Laya.loader.load("texiao/skill_4/17-7.jpg");
Laya.loader.load("texiao/skill_4/17-8.jpg");
Laya.loader.load("texiao/skill_4/17-9.jpg");
Laya.loader.load("texiao/skill_4/17-10.jpg");
Laya.loader.load("texiao/skill_4/17-11.jpg");
Laya.loader.load("texiao/skill_4/17-12.jpg");
Laya.loader.load("texiao/skill_4/17-13.jpg");
Laya.loader.load("texiao/skill_4/17-14.jpg");
Laya.loader.load("texiao/skill_4/17-15.jpg");
Laya.loader.load("texiao/skill_4/17-16.jpg");
Laya.loader.load("texiao/skill_4/17-17.jpg");
Laya.loader.load("texiao/skill_4/17-18.jpg");
Laya.loader.load("texiao/skill_4/17-19.jpg");
Laya.loader.load("texiao/skill_4/17-20.jpg");
Laya.loader.load("texiao/skill_4/17-21.jpg");
Laya.loader.load("texiao/skill_4/17-22.jpg");
Laya.loader.load("texiao/skill_4/17-23.jpg");
Laya.loader.load("texiao/skill_4/17-24.jpg");
Laya.loader.load("texiao/skill_4/17-25.jpg");
Laya.loader.load("texiao/skill_4/17-26.jpg");
Laya.loader.load("texiao/skill_4/17-27.jpg");
Laya.loader.load("texiao/skill_4/17-28.jpg");
Laya.loader.load("texiao/skill_4/17-29.jpg");
Laya.loader.load("texiao/skill_4/17-30.jpg");
Laya.loader.load("texiao/skill_4/17-31.jpg");
Laya.loader.load("texiao/skill_4/17-32.jpg");
Laya.loader.load("texiao/skill_4/17-33.jpg");
Laya.loader.load("texiao/skill_4/17-34.jpg");
Laya.loader.load("texiao/skill_4/17-35.jpg");
Laya.loader.load("texiao/skill_4/17-36.jpg");
Laya.loader.load("texiao/skill_4/17-37.jpg");
Laya.loader.load("texiao/skill_4/17-38.jpg");
Laya.loader.load("texiao/skill_4/17-39.jpg");
Laya.loader.load("texiao/skill_4/17-40.jpg");
Laya.loader.load("texiao/skill_4/17-41.jpg");
Laya.loader.load("texiao/skill_4/17-42.jpg");
Laya.loader.load("texiao/skill_4/17-43.jpg");
Laya.loader.load("texiao/skill_4/17-44.jpg");
Laya.loader.load("texiao/skill_4/17-45.jpg");
Laya.loader.load("texiao/skill_4/17-46.jpg");
Laya.loader.load("texiao/skill_4/17-47.jpg");
//
Laya.loader.load("texiao/skill_5/398-1.jpg");
Laya.loader.load("texiao/skill_5/398-2.jpg");
Laya.loader.load("texiao/skill_5/398-3.jpg");
Laya.loader.load("texiao/skill_5/398-4.jpg");
Laya.loader.load("texiao/skill_5/398-5.jpg");
Laya.loader.load("texiao/skill_5/398-6.jpg");
//
Laya.loader.load("texiao/skill_6/130-1.jpg");
Laya.loader.load("texiao/skill_6/130-2.jpg");
Laya.loader.load("texiao/skill_6/130-3.jpg");
Laya.loader.load("texiao/skill_6/130-4.jpg");
Laya.loader.load("texiao/skill_6/130-5.jpg");
Laya.loader.load("texiao/skill_6/130-6.jpg");
Laya.loader.load("texiao/skill_6/130-7.jpg");
Laya.loader.load("texiao/skill_6/130-8.jpg");
Laya.loader.load("texiao/skill_6/130-9.jpg");
Laya.loader.load("texiao/skill_6/130-10.jpg");
Laya.loader.load("texiao/skill_6/130-11.jpg");
Laya.loader.load("texiao/skill_6/130-12.jpg");
Laya.loader.load("texiao/skill_6/130-13.jpg");
Laya.loader.load("texiao/skill_6/130-14.jpg");
Laya.loader.load("texiao/skill_6/130-15.jpg");
Laya.loader.load("texiao/skill_6/130-16.jpg");
Laya.loader.load("texiao/skill_6/130-17.jpg");
Laya.loader.load("texiao/skill_6/130-18.jpg");
Laya.loader.load("texiao/skill_6/130-19.jpg");
Laya.loader.load("texiao/skill_6/130-20.jpg");
Laya.loader.load("texiao/skill_6/130-21.jpg");
Laya.loader.load("texiao/skill_6/130-22.jpg");
Laya.loader.load("texiao/skill_6/130-23.jpg");
Laya.loader.load("texiao/skill_6/130-24.jpg");
Laya.loader.load("texiao/skill_6/130-25.jpg");
Laya.loader.load("texiao/skill_6/130-26.jpg");
Laya.loader.load("texiao/skill_6/130-27.jpg");
Laya.loader.load("texiao/skill_6/130-28.jpg");
Laya.loader.load("texiao/skill_6/130-29.jpg");
Laya.loader.load("texiao/skill_6/130-30.jpg");
Laya.loader.load("texiao/skill_6/130-31.jpg");
Laya.loader.load("texiao/skill_6/130-32.jpg");
Laya.loader.load("texiao/skill_6/130-33.jpg");
Laya.loader.load("texiao/skill_6/130-34.jpg");
Laya.loader.load("texiao/skill_6/130-35.jpg");
Laya.loader.load("texiao/skill_6/130-36.jpg");
Laya.loader.load("texiao/skill_6/130-37.jpg");
Laya.loader.load("texiao/skill_6/130-38.jpg");
Laya.loader.load("texiao/skill_6/130-39.jpg");
Laya.loader.load("texiao/skill_6/130-40.jpg");
Laya.loader.load("texiao/skill_6/130-41.jpg");
//
Laya.loader.load("texiao/skill_7/151-1.jpg");
Laya.loader.load("texiao/skill_7/151-2.jpg");
Laya.loader.load("texiao/skill_7/151-3.jpg");
Laya.loader.load("texiao/skill_7/151-4.jpg");
Laya.loader.load("texiao/skill_7/151-5.jpg");
Laya.loader.load("texiao/skill_7/151-6.jpg");
Laya.loader.load("texiao/skill_7/151-7.jpg");
Laya.loader.load("texiao/skill_7/151-8.jpg");
Laya.loader.load("texiao/skill_7/151-9.jpg");
Laya.loader.load("texiao/skill_7/151-10.jpg");
Laya.loader.load("texiao/skill_7/151-11.jpg");
Laya.loader.load("texiao/skill_7/151-12.jpg");
Laya.loader.load("texiao/skill_7/151-13.jpg");
Laya.loader.load("texiao/skill_7/151-14.jpg");
Laya.loader.load("texiao/skill_7/151-15.jpg");
Laya.loader.load("texiao/skill_7/151-16.jpg");
Laya.loader.load("texiao/skill_7/151-17.jpg");
Laya.loader.load("texiao/skill_7/151-18.jpg");
Laya.loader.load("texiao/skill_7/151-19.jpg");
Laya.loader.load("texiao/skill_7/151-20.jpg");
Laya.loader.load("texiao/skill_7/151-21.jpg");
Laya.loader.load("texiao/skill_7/151-22.jpg");
Laya.loader.load("texiao/skill_7/151-23.jpg");
Laya.loader.load("texiao/skill_7/151-24.jpg");
Laya.loader.load("texiao/skill_7/151-25.jpg");
Laya.loader.load("texiao/skill_7/151-26.jpg");
Laya.loader.load("texiao/skill_7/151-27.jpg");
Laya.loader.load("texiao/skill_7/151-28.jpg");
Laya.loader.load("texiao/skill_7/151-29.jpg");
Laya.loader.load("texiao/skill_7/151-30.jpg");
Laya.loader.load("texiao/skill_7/151-31.jpg");
Laya.loader.load("texiao/skill_7/151-32.jpg");
Laya.loader.load("texiao/skill_7/151-33.jpg");
Laya.loader.load("texiao/skill_7/151-34.jpg");
Laya.loader.load("texiao/skill_7/151-35.jpg");
Laya.loader.load("texiao/skill_7/151-36.jpg");
Laya.loader.load("texiao/skill_7/151-37.jpg");
Laya.loader.load("texiao/skill_7/151-38.jpg");
Laya.loader.load("texiao/skill_7/151-39.jpg");
Laya.loader.load("texiao/skill_7/151-40.jpg");
Laya.loader.load("texiao/skill_7/151-41.jpg");
Laya.loader.load("texiao/skill_7/151-42.jpg");
Laya.loader.load("texiao/skill_7/151-43.jpg");
Laya.loader.load("texiao/skill_7/151-44.jpg");
Laya.loader.load("texiao/skill_7/151-45.jpg");
Laya.loader.load("texiao/skill_7/151-46.jpg");
Laya.loader.load("texiao/skill_7/151-47.jpg");
Laya.loader.load("texiao/skill_7/151-48.jpg");
Laya.loader.load("texiao/skill_7/151-49.jpg");
Laya.loader.load("texiao/skill_7/151-50.jpg");
Laya.loader.load("texiao/skill_7/151-51.jpg");
//
Laya.loader.load("texiao/skill_8/152-1.jpg");
Laya.loader.load("texiao/skill_8/152-2.jpg");
Laya.loader.load("texiao/skill_8/152-3.jpg");
Laya.loader.load("texiao/skill_8/152-4.jpg");
Laya.loader.load("texiao/skill_8/152-5.jpg");
Laya.loader.load("texiao/skill_8/152-6.jpg");
Laya.loader.load("texiao/skill_8/152-7.jpg");
Laya.loader.load("texiao/skill_8/152-8.jpg");
Laya.loader.load("texiao/skill_8/152-9.jpg");
Laya.loader.load("texiao/skill_8/152-10.jpg");
Laya.loader.load("texiao/skill_8/152-11.jpg");
Laya.loader.load("texiao/skill_8/152-12.jpg");
Laya.loader.load("texiao/skill_8/152-13.jpg");
Laya.loader.load("texiao/skill_8/152-14.jpg");
Laya.loader.load("texiao/skill_8/152-15.jpg");
Laya.loader.load("texiao/skill_8/152-16.jpg");
Laya.loader.load("texiao/skill_8/152-17.jpg");
Laya.loader.load("texiao/skill_8/152-18.jpg");
Laya.loader.load("texiao/skill_8/152-19.jpg");
Laya.loader.load("texiao/skill_8/152-20.jpg");
Laya.loader.load("texiao/skill_8/152-21.jpg");
Laya.loader.load("texiao/skill_8/152-22.jpg");
Laya.loader.load("texiao/skill_8/152-23.jpg");
Laya.loader.load("texiao/skill_8/152-24.jpg");
Laya.loader.load("texiao/skill_8/152-25.jpg");
Laya.loader.load("texiao/skill_8/152-26.jpg");
Laya.loader.load("texiao/skill_8/152-27.jpg");
Laya.loader.load("texiao/skill_8/152-28.jpg");
Laya.loader.load("texiao/skill_8/152-29.jpg");
Laya.loader.load("texiao/skill_8/152-30.jpg");
Laya.loader.load("texiao/skill_8/152-31.jpg");
Laya.loader.load("texiao/skill_8/152-32.jpg");
Laya.loader.load("texiao/skill_8/152-33.jpg");
Laya.loader.load("texiao/skill_8/152-34.jpg");
Laya.loader.load("texiao/skill_8/152-35.jpg");
Laya.loader.load("texiao/skill_8/152-36.jpg");
Laya.loader.load("texiao/skill_8/152-37.jpg");
Laya.loader.load("texiao/skill_8/152-38.jpg");
Laya.loader.load("texiao/skill_8/152-39.jpg");
Laya.loader.load("texiao/skill_8/152-40.jpg");
Laya.loader.load("texiao/skill_8/152-41.jpg");
//
Laya.loader.load("texiao/skill_9/166-1.jpg");
Laya.loader.load("texiao/skill_9/166-2.jpg");
Laya.loader.load("texiao/skill_9/166-3.jpg");
Laya.loader.load("texiao/skill_9/166-4.jpg");
Laya.loader.load("texiao/skill_9/166-5.jpg");
Laya.loader.load("texiao/skill_9/166-6.jpg");
Laya.loader.load("texiao/skill_9/166-7.jpg");
Laya.loader.load("texiao/skill_9/166-8.jpg");
Laya.loader.load("texiao/skill_9/166-9.jpg");
Laya.loader.load("texiao/skill_9/166-10.jpg");
Laya.loader.load("texiao/skill_9/166-11.jpg");
Laya.loader.load("texiao/skill_9/166-12.jpg");
Laya.loader.load("texiao/skill_9/166-13.jpg");
Laya.loader.load("texiao/skill_9/166-14.jpg");
Laya.loader.load("texiao/skill_9/166-15.jpg");
Laya.loader.load("texiao/skill_9/166-16.jpg");
Laya.loader.load("texiao/skill_9/166-17.jpg");
Laya.loader.load("texiao/skill_9/166-18.jpg");
Laya.loader.load("texiao/skill_9/166-19.jpg");
Laya.loader.load("texiao/skill_9/166-20.jpg");
Laya.loader.load("texiao/skill_9/166-21.jpg");
Laya.loader.load("texiao/skill_9/166-22.jpg");
Laya.loader.load("texiao/skill_9/166-23.jpg");
Laya.loader.load("texiao/skill_9/166-24.jpg");
Laya.loader.load("texiao/skill_9/166-25.jpg");
Laya.loader.load("texiao/skill_9/166-26.jpg");
Laya.loader.load("texiao/skill_9/166-27.jpg");
Laya.loader.load("texiao/skill_9/166-28.jpg");
Laya.loader.load("texiao/skill_9/166-29.jpg");
Laya.loader.load("texiao/skill_9/166-30.jpg");
Laya.loader.load("texiao/skill_9/166-31.jpg");
Laya.loader.load("texiao/skill_9/166-32.jpg");
Laya.loader.load("texiao/skill_9/166-33.jpg");
Laya.loader.load("texiao/skill_9/166-34.jpg");
Laya.loader.load("texiao/skill_9/166-35.jpg");
Laya.loader.load("texiao/skill_9/166-36.jpg");
Laya.loader.load("texiao/skill_9/166-37.jpg");
Laya.loader.load("texiao/skill_9/166-38.jpg");
Laya.loader.load("texiao/skill_9/166-39.jpg");
Laya.loader.load("texiao/skill_9/166-40.jpg");
Laya.loader.load("texiao/skill_9/166-41.jpg");
Laya.loader.load("texiao/skill_9/166-42.jpg");
Laya.loader.load("texiao/skill_9/166-43.jpg");
Laya.loader.load("texiao/skill_9/166-44.jpg");
Laya.loader.load("texiao/skill_9/166-45.jpg");
Laya.loader.load("texiao/skill_9/166-46.jpg");
Laya.loader.load("texiao/skill_9/166-47.jpg");
Laya.loader.load("texiao/skill_9/166-48.jpg");
Laya.loader.load("texiao/skill_9/166-49.jpg");
Laya.loader.load("texiao/skill_9/166-50.jpg");
Laya.loader.load("texiao/skill_9/166-51.jpg");
//
Laya.loader.load("texiao/skill_10/165-1.jpg");
Laya.loader.load("texiao/skill_10/165-2.jpg");
Laya.loader.load("texiao/skill_10/165-3.jpg");
Laya.loader.load("texiao/skill_10/165-4.jpg");
Laya.loader.load("texiao/skill_10/165-5.jpg");
Laya.loader.load("texiao/skill_10/165-6.jpg");
Laya.loader.load("texiao/skill_10/165-7.jpg");
Laya.loader.load("texiao/skill_10/165-8.jpg");
Laya.loader.load("texiao/skill_10/165-9.jpg");
Laya.loader.load("texiao/skill_10/165-10.jpg");
Laya.loader.load("texiao/skill_10/165-11.jpg");
Laya.loader.load("texiao/skill_10/165-12.jpg");
Laya.loader.load("texiao/skill_10/165-13.jpg");
Laya.loader.load("texiao/skill_10/165-14.jpg");
Laya.loader.load("texiao/skill_10/165-15.jpg");
Laya.loader.load("texiao/skill_10/165-16.jpg");
Laya.loader.load("texiao/skill_10/165-17.jpg");
Laya.loader.load("texiao/skill_10/165-18.jpg");
Laya.loader.load("texiao/skill_10/165-19.jpg");
Laya.loader.load("texiao/skill_10/165-20.jpg");
Laya.loader.load("texiao/skill_10/165-21.jpg");
Laya.loader.load("texiao/skill_10/165-22.jpg");
Laya.loader.load("texiao/skill_10/165-23.jpg");
Laya.loader.load("texiao/skill_10/165-24.jpg");
Laya.loader.load("texiao/skill_10/165-25.jpg");
Laya.loader.load("texiao/skill_10/165-26.jpg");
Laya.loader.load("texiao/skill_10/165-27.jpg");
Laya.loader.load("texiao/skill_10/165-28.jpg");
Laya.loader.load("texiao/skill_10/165-29.jpg");
Laya.loader.load("texiao/skill_10/165-30.jpg");
Laya.loader.load("texiao/skill_10/165-31.jpg");
Laya.loader.load("texiao/skill_10/165-32.jpg");
Laya.loader.load("texiao/skill_10/165-33.jpg");
Laya.loader.load("texiao/skill_10/165-34.jpg");
Laya.loader.load("texiao/skill_10/165-35.jpg");
Laya.loader.load("texiao/skill_10/165-36.jpg");
Laya.loader.load("texiao/skill_10/165-37.jpg");
Laya.loader.load("texiao/skill_10/165-38.jpg");
Laya.loader.load("texiao/skill_10/165-39.jpg");
Laya.loader.load("texiao/skill_10/165-40.jpg");
Laya.loader.load("texiao/skill_10/165-41.jpg");
Laya.loader.load("texiao/skill_10/165-42.jpg");
Laya.loader.load("texiao/skill_10/165-43.jpg");
Laya.loader.load("texiao/skill_10/165-44.jpg");
Laya.loader.load("texiao/skill_10/165-45.jpg");
Laya.loader.load("texiao/skill_10/165-46.jpg");
Laya.loader.load("texiao/skill_10/165-47.jpg");
Laya.loader.load("texiao/skill_10/165-48.jpg");
Laya.loader.load("texiao/skill_10/165-49.jpg");
Laya.loader.load("texiao/skill_10/165-50.jpg");
Laya.loader.load("texiao/skill_10/165-51.jpg");
Laya.loader.load("texiao/skill_10/165-52.jpg");
Laya.loader.load("texiao/skill_10/165-53.jpg");
Laya.loader.load("texiao/skill_10/165-54.jpg");
Laya.loader.load("texiao/skill_10/165-55.jpg");
Laya.loader.load("texiao/skill_10/165-56.jpg");
Laya.loader.load("texiao/skill_10/165-57.jpg");
Laya.loader.load("texiao/skill_10/165-58.jpg");
Laya.loader.load("texiao/skill_10/165-59.jpg");
Laya.loader.load("texiao/skill_10/165-60.jpg");
Laya.loader.load("texiao/skill_10/165-61.jpg");
Laya.loader.load("texiao/skill_10/165-62.jpg");
Laya.loader.load("texiao/skill_10/165-63.jpg");
Laya.loader.load("texiao/skill_10/165-64.jpg");
Laya.loader.load("texiao/skill_10/165-65.jpg");
Laya.loader.load("texiao/skill_10/165-66.jpg");
Laya.loader.load("texiao/skill_10/165-67.jpg");
Laya.loader.load("texiao/skill_10/165-68.jpg");
Laya.loader.load("texiao/skill_10/165-69.jpg");
Laya.loader.load("texiao/skill_10/165-70.jpg");





