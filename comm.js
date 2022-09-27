const {add, sub, multi, div} =require("./calculator")
const {Command} = require("commander");
const program = new Command();

program.
        command("calc")
        .option("-n1, --no1 <number>","",parseInt)
        .option("-n2, --no2 <number>","",parseInt)
        .option("-op, --operation <string>","")
        .action((data,opt)=>{
            if(data.operation==='+'){  
                console.log(add(data.no1,data.no2));
            }
            if(data.operation==='-'){
                console.log(sub(data.no1,data.no2));
            }
            if(data.operation==='*'){
                console.log(multi(data.no1,data.no2));
            }
            if(data.operation==='/'){
                console.log(div(data.no1,data.no2));
            }
        });

        program.parse(process.argv);