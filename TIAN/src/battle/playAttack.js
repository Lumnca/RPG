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
        this.parent.getChildByName('skill1').visible = true;
        this.parent.getChildByName('skill2').visible = true;
        this.parent.getChildByName('skill3').visible = true;
        this.parent.getChildByName('skill4').visible = true;
        this.parent.getChildByName('skill5').visible = true;
        this.parent.getChildByName('skill6').visible = true;
        this.once(Laya.Event.MOUSE_DOWN,this,this.attack);
        this.txt = this.parent.parent.getChildByName('infors').getChildByName('txt');
        this.pers = this.parent.parent.getChildByName('pres');
        //this.txt.text += ' 你的回合';

    }
    attack(){
        this.txt.text = '请选择目标';
        this.visible = false;
        this.parent.getChildByName('playDefense').visible = false;
        this.parent.getChildByName('skill1').visible = false;
        this.parent.getChildByName('skill2').visible = false;
        this.parent.getChildByName('skill3').visible = false;
        this.parent.getChildByName('skill4').visible = false;
        this.parent.getChildByName('skill5').visible = false;
        this.parent.getChildByName('skill6').visible = false;
        window.player.start = true;
    }
    attackEmety(e){
        var hurt = 0;
        if(e===0){
            this.txt.text = '使用普通攻击';
            hurt = Math.floor( (Math.random()*100 + window.player.gj ) * ( 1-window.emetys.fy/1000));
           this.attack1();
        }
        else if(e===1){
            this.txt.text = '使用雷雨风暴';
            hurt = Math.floor( (Math.random()*1000 + window.player.gj*2 ) * ( 1-window.emetys.fy/1000));
            window.skillType = 0;
            this.skillAttack1();

        }
        else if(e===2){
            this.txt.text = '使用流星零落';
            hurt = Math.floor( (Math.random()*1000 + window.player.gj*3 ) * ( 1-window.emetys.fy/1000));
            window.skillType = 0;
            this.skillAttack2();

        }
        else if(e===3){
            this.txt.text = '使用绝对石封';
            hurt = Math.floor( (Math.random()*1700 + window.player.gj*3 ) * ( 1-window.emetys.fy/1000));
            window.skillType = 0;
            this.skillAttack3();

        }
        else if(e===4){
            this.txt.text = '使用远古石剑';
            hurt = Math.floor( (Math.random()*2000 + window.player.gj*4 ) * ( 1-window.emetys.fy/1000));
            window.skillType = 0;
            this.skillAttack4();

        }
        else if(e===5){
            this.txt.text = '使用虹光旋风';
            hurt = Math.floor( (Math.random()*1000 + window.player.gj*8 ) * ( 1-window.emetys.fy/1000));
            window.skillType = 0;
            this.skillAttack5();

        }      
        else if(e===6){
            this.txt.text = '使用流光电闪';
            hurt = Math.floor( (Math.random()*1500 + window.player.gj*12 ) * ( 1-window.emetys.fy/1000));
            window.skillType = 0;
            this.skillAttack6();
        }
        else{
            this.txt.text = '使用普通攻击';
            hurt = Math.floor( (Math.random()*100 + window.player.gj ) * ( 1-window.emetys.fy/1000));
           this.attack1();  
        }
        Laya.timer.frameOnce(100,this,stop,[hurt]);

        function stop(hurt){

            this.parent.parent.getChildByName('pers').getChildByName('attacked').gotoAndStop(5);
            this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = false;

            window.emetys.shp -= hurt;

            window.emetys.ssp += 2;
            this.txt.text = '你对'+window.emetys.name + '造成了' +hurt + '点伤害';
            
            if( window.emetys.shp<=0){
                window.emetys.shp = 0;
                Laya.timer.frameOnce(100,this,this.playerWiner);
            }
            else{
                Laya.timer.frameOnce(100,this,this.end);
            }
           
           
        }
        
    }
    //普通攻击
    attack1(){
        //播放音效
        Laya.SoundManager.playSound('music/playBattle/attack.mp3');
        //攻击动画
        this.parent.parent.getChildByName("player").getChildByName('ani').play(0,false);
        this.parent.parent.getChildByName('pers').getChildByName('attacked').visible = true;
        this.parent.parent.getChildByName('pers').getChildByName('attacked').play(0,true,'attacked');
    }
    skillAttack1(){
        Laya.SoundManager.playSound('music/playBattle/skill1.mp3');
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,false,'skill1');
    }
    skillAttack2(){
        Laya.SoundManager.playSound('music/playBattle/zhu.mp3');
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,false,'skill4');
    }
    skillAttack3(){
        Laya.SoundManager.playSound('music/playBattle/shi.mp3');
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,false,'skill8');
    }
    skillAttack4(){
        Laya.SoundManager.playSound('music/playBattle/shi.mp3');
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,false,'skill7');
    }
    skillAttack5(){
        Laya.SoundManager.playSound('music/playBattle/guang.mp3');
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,false,'skill6');
    }
    skillAttack6(){
        Laya.SoundManager.playSound('music/playBattle/lei.mp3');
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,false,'skill10');
    }
    playerWiner(){
        Laya.Scene.close('Battle.scene');
        window.player.positionInfor = 1;
        window.npcInfor = 1;
        Laya.Scene.open('Sence1.scene');
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