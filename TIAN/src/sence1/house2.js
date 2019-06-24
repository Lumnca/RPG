export default class house2 extends Laya.Sprite {

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
        window.giftSeekNum = 0;
        Laya.timer.once(100,this,this.start);
       
        //-------------
    }
    start(){
        this.getChildByName('say').getChildAt(0).text = window.player.name+':按照村长所说，应该是在这个屋子的某个地方';
        Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.continueT,[0]);
    }
    continueT(e){
        if(e===0){
            this.getChildByName('say').getChildAt(0).text = window.player.name + ':我只需要用鼠标点击那里即可触发';
            Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.continueT,[1]);
        } 
        else if(e===1){
            this.getChildByName('say').getChildAt(0).text = window.player.name + ':那么开始行动吧！';
            Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.continueT,[2]);
        }
        else{
            this.getChildByName('player').visible = false;
            this.getChildByName('say').getChildAt(0).text = '已寻找物品0/4';
            window.giftFlag = true;
            Laya.timer.frameLoop(5,this,this.show);
        }
        
    }
    show(){
        this.getChildByName('say').getChildAt(0).text = '已寻找物品'+window.giftSeekNum+'/4';
    }
    onEnable() {
    }

    onDisable() {
    }
}