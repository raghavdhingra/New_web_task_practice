// Nav_Bar ////////////////////////////////////////////////////
const pg_1 = document.getElementById('pg_1');
const pg_2 = document.getElementById('pg_2');
var x=1;
const pg_1_click = () => {
    pg_1.style.opacity=1;
    pg_1.style.zIndex=10;
    pg_2.style.opacity=0;
    pg_2.style.zIndex=1;
    document.getElementById('btn_1').className='topelmt active';
    document.getElementById('btn_2').className='topelmt';
}
const pg_2_click = () => {
    pg_1.style.opacity=0;
    pg_1.style.zIndex=1;
    pg_2.style.opacity=1;
    pg_2.style.zIndex=10;
    add_2();
    document.getElementById('btn_1').className='topelmt';
    document.getElementById('btn_2').className='topelmt active';
}
///////////////////////////////////////////////////////////////

const txt = document.getElementById('text_field');
const txt_at_time = document.getElementById('at_time');
const counting = document.getElementById('number');
var arr = ['Example_1','Example_2'];
txt.onkeyup = () => {
    txt_at_time.innerHTML = txt.value;
}
txt.onkeydown = () => {
    txt_at_time.innerHTML = txt.value;
}
const count = () => {
    var num = arr.length;
    counting.innerHTML = num;
}
const iterate = () => {
    var i = arr.length-1;
    var new_elmt = document.createElement('div');
    new_elmt.id=arr[i];
    new_elmt.className='new';
    new_elmt.innerHTML=arr[i];
    document.getElementById('new_element').appendChild(new_elmt);
}
const clear_1 = () => {
    txt.value='';
    txt_at_time.innerHTML='';
}
const add = () => {
    arr.push(txt.value);
    count();
    clear_1();
    x+=1;
    iterate();
}
const add_2 = () => {
    if (x>=2){
    var i;
    for (i=2;i<arr.length;i++) {
            var new_elmt = document.createElement('div');
            new_elmt.id=arr[i];
            new_elmt.className='new_2';
            new_elmt.innerHTML=arr[i];
            document.getElementById('main_container_2').appendChild(new_elmt);
        }
        x=1;
    }
}