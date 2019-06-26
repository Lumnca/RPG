import playmoving from "../start/playmoving";

export default class npc1 extends Laya.Sprite {
    constructor() { 
        super(); 
        /** @prop {name:player, tips:"节点对象", type:Node}*/
        var player = null;
        /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
        let intType = 1000;
        /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
        let numType = 1000;
        /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
        let strType = "hello laya";
        /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
        let boolType = true;
        // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0; 
        
    }
    onAwake(){
        this.on(Laya.Event.MOUSE_DOWN, this, this.select);
        this.getChildByName('logn').play();
        this.playbody = this.parent.getChildByName('body');
    }
    
    select(e){
        if((Math.abs(this.x-this.playbody.x)<100)&&(Math.abs(this.y-this.playbody.y)<100)){
            this.getChildByName('logn').stop();
            this.getChildByName('logn').visible=false;

            this.parent.getChildByName("body").stopMove();
           
            this.off(Laya.Event.MOUSE_DOWN,this,this.select);
            Laya.stage.offAll(Laya.Event.RIGHT_MOUSE_DOWN);
            Laya.timer.frameLoop(1,this,abs);
            function abs(){
                this.parent.getChildByName("body").y-=0.0098;
            }
            var player = this.parent.getChildByName('says').getChildByName('player');
            var npc1 =  this.parent.getChildByName('says').getChildByName('npc1');
            var sayBody =  this.parent.getChildByName('says');
            var txt = this.parent.getChildByName('says').getChildByName('say').getChildAt(0).getChildAt(0);
            
            Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.sayChange,[0,txt]);
            sayBody.visible = true;
        }
    }
    sayChange(x,txt){
        if(x==0){
            txt.text='村长：我是这个地方的村长';    
        }
        else if(x==1){
            txt.text='村长：也是作为游戏辅导者';
        }
        else if(x==2){
            txt.text='村长：这个游戏没有剧情，也没有目标';
        }
        else if(x==3){
            txt.text='村长：不过你先帮我送给张菲燕一份生日礼物';
        }
        else if(x==4){
            txt.text='村长：就在旁边的屋子里面。';
        }
        else if(x==5){
            this.parent.getChildByName('says').visible = false;
            this.parent.getChildByName("body").onAwake();
        }
        x = x+1;
        Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.sayChange,[x,txt]);
    }
    onEnable() {
    }

    onDisable() {
        console.log('输出');
    }
}