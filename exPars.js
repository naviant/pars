var fs = require('fs');
// const cheerio=require('cherio');
const file = fs.readFileSync('pars/example.html','utf-8');
function search(xPath,file){
    xPath=xPath.split('/');
    let pos=0;
    for(tag of xPath){
        n=tag.indexOf('[')
        if(n==-1){
            tag='<'+tag+'>';
            pos=file.indexOf(tag, pos);
        }
        else{
            tag=tag.slice(0,n);
            n=+tag.slice(n+1,-1);
            pos=file.indexOf(tag, pos);
            for(let i=1;i<n;i++){
                pos=deepTag();
            }
            
        }
    }

}
function deepTag(){
    pos=file.indexOf(tag,pos);
    return pos
}
 1+1

 /html/body/div[2]/div[2]/div