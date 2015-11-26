 /*将按钮转到P标签成为字符串*/

 function process(pro) {
     document.getElementById('equations').innerHTML = document.getElementById('equations').innerHTML + pro;
 }
 /*将字符串转换成式子，并计算结果*/
 function answered() {

     var i = document.getElementById('equations').innerHTML;
     i = eval(i);
     document.getElementById('equations').innerHTML = "(" + document.getElementById('equations').innerHTML + ")";
     document.getElementById('answerid').innerHTML = parseFloat(i.toFixed(12));
     var z = document.getElementById('answerid').innerHTML
     //解决当除数为0时，计算结果为Infinity
     if (z == "Infinity") {
         alert("除数不能为0哦~重新计算吧~");
         document.getElementById('equations').innerHTML = '';
         document.getElementById('answerid').innerHTML = 0;
     };
 }

 /*清屏*/
 function Eli() {
     document.getElementById('equations').innerHTML = '';
     document.getElementById('answerid').innerHTML = 0;
 }

 /*退格*/
 function del() {
     var s = document.getElementById('equations').innerHTML;
     s = s.substring(0, s.length - 1)
     document.getElementById('equations').innerHTML = s;

 }
 /*关机*/
 function off() {
     window.close()
 }
 /*cos sin  tan*/
 function cos() {
     var i = document.getElementById('equations').innerHTML;
     i = eval(i);
     var z = parseFloat(i.toFixed(12));
     z = Math.cos(z);
     document.getElementById('answerid').innerHTML = z;
 }

 function sin() {
     var i = document.getElementById('equations').innerHTML;
     i = eval(i);
     var z = parseFloat(i.toFixed(12));
     z = Math.sin(z);
     document.getElementById('answerid').innerHTML = z;
 }

 function tan() {
     var i = document.getElementById('equations').innerHTML;
     i = eval(i);
     var z = parseFloat(i.toFixed(12));
     z = Math.tan(z);
     document.getElementById('answerid').innerHTML = z;
 };
