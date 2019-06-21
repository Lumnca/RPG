export default class lognShow extends Laya.Image{

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
        Laya.timer.frameLoop(40,this,this.chageDisplay);
        Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.gameStart);
    }
    gameStart(){
        Laya.SoundManager.playMusic("music/bg/startBg.mp3");
        this.parent.parent.getChildByName('gk').visible = true;
        this.visible = false;
        Laya.timer.clear(this,this.chageDisplay);
    }
    chageDisplay(){
        
    if(this.visible){
            this.visible = false;
        }
        else{
            this.visible = true;
        }
       
    }
    onEnable() {
    }

    onDisable() {
    }
}