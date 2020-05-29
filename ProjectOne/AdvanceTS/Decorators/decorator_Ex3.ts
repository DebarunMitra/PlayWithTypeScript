let mouse = function(color:string, wired:boolean){
    return function(target:any){ //curring function
        target.mouse = {
            color: color,
            wired: wired
        };
    }
}

@mouse('blue', true)
class Computer{
    static mouse: any;

}

console.log(`My Computer mouse is ${Computer.mouse.wired?'wired':'wireless'} with ${Computer.mouse.color} light.`);
