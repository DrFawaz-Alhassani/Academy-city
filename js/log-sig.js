const log = document.getElementById('lang');
const mode = document.getElementById('mode');
const lolo = document.getElementById('lolo');
const s = document.getElementById('s');
const ss = document.getElementById('ss');
const ss1 = document.getElementById('ss1');
const ss2 = document.getElementById('ss2');
const cr = document.getElementById('cr');
const cr1 = document.getElementById('cr1');
const fo = document.getElementById("fo");
const fo1 = document.getElementById("fo1");
const body = document.getElementsByClassName('body');
const username = document.getElementById("emi");
const password = document.getElementById("password");


const inputbox = document.querySelectorAll('.inputbox');

  
const box = document.getElementsByClassName('box');
  
function xx(){
for(let bo of body){
  bo.classList.toggle('dark');
}
}

function zz(param) {
  const h2 = document.querySelector('h2');
  
  if (h2.innerText=="Login Form" && log.innerText==="عربية") {
    log.innerText="English"
    h2.innerText="تسجيل الدخول";
    s.innerText="البريد الالكتروني";
    ss.innerText="كلمة المرور";
    mode.innerText="";
    cr1.innerText="لاتمتلك حساب";
    cr.innerText="انشاء حساب جديد";
    fo.innerText="استعادة كلمة المرور";
    fo1.innerText="هل نسيت كلمة المرور";
    lolo.innerText="تسجيل الدخول";
    ss1.innerText="رمز التحقق";
    ss2.innerText="اعادة كتابة كلمة المرور";
  }
  else if(h2.innerText=="تسجيل الدخول" && log.innerText==="English"){
    log.innerText="عربية"
    h2.innerText="Login Form";
    s.innerText="Email";
    ss.innerText="Password";
    cr1.innerText="Do you have account";
    cr.innerText="create account new";
    fo.innerText="Recovery password";
    fo1.innerText="Forget password";
    lolo.innerText="Log-In";
    ss1.innerText="Code";
    ss2.innerText="Repassword";
  }
}


function getpass(param) {
  for(var inp of inputbox){
    
    inp.classList.remove('inputbox')
    for(boo of box){
      boo.classList.add('show');
    }
  }
  
}

let nave = document.getElementById("navigation");

let msgcode= document.querySelector("#navigation #p");
function loginform(param) {
  if (username.value === "admin@fa.com" && password.value === "1234") {
    nave.style.opacity=".9";
    nave.style.top="320px";
    msgcode.innerText="بيانات الدخول صحيحة سيتم نقلك للرئيسية";
    window.setTimeout(()=>{
      location.href="index.html";
    },6000);
  } else {
    nave.style.opacity=".9";
    nave.style.top="320px";
    msgcode.innerText="بيانات الدخول غير صحيحة سيتم تحديث الصفحة بعد ثوان ";
    window.setTimeout(()=>{
      location.reload();
    },6000);
  }
}
