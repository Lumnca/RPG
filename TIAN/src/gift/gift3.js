export default class gift3 extends Laya.Sprite {

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
        this.on(Laya.Event.MOUSE_DOWN,this,this.open);
        this.isUse = false;
        this.play=true
    }
    open(){
        if(window.giftFlag==true&&this.play==true){
            this.play==false;
            if(!this.isUse){
                window.giftSeekNum++;
                this.isUse = true;
            }

            Laya.loader.load("love.part",Laya.Handler.create(this, onAssetsLoaded), null,Laya.Loader.JSON);
		
            function onAssetsLoaded(settings)
            {
                console.log(settings);
                var sp = new Laya.Particle2D(settings);
                sp.emitter.start();
                sp.play();
                Laya.stage.addChild(sp);
        
                sp.x = Laya.stage.width / 2;
                sp.y = Laya.stage.height / 2;
                Laya.timer.once(5000,this,stop,[sp]);
            }
            function stop(sp){
                sp.stop();
                this.play==true
            }
        }

    }
    onEnable() {
    }

    onDisable() {
    }
}