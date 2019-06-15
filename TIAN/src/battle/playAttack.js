export default class playAttack extends Laya.Sprite {

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
        this.visible = true;
        this.parent.getChildByName('playDefense').visible = true;
        this.once(Laya.Event.MOUSE_DOWN,this,this.attack);
        this.txt = this.parent.parent.getChildByName('infors').getChildByName('txt');
        this.pers = this.parent.parent.getChildByName('pres');
        //this.txt.text += ' 你的回合';

    }
    attack(){
        this.txt.text = '请选择目标';
        this.visible = false;
        this.parent.getChildByName('playDefense').visible = false;
        window.player.start = true;
    }
    attackEmety(){
        var hurt = 0;
        if(window.player.shp<120){
            this.txt.text = '使用绝命一击';
            hurt = Math.floor( (Math.random()*200 + window.player.gj*5 ) * ( 1-window.emetys.fy/1000));
            this.skillAttack1();
        }
        else{
            this.txt.text = '使用普通攻击';
            this.attack1();
            hurt = Math.floor( (Math.random()*70 + window.player.gj ) * ( 1-window.emetys.fy/1000));
        }
        Laya.timer.frameOnce(100,this,stop,[hurt]);

        function stop(hurt){
            this.parent.parent.getChildByName('pers').getChildByName('attacked').gotoAndStop(5);
            this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = false;
            window.emetys.shp -= hurt;
            window.emetys.ssp += 8;
            this.txt.text = '你对'+window.emetys.name + '造成了' +hurt + '点伤害';
            Laya.timer.frameOnce(100,this,this.end);
           
        }
        
    }
    //普通攻击
    attack1(){
        //播放音效
        Laya.SoundManager.playSound('../laya/assets/music/playBattle/attack.mp3');
        //攻击动画
        this.parent.parent.getChildByName("player").getChildByName('ani').play(0,false);
        this.parent.parent.getChildByName('pers').getChildByName('attacked').visible = true;
        this.parent.parent.getChildByName('pers').getChildByName('attacked').play(0,true,'attacked');
    }
    skillAttack1(){
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,false);
    }
    onEnable() {
    }

    onDisable() {
    }
    end(){
        this.txt.text = '对方回合';
        window.emetys.start = true;
        this.parent.parent.getChildByName('pers').getChildByName('per1').attackPlayer();
    }
}