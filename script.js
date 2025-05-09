let el = document.getElementById("level");
let c=0;
while(el.parentNode !=null){
   c++;
   el = el.parentNode;
}
alert(`The level of the element is: ${c}`)