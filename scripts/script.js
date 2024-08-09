let nominal = 1;/*прибыль за нажатие*/
let ran = document.getElementById("rank");/*изменение ранга*/
let balance = document.getElementById("per");/*энергии осталось*/
let gem = document.querySelector('.gem-cost');/*количество трофеев*/
let button = document.getElementById('clbut');/*главная кнопка*/
let count = parseFloat(gem.innerHTML);
let perr = parseFloat(balance.innerHTML);
let nbust = document.getElementById("nbust3");/*первый буст*/
let nbustt = document.getElementById("nbust2");/*второй буст*/


/*ГЛАВНЫЙ ЭКРАН*/

/* Работа кликера */
button.addEventListener('click', 
function() {
  count += nominal; /*начисление трофеев при нажатии*/
    if (parseFloat(balance.innerHTML) >= nominal) {
      gem.innerHTML = count;
      balance.innerHTML = parseFloat(balance.innerHTML) - nominal;
      if (count < 5000)  {
       ran.setAttribute("src","styles/img/null.png");
     } else if (count < 10000) {
       ran.setAttribute("src","styles/img/rank/1.png");
     } else if (count < 20000) {
       ran.setAttribute("src","styles/img/rank/2.png");
     } else if (count < 30000) {
       ran.setAttribute("src","styles/img/rank/3.png");
     } else if (count < 40000) {
       ran.setAttribute("src","styles/img/rank/4.png");
     } else if (count < 60000) {
       ran.setAttribute("src","styles/img/rank/5.png");
     } else if (count < 80000) {
       ran.setAttribute("src","styles/img/rank/6.png");
     } else if (count < 100000) {
       ran.setAttribute("src","styles/img/rank/7.png");
     } else if (count < 150000) {
       ran.setAttribute("src","styles/img/rank/8.png");
     } else if (count < 300000) {
       ran.setAttribute("src","styles/img/rank/9.png");
     } else if (count < 500000) {
       ran.setAttribute("src","styles/img/rank/10.png");
     } else if (count < 1000000) {
       ran.setAttribute("src","styles/img/rank/11.png");
     } else {
       ran.setAttribute("src","styles/img/rank/12.png");
    }
    }
}
);

/* Кнопка для функционирования буста №1 */
function bustBottom1() {
    document.getElementById('myDialog1').showModal();
}/*открытие окна*/
document.getElementById('cancelButton1').addEventListener('click', function() {
    document.getElementById('myDialog1').close();
});/*закрытие окна*/
document.getElementById('confirmButton1').addEventListener('click', function() {
    if (parseFloat(nbust.innerHTML) > 0) {
     document.body.style.backgroundImage = 'url("styles/img/background/boost.png")'; 
     nominal = nominal * 2;
     button.addEventListener('click', 
         function() {balance.innerHTML = parseFloat(balance.innerHTML) + nominal;});
    setTimeout(function() {
      document.body.style.backgroundImage = '';
     nominal = nominal / 2;
     button.addEventListener('click', 
         function() {balance.innerHTML = parseFloat(balance.innerHTML) - nominal;});
    }, 10000); 
     nbust.innerHTML = parseFloat(nbust.innerHTML) - 1;
    };
     document.getElementById('myDialog1').close()/*выполнение команды: х3 мультитап*/
});


/* Кнопка для функционирования буста №2 */
function bustBottom2() {
    document.getElementById('myDialog2').showModal();
}/*открытие окна*/
document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('myDialog2').close();
});/*закрытие окна*/
document.getElementById('confirmButton').addEventListener('click', function() {
    if ((parseFloat(nbustt.innerHTML) > 0)&&(parseFloat(balance.innerHTML) != 100)) {
     balance.innerHTML = 100;
     nbustt.innerHTML = parseFloat(nbustt.innerHTML) - 1;
    };
     document.getElementById('myDialog2').close()/*выполнение команды: восстановить энергию*/
});



