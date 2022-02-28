const nb = document.querySelector('.nb');
const pb = document.querySelector('.pb');
const con = document.querySelector('.img');

let c = 0;
let pa = ['a','b','c','d']
nb.addEventListener('click',ns);
pb.addEventListener('click',ps);

function ns(){
    con.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:200,fill:'forwards'})
    if(c==3){
        c = -1
    }
    c ++;
    con.style.backgroundImage = 'url(img/'+ pa[c] +'.png';
}
function ps(){
    con.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:200,fill:'forwards'})
    if(c==0){
        c = 3
    }
    c --;
    con.style.backgroundImage = 'url(img/'+ pa[c] +'.png';
}