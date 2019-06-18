export default class inHouse2 extends Laya.Sprite {

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
        Laya.timer.frameLoop(1,this,this.inHouse);
       
    }
    inHouse(){
        var house1 = this;
        console.log(Math.abs(house1.x-this.player.x)+","+Math.abs(house1.y-this.player.y));
        if(Math.abs(house1.x-this.player.x)<70&&Math.abs(house1.y-this.player.y)<20){
            
            window.player.x = house1.x+70;
            window.player.y = house1.y+20;
            Laya.timer.clear(this,this.inHouse);
            //Laya.Scene.closeAll();
            Laya.Scene.open('Sence1House1.scene');

        }
    }
    onEnable() {
    }

    onDisable() {
    }
}