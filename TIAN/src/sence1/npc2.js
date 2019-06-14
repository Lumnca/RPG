export default class npc2 extends Laya.Sprite{

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
        this.player = this.parent.getChildByName('says').getChildByName('player');
        this.txt = this.parent.getChildByName('says').getChildByName('say').getChildAt(0).getChildAt(0);
        this.on(Laya.Event.MOUSE_DOWN, this, this.select);
        this.playbody = this.parent.getChildByName('body');
    }
    select(){
        if((Math.abs(this.playbody.x-this.x)<100)&&(Math.abs(this.playbody.y-this.y)<100)){

            this.parent.getChildByName("body").stopMove();
           
            this.off(Laya.Event.MOUSE_DOWN,this,this.select);
            Laya.stage.offAll(Laya.Event.RIGHT_MOUSE_DOWN);
            Laya.timer.frameLoop(1,this,abs);
            function abs(){
                this.parent.getChildByName("body").y-=0.0099;
            }

            var npc1 =  this.parent.getChildByName('says').getChildByName('npc1');
            var sayBody =  this.parent.getChildByName('says'); 

            sayBody.visible = true;
            npc1.visible = false;
            
            Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.sayChange,[0]);
        }
    }
    sayChange(e){
        if(e==0){
            Laya.Scene.open("Battle.scene");
            //this.txt.text = '小商人:'+'小兄弟需要买东西吗？';
        }
        else if(e==1){
           /* this.txt.text = "1:我看看有什么  2:我再想想... (按下数值键选择)";
            this.player.visible = true;

            Laya.stage.off(Laya.Event.KEY_DOWN);
            Laya.stage.once(Laya.Event.KEY_DOWN,this,npcSelect);

            function npcSelect(event){
                var i = event["keyCode"];
                console.log(i);
                if(i==97||i==49){
                    this.parent.getChildByName('says').visible = false;
                    this.parent.getChildByName("body").onAwake();
                    console.log("OK");
                    Laya.stage.on(Laya.Event.KEY_DOWN,this,infor);

                    function infor(e){
                        var i =e["keyCode"];
                        if(i==1){
                            
                        }
                        else if(i==32){
                            Laya.Scene.open("infor.scene");
                        }
                    }
                    
                }
                else if(i==40||i==50){
                    this.parent.getChildByName('says').visible = false;
                    this.parent.getChildByName("body").onAwake();  
                    this.onAwake();    
                }
                else{
                    this.sayChange(1);
                }
            }*/
        }
        e++;
        Laya.stage.once(Laya.Event.MOUSE_DOWN,this,this.sayChange,[e]);
    }
    onEnable() {
    }

    onDisable() {
    }
}