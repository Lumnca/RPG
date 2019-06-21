export default class gkClick extends Laya.Sprite {

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
        this.on(Laya.Event.MOUSE_OVER,this,this.display);
        this.on(Laya.Event.MOUSE_OUT,this,this.ondisplay);
        this.once(Laya.Event.MOUSE_DOWN,this,this.openSence);
    }
    openSence(){
        this.offAll(null);
        this.parent.visible = false;
        Laya.SoundManager.stopSound("music/bg/startBg.mp3");
        Laya.SoundManager.playMusic("music/bg/sence1bg.mp3");
        Laya.Scene.open("Sence1.scene");
    }
    display(){
        this.getChildByName('txt').fontSize = 28;
        this.getChildByName('txt').bold= true;

    }
    ondisplay(){
        this.getChildByName('txt').fontSize = 26;
        this.getChildByName('txt').bold= false;
    }
    onEnable() {
    }

    onDisable() {
    }
}