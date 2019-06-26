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
        emety.hp = 10000;
        emety.sp = 100;
        emety.mp = 2000;
        emety.ssp = 0;
        emety.shp = 10000;
        emety.smp = 2000;
        emety.gj = 110;
        emety.fy = 60;
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
    if(window.emetys.start)
    {

            window.emetys.start = false;
            
            Laya.timer.frameOnce(200,this,attShow);

            function attShow(){

                this.parent.parent.getChildByName('infors').getChildByName('txt').text =window.emetys.name+  '使用了普通攻击';

                var hurt = Math.floor((Math.random()*2000+window.emetys.gj)*(1-(window.player.fy+window.player.battlefy)/1000));

                window.player.shp-=hurt;

                if(window.player.shp<=0){
                    window.player.shp = 0;
                }

                window.player.ssp+=2;
                this.parent.parent.getChildByName('infors').getChildByName('txt').text = window.emetys.name+ '对你造成了' +hurt + '点伤害';
                Laya.SoundManager.playSound('../laya/assets/music/playBattle/attack.mp3');

                Laya.timer.frameOnce(100,this,this.stop);

                    if(hurt<500){
                        this.parent.parent.getChildByName('player').getChildByName('attacked').visible = true;
                        this.parent.parent.getChildByName('player').getChildByName('attacked').play(0,true,'attacked');
                    }
                    else if(hurt>=500&&hurt<1000){
                        window.emetys.smp-=41;
                        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
                        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,true,'skill3');
                    }
                    else if(hurt>=1000&&hurt<1500){
                        window.emetys.smp-=64;
                        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
                        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,true,'skill2');
                    }
                    else if(hurt>=1500&&hurt<1800){
                        window.emetys.smp-=53;
                        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
                        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,true,'skill5');
                    }
                    else{
                        window.emetys.smp-=61;
                        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = true;
                        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').play(0,true,'skill9');
                    }
                
            }
        }
        else{
            
        }
    }
    stop(){
        this.parent.parent.getChildByName('globalSkill').getChildByName('skill1').visible = false;
        if(window.player.shp<=0){
            window.player.shp = 0;
            Laya.timer.frameOnce(100,this,this.perWiner);
        }
        else{
            this.parent.parent.getChildByName('player').getChildByName('attacked').gotoAndStop(5);
            this.parent.parent.getChildByName('player').getChildByName('attacked').visible = false;
            this.parent.parent.getChildByName('Select').getChildByName('playAttack').onAwake();
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
    perWiner(){
        Laya.Scene.close('Battle.scene');
        window.npcInfor = 2;
        Laya.Scene.open('Sence1.scene');
    }
    isAttacked(){
        if(window.player.start===true){
            window.player.start = false;
            this.parent.parent.getChildByName('Select').getChildByName('playAttack').attackEmety(window.skillType);
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