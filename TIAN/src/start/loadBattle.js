export default class loadBattle extends Laya.Sprite {

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
        
       /* Laya.loader.load("texiao.atlas");
        Laya.loader.load("texiao.png");
        Laya.loader.load("texiao/skill_1.atlas");
        Laya.loader.load("texiao/skill_1.png");
        Laya.loader.load("texiao/skill_10.png");
        Laya.loader.load("texiao/skill_11.png");
        Laya.loader.load("texiao/skill_12.png");
        Laya.loader.load("texiao/skill_13.png");
        Laya.loader.load("texiao/skill_2.atlas");
        Laya.loader.load("texiao/skill_2.png");
        /*Laya.loader.load("../laya/assets/texiao/skill1.png");
        Laya.loader.load("skill_2.atlas");
        Laya.loader.load("skill_2.png");
        Laya.loader.load("skill_3.atlas");
        Laya.loader.load("skill_3.png");
        Laya.loader.load("skill_4.atlas");
        Laya.loader.load("skill_4.png");
        Laya.loader.load("skill_5.atlas");
        Laya.loader.load("skill_5.png");
        Laya.loader.load("skill_6.atlas");
        Laya.loader.load("skill_6.png");
        Laya.loader.load("skill_7.atlas");
        Laya.loader.load("skill_7.png");
        Laya.loader.load("skill_8.atlas");
        Laya.loader.load("skill_8.png");
        Laya.loader.load("skill_9.atlas");
        Laya.loader.load("skill_9.png");
        Laya.loader.load("skill_10.atlas");
        Laya.loader.load("skill_10.png");*/
        //Laya.loader.load("Battle.scene");
        Laya.Scene.open("Battle.scene");
        this.load = 0;
        this.getChildByName('loading').value =  0;
        this.getChildByName('txt').text = '正在加载资源      '+this.load+'%';
        Laya.timer.frameLoop(50,this,this.loading);
       
    }
    loading(){
        this.load+=Math.floor(Math.random()*5+1);
        this.getChildByName('loading').value = this.load/100;
        this.getChildByName('txt').text = '正在加载资源       '+this.load+'%';
        if(this.load>=100){
            this.load = 100;
            this.visible = false;
            Laya.timer.clear(this,this.loading);
            Laya.Scene.open("Battle.scene");
        }
        else if(this.load>0&&this.load<50){
            this.getChildByName('txt').text = 'Make in LayaAir Author lumnca '+this.load+'%';
        }
        else if(this.load>=50&&this.load<100){
            this.getChildByName('txt').text = '加载比较缓慢  '+this.load+'%';
        }
        else{
            
        }
    }
    onEnable() {
    }

    onDisable() {
    }
}