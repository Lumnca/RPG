export default class playerInfor extends Laya.Sprite {

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
        this.getChildByName('money').getChildAt(0).text ='金:'+ window.player.money;
        this.getChildByName('wgj').getChildAt(0).text = '物攻:'+window.player.gj;
        this.getChildByName('wfy').getChildAt(0).text = '物防:'+window.player.fy;
        this.getChildAt(4).getChildAt(0).value = (window.player.shp/window.player.hp);
        this.getChildAt(5).getChildAt(0).value = (window.player.smp/window.player.mp);
        Laya.timer.frameLoop(1,this,this.show);
    }
    show(){
        this.getChildByName('money').getChildAt(0).text = window.player.money;
        this.getChildByName('wgj').getChildAt(0).text = window.player.gj;
        this.getChildByName('wfy').getChildAt(0).text = window.player.fy;

        this.getChildAt(4).getChildByName('hptxt').text = window.player.shp+'/'+window.player.hp;
        this.getChildAt(4).getChildAt(0).value = (window.player.shp/window.player.hp);
        this.getChildAt(5).getChildAt(0).value = (window.player.smp/window.player.mp);
        this.getChildAt(5).getChildByName('mptxt').text = window.player.smp+'/'+window.player.mp;
    }
    onEnable() {
    }

    onDisable() {
    }
}