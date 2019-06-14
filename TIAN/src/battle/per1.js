export default class per1 extends Laya.Sprite {

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

        var emety = new Object();
        emety.hp = 1000;
        emety.sp = 100;
        emety.mp = 200;
        emety.ssp = 0;
        emety.shp = 1000;
        emety.smp = 200;
        emety.name = '小商贩';
        emety.start = false;
        window.emetys = emety;


        this.getChildByName('name').text = window.emetys.name;
        this.getChildByName('hp').getChildByName('hptxt').text ='命:'+ window.emetys.shp+'/'+ window.emetys.hp;
        this.getChildByName('mp').getChildByName('mptxt').text ='灵:'+ window.emetys.smp+'/'+ window.emetys.mp;
        this.getChildByName('sp').getChildByName('sptxt').text ='怒:'+ window.emetys.ssp+'/'+ window.emetys.sp;
        Laya.timer.frameLoop(1,this,this.showInfor);
        if(this.visible==true){
            this.on(Laya.Event.MOUSE_DOWN,this,this.isAttacked);
            this.on(Laya.Event.MOUSE_OVER,this,this.isChoise,[0]);
            this.on(Laya.Event.MOUSE_OUT,this,this.isChoise,[1]);
        }
    }
    attackPlayer(){
        if(window.emetys.start){
            window.emetys.start = false;
            window.player.start = true;
            this.parent.parent.getChildByName('infors').getChildByName('txt').text = '对方回合';
            this.parent.parent.getChildByName('Select').getChildByName('playAttack').onAwake();
        }
        else{
            
        }
    }
    isChoise(e){
            if(e==0){
                this.getChildByName('is').visible = true;
            }
            else{
                this.getChildByName('is').visible = false;
            }
    }
    isAttacked(){
        if(window.player.start){
            this.parent.parent.getChildByName('Select').getChildByName('playAttack').attackEmety();
        }

    }
    onEnable() {
    }

    onDisable() {
    }
    showInfor(){
        this.getChildByName('name').text = window.emetys.name;
        this.getChildByName('hp').getChildByName('hptxt').text ='命:'+ window.emetys.shp+'/'+ window.emetys.hp;
        this.getChildByName('mp').getChildByName('mptxt').text ='灵:'+ window.emetys.smp+'/'+ window.emetys.mp;
        this.getChildByName('sp').getChildByName('sptxt').text ='怒:'+ window.emetys.ssp+'/'+ window.emetys.sp;      
    }
}