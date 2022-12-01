const JCG = require("./src/runner");
const fs = require("fs")
async function main(){

  // # Optional, specify a list of arguments
  // JCG.setFiles(['C:\\Users\\86132\\WebstormProjects\\untitled3\\webpackBundle\\src\\main.js',"C:\\Users\\86132\\WebstormProjects\\untitled3\\webpackBundle\\src\\mathUtils.js"]) 
  console.time("start");

  fs.readFile("D:\\js项目\\npm.txt",'utf8',function(err,dataStr){
    if(err){
      return console.log('读取文件失败！'+err.message)
    }
    st = dataStr.split('\n' )
    for(var i = 0 ;i<20;i++){
      
      var t1 = new Date().getTime();    
      var t2 = t1;  
      t1 = process.uptime()*1000;
      var name = st[i].substring(0,st[i].length-1);
      // const args =  {strategy:'ONESHOT',cg:true,output:['D:\\js项目\\unCompress\\'+name+'.json']};
      // JCG.setArgs(args); 
      if(name[0] == '@'){
        var index = name.indexOf('/');
        var prename = name.substring(0,index);
        var subname = name.substring(index+1,name.length);
        const args =  {strategy:'ONESHOT',cg:true,output:['D:\\js项目\\unCompress\\'+subname+'.json']};
        JCG.setArgs(args);
        JCG.setFiles(['D:\\js项目\\unCompress\\'+subname]);
      }
      else{
        const args =  {strategy:'ONESHOT',cg:true,output:['D:\\js项目\\unCompress\\'+name+'.json']};
        JCG.setArgs(args);
        JCG.setFiles(['D:\\js项目\\unCompress\\'+name]);
      } 
      JCG.setConsoleOutput(true);                     
      JCG.build();   
      t2 = process.uptime()*1000;
      var timeval = t2 - t1;
      if(name[0]=='@'){
        fs.writeFile('D:\\js项目\\unCompress\\'+subname+'\\time.txt', timeval.toString(), function(err) {
          if(err) {
            return console.log(err);
          }
          console.log("File saved successfully!");
        });
      }
      else{
        fs.writeFile('D:\\js项目\\unCompress\\'+name+'\\time.txt', timeval.toString(), function(err) {
          if(err) {
            return console.log(err);
          }
          console.log("File saved successfully!");
        });
      }

    }
  })
}
main()