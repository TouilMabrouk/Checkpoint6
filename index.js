


 var increment = document.getElementsByClassName('plus');
 var decrement = document.getElementsByClassName('minus');
 var prices = document.querySelectorAll('.price')
 var unitPrice = document.querySelectorAll('.unitePrice')


 for (let i = 0; i < increment.length; i++) {
     increment[i].addEventListener('click', function increment(plusbtn){
                 var count = plusbtn.target;
                 var parent = count.parentElement;
                 var num =Number(parent.querySelector('p').innerHTML);
                num++
                parent.querySelector('p').innerHTML = num;
                var grandparent = parent.parentElement;
                var tab = grandparent.parentElement;
                var uprc = Number(tab.querySelector('.unitPrice').innerHTML);
                var price = num*uprc;
                tab.querySelector('.price').innerHTML = price
                total()
     })
 }

 for (let i = 0; i < decrement.length; i++) {
     decrement[i].addEventListener('click', function decrement(minusbtn){
         var count1= minusbtn.target
         var parent1 = count1.parentElement;
         var num =Number(parent1.querySelector('p').innerHTML);
         if (num>0) 
        num--
        parent1.querySelector('p').innerHTML = num;
        var grandparent = parent1.parentElement;
        var tab = grandparent.parentElement;
        var uprc = Number(tab.querySelector('.unitPrice').innerHTML);
        var price = num*uprc;
        tab.querySelector('.price').innerHTML = price
        total()
    
     })
 }



 var btnlike = document.querySelectorAll('.like')

  for (let i = 0; i < btnlike.length; i++) {
    btnlike[i].addEventListener('click',btn)
    };
function btn(event){
var tar = event.target;
var parent = tar.parentElement;
if(parent.style.color != "red"){
parent.style.color="red";
}
else{
  parent.style.color = "#424242";
}
}
var btndel = document.querySelectorAll('.delete')
for (let i = 0; i < btndel.length; i++) {
  btndel[i].addEventListener('click',del) 
};



function del(event){
    var dlt = event.target
    var parent = dlt.closest("tr")
    var del1 = Number(parent.querySelector('.price').innerHTML)
    del1 = 0
    parent.querySelector('.price').innerHTML = del1
    parent.querySelector('p').innerHTML = 0
    total()
    };

    function total(){
        var tot = 0;
        for (let i = 0; i < prices.length; i++) {
        
            
         console.log(tot)
        
         tot+=Number(prices[i].innerHTML);
        
         }
         document.querySelector('#total').innerHTML=tot;
    }




