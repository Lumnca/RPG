export default class loadStart extends Laya.Sprite {

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
        Laya.Scene.open("Sence1.scene");
        this.load = 0;
        this.getChildByName('loading').value =  0;
        this.getChildByName('txt').text = '正在加载场景资源      '+this.load+'%';
        Laya.timer.frameLoop(50,this,this.loading);
       
    }
    loading(){
        this.load+=Math.floor(Math.random()*5+1);
        this.getChildByName('loading').value = this.load/100;
        this.getChildByName('txt').text = '正在加载场景资源       '+this.load+'%';
        if(this.load>=100){
            this.load = 100;
            this.visible = false;
            Laya.timer.clear(this,this.loading);
            Laya.Scene.open("Sence1.scene");
        }
        else if(this.load>0&&this.load<50){
            this.getChildByName('txt').text = '生成舞台中 '+this.load+'%';
        }
        else if(this.load>=50&&this.load<100){
            this.getChildByName('txt').text = '生成人物信息中  '+this.load+'%';
        }
        else{
            
        }
    }
    onEnable() {
    }

    onDisable() {
    }
}