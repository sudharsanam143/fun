// function come(){
//     if(checkbox==true)
//      console.log('hi');
// }
const array=['stone','paper','sisser'];
let s1=0,s2=0;
function come(id){
    if(s1>=10 || s2>=10){
        alert('you will restart the game again');
        return 0;
    }
    for (var i = 1;i <= 3; i++)
    {
        document.getElementById(i-1).checked = false;
        document.getElementById('random'+i).checked=false;
    }
   document.getElementById(id).checked = true;
   //console.log(array[id]);
   let value=Math.floor(Math.random()*3+1);
   //console.log(array[value-1]);
   document.getElementById('random'+value).checked=true;
  if((array[id]=='stone' && array[value-1]=='paper')||(array[id]=='paper' && array[value-1]=='stone')){
    if(array[id]=='stone'){
    s2=s2+1;
    document.getElementById('us').innerHTML=s1;
    document.getElementById('ra').innerHTML=s2;
    }
   //(array[id]=='stone')? document.getElementById('us').innerHTML=s1: document.getElementById('ra').innerHTML+=1;
    if(array[id]=='paper'){
        s1=s1+1;
        document.getElementById('us').innerHTML=s1;
        document.getElementById('ra').innerHTML=s2;
        }
  }
  if((array[id]=='stone' && array[value-1]=='sisser')||(array[id]=='sisser' && array[value-1]=='stone')){
    if(array[id]=='stone'){
        s1=s1+1;
        document.getElementById('us').innerHTML=s1;
        document.getElementById('ra').innerHTML=s2;
        }
    if(array[id]=='sisser'){
        s2=s2+1;
        document.getElementById('us').innerHTML=s1;
        document.getElementById('ra').innerHTML=s2;
        }
  }
  if((array[id]=='paper' && array[value-1]=='sisser')||(array[id]=='sisser' && array[value-1]=='paper')){
    if(array[id]=='paper'){
        s2=s2+1;
        document.getElementById('us').innerHTML=s1;
        document.getElementById('ra').innerHTML=s2;
        }
    if(array[id]=='sisser'){
        s1=s1+1;
        document.getElementById('us').innerHTML=s1;
        document.getElementById('ra').innerHTML=s2;
        }
  }
  if(s1==10 || s2==10){
      (s1==10)?document.getElementById('result').innerHTML="You WON the match":document.getElementById('result').innerHTML='You LOST the match';
  }
}
function enter(){
    for (var i = 1;i <= 3; i++)
    {
        document.getElementById(i-1).checked = false;
        document.getElementById('random'+i).checked=false;
    }
    s1=0,s2=0;
    document.getElementById('result').innerHTML="";
    document.getElementById('us').innerHTML=s1;
    document.getElementById('ra').innerHTML=s2;
}


