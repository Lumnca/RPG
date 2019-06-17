import player from "../battle/player";

export default class playmoving extends Laya.Sprite{
     
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
        //this.getChildByName("player").play();
        this.getChildByName("player").gotoAndStop(3);
        Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN,this,this.move,[this.getChildByName("player"),this]);
        //Laya.timer.frameLoop(10,this,this.sit);


        if(window.playerInfor===1){
            this.x = 1055;
            this.y = 285;
            window.playerInfor = 0;
        }
        else if(window.playerInfor===2){
            this.x = window.player.x;
            this.y =window.player.y;
        }
    }
    sit(){
        //console.log("playAni:"+this.getChildByName('player').x+","+this.getChildByName('player').y);
        //console.log("body:"+this.x+","+this.y)
    }
    move(roleAni,body)
    {
        //获取点击坐标与图像位置
        var mouseX = Laya.stage.mouseX;
        var mouseY = Laya.stage.mouseY;
        var playX = body.x;
        var playY = body.y;  

        //清除原来动画，重新播放，为了重复点击鼠标
        roleAni.gotoAndStop(3);
        Laya.timer.clear(this,this.upMove);
        Laya.timer.clear(this,this.downMove);
        Laya.timer.clear(this,this.leftMove);
        Laya.timer.clear(this,this.rightMove);

        //根据鼠标差来设置行走样式动画事件
        if(mouseX>playX&&mouseY>playY){
            roleAni.play(0,true,"down");
            Laya.timer.frameLoop(1,this,this.downMove,[mouseX,mouseY,playX,playY,roleAni,body]);
        }
        else if(mouseX>playX&&mouseY<playY){
            roleAni.play(0,true,"right");
            Laya.timer.frameLoop(1,this,this.rightMove,[mouseX,mouseY,playX,playY,roleAni,body]);
        }
        else if(mouseX<playX&&mouseY<playY){
            roleAni.play(0,true,"top");
            Laya.timer.frameLoop(1,this,this.upMove,[mouseX,mouseY,playX,playY,roleAni,body]);
            
        }
        else if(mouseX<playX&&mouseY>playY){
            roleAni.play(0,true,"left");
            Laya.timer.frameLoop(1,this,this.leftMove,[mouseX,mouseY,playX,playY,roleAni,body]);
        }
    }

        //-----------播放动画事件已经动画处理，内部包含行走方式与计算方式---------------------
    downMove(mouseX,mouseY,playX,playY,roleAni,body){ 

        var x = Math.abs(mouseX-playX);
        var y = Math.abs(mouseY-playY) ;
        var s = Math.sqrt(x*x+y*y);
        body.x += x/s;
        body.y += y/s;
        if(body.x>mouseX && body.y>mouseY){
            Laya.timer.clear(this,this.downMove);
            roleAni.gotoAndStop(7)
        }
    }

    upMove(mouseX,mouseY,playX,playY,roleAni,body){ 

        var x = Math.abs(mouseX-playX);
        var y = Math.abs(mouseY-playY) ;
        var s = Math.sqrt(x*x+y*y);
        body.x -= x/s;
        body.y -= y/s;
        if(body.x<mouseX && body.y<mouseY){
            Laya.timer.clear(this,this.upMove);
            roleAni.gotoAndStop(7)
        }
    }

     leftMove(mouseX,mouseY,playX,playY,roleAni,body){ 

        var x = Math.abs(mouseX-playX);
        var y = Math.abs(mouseY-playY) ;
        var s = Math.sqrt(x*x+y*y);
        body.x -= x/s;
        body.y += y/s;
        if(body.x<mouseX && body.y>mouseY){
            Laya.timer.clear(this,this.leftMove);
            roleAni.gotoAndStop(7)
        }
    }



     rightMove(mouseX,mouseY,playX,playY,roleAni,body){ 

        var x = Math.abs(mouseX-playX);
        var y = Math.abs(mouseY-playY) ;
        var s = Math.sqrt(x*x+y*y);
        body.x += x/s;
        body.y -= y/s;
        if(body.x>mouseX && body.y<mouseY){
            Laya.timer.clear(this,this.rightMove);
            roleAni.gotoAndStop(7)
        }
    }
    stopMove(){
        this.getChildByName("player").gotoAndStop(3);
        Laya.timer.clear(this,this.upMove);
        Laya.timer.clear(this,this.downMove);
        Laya.timer.clear(this,this.leftMove);
        Laya.timer.clear(this,this.rightMove);   
    }
    onEnable() {

    }

    onDisable() {
    }
}