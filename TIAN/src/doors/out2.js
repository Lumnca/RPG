export default class out2 extends Laya.Sprite {

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
        this.says = this.parent.getChildByName('says');
        Laya.timer.frameLoop(1,this,this.out);
    }
    out(){
        
        if(Math.abs(this.x-this.player.x)<30&&Math.abs(this.y-this.player.y)<20){
            this.player.stopMove();
            Laya.stage.offAll(Laya.Event.RIGHT_MOUSE_DOWN);
            this.says.visible = true;
            this.says.getChildByName('player').visible = true;
            this.says.getChildByName('say').getChildAt(0).getChildAt(0).text = window.player.name +':我暂时还不能去这个地方';
            Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.end);
        }

    }
    end(){
        this.says.visible = false;
        this.says.getChildByName('player').visible = false;
        this.player.x-=25;
        this.player.y-=35;
        this.player.onAwake();
    }
    onEnable() {
    }

    onDisable() {
    }
}