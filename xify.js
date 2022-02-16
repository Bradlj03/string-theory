console.log(xify("Hi There"))

function xify(str){
    let strx= "";
    str.length
for (let count = 0; count < str.length; count++) {
    strx += '*';
}
return strx;
}