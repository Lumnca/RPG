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
        //播放音效
        Laya.SoundManager.playSound('../laya/assets/music/playBattle/attack.mp3');
        //攻击动画
        this.parent.parent.getChildByName("player").getChildByName('ani').play(0,false);

        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;

    
        this.parent.parent.getChildByName('pers').getChildByName('attacked').visible = true;
        this.parent.parent.getChildByName('pers').getChildByName('attacked').play(0,true,'attacked');

        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,false);


        Laya.timer.frameOnce(100,this,stop);

        function stop(){
            this.parent.parent.getChildByName('pers').getChildByName('attacked').gotoAndStop(5);
            this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = false;
            var hurt = Math.floor(Math.random()*99+1);
            window.emetys.shp -= hurt;
            window.emetys.ssp += 8;
            this.txt.text = '你对'+window.emetys.name + '造成了' +hurt + '点伤害';
            Laya.timer.frameOnce(100,this,this.aaa);
           
        }
        window.emetys.start = true;

        this.parent.parent.getChildByName('pers').getChildByName('per1').attackPlayer();
    }
    onEnable() {
    }

    onDisable() {
    }
    aaa(){
        this.txt.text = '对方回合';
    }
}