export default class player extends Laya.Sprite {

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
        this.getChildByName('ani').gotoAndStop(7);
        Laya.timer.frameLoop(1,this,this.showInfor);
    }
    showInfor(){
        this.getChildByName('hp').getChildByName('hptxt').text ='命:'+ window.player.shp+'/'+window.player.hp;
        this.getChildByName('sp').getChildByName('sptxt').text ='怒:'+ window.player.ssp+'/'+window.player.sp;
        this.getChildByName('mp').getChildByName('mptxt').text ='灵:'+ window.player.smp+'/'+window.player.mp;
    }
    onEnable() {
    }

    onDisable() {
    }
}