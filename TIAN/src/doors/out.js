export default class out extends Laya.Sprite {

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
        this.player = this.parent.getChildByName('body');
        Laya.timer.frameLoop(1,this,this.outDoor);
    }
    outDoor(){
        if(Math.abs(this.x-this.player.x)<30&&Math.abs(this.y-this.player.y)<20){
            Laya.SoundManager.playMusic("music/bg/sence1bg.mp3");
            window.player.positionInfor = 1;
            Laya.Scene.close('Sence1House1.scene');
            Laya.timer.clearAll(this);
            Laya.Scene.open("Sence1.scene");
        }
    }
    onEnable() {
    }

    onDisable() {
    }
}