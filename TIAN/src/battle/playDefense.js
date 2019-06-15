export default class playDefense extends Laya.Sprite {

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
        this.visible = true;
        this.once(Laya.Event.MOUSE_DOWN,this,this.defense);
    }
    defense(){
        this.visible = false;
        this.parent.getChildByName('playAttack').visible = false;
        this.parent.parent.getChildByName('player').getChildByName('fangyu').visible = true;
        this.parent.parent.getChildByName('player').getChildByName('fangyu').play(0,true);
        
        this.parent.parent.getChildByName('infors').getChildByName('txt').text = '防御力上升';
        window.player.fy += 30;
        Laya.timer.frameOnce(110,this,this.stop);
        
    }
    stop(){
       
        this.parent.parent.getChildByName('player').getChildByName('fangyu').stop();
        this.parent.parent.getChildByName('player').getChildByName('fangyu').visible = false;
        
        this.once(Laya.Event.MOUSE_DOWN,this,this.defense);
        Laya.timer.frameOnce(100,this,this.end);
    }
    end(){
        this.parent.parent.getChildByName('infors').getChildByName('txt').text = '对方回合';
        window.emetys.start = true;
        this.parent.parent.getChildByName('pers').getChildByName('per1').attackPlayer();
    }
    onEnable() {
    }

    onDisable() {
    }
}