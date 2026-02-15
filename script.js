class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    attack(){
        let attackType;
        switch(this.type){
            case "mago":
                attackType = "magia";
                break;
            
            case "guerreiro":
                attackType = "espada";
                break;
            
            case "monge":
                attackType = "artes marciais";
                break;

            case "ninja":
                attackType = "shuriken";
                break;
            
            default:
                attackType = "Classe desconhecida";
        }
    console.log(`${this.name} ataca com ${attackType}`);
    }
}

let hero1 = new hero("Kratos", 250, "guerreiro");

console.log(hero1);
hero1.attack(); 
