export default class loadAssets extends Laya.Sprite {

    constructor() { 
        super(); 
        /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
        let intType = 1000;
        /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
        let numType = 1000;
        /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
        let strType = "hello laya";
        /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
        let boolType = true;
        // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    }
    onAwake(){
        this.load = 0;
        this.getChildByName('loading').value =  0;
        this.getChildByName('txt').text = '正在加载资源      '+this.load+'%';

        this.parent.getChildByName('show').visible = false;

        Laya.timer.frameLoop(50,this,this.loading);
    }
    loading(){
        this.load+=Math.floor(Math.random()*25+1);
        this.getChildByName('loading').value = this.load/100;
        this.getChildByName('txt').text = '正在加载资源       '+this.load+'%';
        if(this.load>=100){
            Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.gameStart);
            this.load = 100;
            this.parent.getChildByName('show').visible = true;
            this.visible = false;
            Laya.timer.clear(this,this.loading);
        }
    }
    gameStart(){
        Laya.SoundManager.playMusic("music/bg/startBg.mp3");
        this.parent.getChildByName('gk').visible = true;
        this.parent.getChildByName('show').getChildByName('lognImage').stop();
    }
    onEnable() {
    }

    onDisable() {
    }
}