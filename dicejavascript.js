let q;
do{
q=Math.random();
q=q*10;
q=Math.ceil(q);
}while(q>6);
// alert(q);

let diceimage="dice"+q+".png";
let dicenewimage=document.querySelectorAll("img")[0].setAttribute("src",diceimage);


let p;
do{
p=Math.random();
p=p*10;
p=Math.ceil(p);
}while(p>6);
// alert(q);

let diceImage="dice"+p+".png";
let dicenewImage=document.querySelectorAll("img")[1].setAttribute("src",diceImage);

if(q>p)
{
    document.querySelector("h1").innerHTML="player 1 wins!!";
}
else if(q==p)
document.querySelector("h1").innerHTML="draw!!";
else
document.querySelector("h1").innerHTML="player 2 wins!!";