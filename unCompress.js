const JCG = require("./src/runner");
const fs = require("fs")
async function main(){
                            
    console.time("start");
    const args =  {strategy:'ONESHOT',cg:true,output:['D:\\js项目\\unCompress\\vue\\output.json']};
    JCG.setArgs(args); 
    JCG.setFiles(['D:\\js项目\\unCompress\\vue']);
    JCG.setConsoleOutput(true);                     
    JCG.build();
    console.timeEnd("start")   

            
}
main()
