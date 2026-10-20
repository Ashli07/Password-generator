function generatePassword()
{
   let selectlength= parseInt(document.getElementById('length').value);
   let chars="abcdefghijklmnopqrstuvwstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&_"
   let password="";
   for(i=0;i<selectlength;i++){
      let randomIndex=Math.floor(Math.random()*chars.length);
      password=password+chars.charAt(randomIndex);
}
document.getElementById('screen').value=password;
}
function copyPassword()
{
    let screenvalue=document.getElementById('screen').value;
    navigator.clipboard.writeText(screenvalue);
}