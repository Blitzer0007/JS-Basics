class Mobile{
    call(){
        console.log("Calling");
    }

    sms(){
        console.log("send sms");
    }
}

class apple extends Mobile{

    call(){                                 //Method Overriding

        super.call();
        console.log("Calling in Apple");
    }

    gameMode(){
        console.log("Gaming mode");
    }

}

const Mob = new apple();
console.log(Mob.call());
console.log(Mob.gameMode());
console.log(Mob.sms());
