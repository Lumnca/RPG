export default class dataGame extends Laya.Sprite {

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
        this.show = this.getChildAt(0);
        this.input = this.getChildAt(2).getChildAt(0);
        this.sumbit = this.getChildAt(1);
        //this.show.text = 'sssss';
        //this.input.text = '';
        this.sumbit.on(Laya.Event.MOUSE_DOWN,this,this.result);
    }
    result(){
        if(this.input.text=='0000'){
            this.show.text = '你确定有这个日期?';
        }
        else if(this.input.text=='0317'){
            this.show.text = '村长知道吗？这是他的生日哦';
        }
        else if(this.input.text=='0401'){
            this.show.text = '刘某人是这个沙雕';
        }
        else if(this.input.text=='0527'){
            this.show.text = '生日快乐呀！永远的18岁。嘻嘻嘻^_^';
        }
        else if(this.input.text=='0629'){
            this.show.text = '生日快乐呀！你很可爱，你很优秀，要开心哦^_^';
        }
        else if(this.input.text=='1314'){
            this.show.text = '一生一世？';
        }
        else if(this.input.text=='0520'){
            this.show.text = '520？';
        }
        else if(this.input.text=='6666'){
            this.show.text = '都说了叫你输入日期，你还真以为不输入日期可以？6个锤子';
        }
        else if(this.input.text=='9999'){
            this.show.text = '9个锥子，输入日期';
        }
        else if(this.input.text=='0318'){
            this.show.text = '--------GettingGifts---------';
        }
        else{
            this.show.text = '没有特别的信息，换一个试试吧';
        }
        this.input.text = '';
    }
    onEnable() {
    }

    onDisable() {
    }
}