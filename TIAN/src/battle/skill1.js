export default class skill1 extends Laya.Sprite {

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
        this.on(Laya.Event.MOUSE_DOWN,this,this.attack);
        this.txt = this.parent.parent.getChildByName('infors').getChildByName('txt');
        this.pers = this.parent.parent.getChildByName('pres');

    }
    attack(){
        this.txt.text = '请选择目标';
        this.visible = false;
        window.skillType = 1;
        window.player.smp-=20;
        this.parent.getChildByName('playDefense').visible = false;
        this.parent.getChildByName('playAttack').visible = false;
        this.parent.getChildByName('skill2').visible = false;
        this.parent.getChildByName('skill3').visible = false;
        this.parent.getChildByName('skill4').visible = false;
        this.parent.getChildByName('skill5').visible = false;
        this.parent.getChildByName('skill6').visible = false;
        window.player.start = true;
    }
    onEnable() {
    }

    onDisable() {
    }
}