const btn=document.getElementById("btn");
const psw=document.getElementById("Password");
const copy=document.getElementById("copy");

btn.addEventListener('click',()=>{
    let UC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LC="abcdefghijklmnopqrstuvwxyz";
    let no="1234567890";
    let sc="!@#$%^&*()_-=+\"'`~{}[];:><.,/?|\\";
    let password="";
    const length=16;
    let all=UC+LC+no+sc;

    password+=UC[Math.floor(Math.random()*UC.length)];
    password+=LC[Math.floor(Math.random()*LC.length)];
    password+=no[Math.floor(Math.random()*no.length)];
    password+=sc[Math.floor(Math.random()*sc.length)];
    console.log(password);

    while(length>password.length){
        password+=all[Math.floor(Math.random()*all.length)];
    }

    psw.value=password;
})

copy.addEventListener('click',()=>{
    psw.select();
    document.execCommand("copy");
})