console.log("connected");
var hidden_panel = document.getElementById('panel');
var ham = document.querySelector('.ham');
var cross = document.querySelector('.cross');
var page_1 = document.querySelector('.page-1');
var contact = document.getElementById('contact');
var contacts = document.getElementById('contacts');
var home = document.getElementById('home');
var homes = document.getElementById('homes');
var about = document.getElementById('about');
var abouts = document.getElementById('abouts');
var product = document.getElementById('product');
var products = document.getElementById('products');
var happy=document.querySelector('.happy');
var sad=document.querySelector('.sad');

hidden_panel.classList.add('hidden');
page_1.classList.add('downward');
cross.classList.add('hide');
ham.addEventListener('click', function(){
    hidden_panel.classList.remove('hidden');
    hidden_panel.classList.add('visible');
    ham.classList.add('hide');
    cross.classList.remove('hide');
});

cross.addEventListener('click', function (){
    hidden_panel.classList.remove('visible');
    hidden_panel.classList.add('hidden');
    cross.classList.add('hide');
    ham.classList.remove('hide');
});


//Sending Email Work
var sendMailBtn = document.querySelector('#sendMailBtn');
var sendMail = async (e)=>{
    e.preventDefault();
    let name = document.querySelector('.fullname>input').value;
    let subject = document.querySelector('.subject>input').value;
    let about = document.querySelector('.about>textarea').value;
    let mail = "lifconsteel@outlook.com";
    name = name.split(' ').join('%20');
    subject = subject.split(' ').join('%20');
    about = about.split(' ').join('%20');
    about = about.split('\n').join('%0D%0A');
    location.assign("mailto:"+mail
    +"?subject="+subject
    +"&body="+"Name: "+name+"%0D%0A"+about);
}
sendMailBtn.addEventListener("click",e=>sendMail(e));
//Sending Email Work Finised


contact.addEventListener('click', function(e){
    e.preventDefault();
    const ClickedOn = e.target.id;
    if(ClickedOn === "contact"){
        location.replace(`./contact.html`);
    
    }
});

contacts.addEventListener('click', function(e){
    e.preventDefault();
    const ClickedOn = e.target.id;
    if(ClickedOn === "contacts"){
        location.replace(`./contact.html`);
    }
});

product.addEventListener('click', function(e){
    e.preventDefault();
    const ClickedOn = e.target.id;
    if(ClickedOn === "product"){
        location.replace(`./product.html`);
    
    }
});

products.addEventListener('click', function(e){
    e.preventDefault();
    const ClickedOn = e.target.id;
    if(ClickedOn === "products"){
        location.replace(`./product.html`);
    }
});


home.addEventListener('click', function(e){
    e.preventDefault();
    const ClickedOn = e.target.id;
    if(ClickedOn === "home"){
        location.replace(`./index.html`);
    
    }
});

homes.addEventListener('click', function(e){
    e.preventDefault();
    const ClickedOn = e.target.id;
    if(ClickedOn === "homes"){
        location.replace(`./index.html`);
    
    }
});

about.addEventListener('click', function(e){
    e.preventDefault();
    const ClickedOn = e.target.id;
    if(ClickedOn === "about"){
        location.replace(`./about.html`);
    
    }
});

abouts.addEventListener('click', function(e){
    e.preventDefault();
    const ClickedOn = e.target.id;
    if(ClickedOn === "abouts"){
        location.replace(`./about.html`);
    
    }
});
var check=0;
happy.addEventListener('click',function(e)
{
   

    if(check==0)
    {
        happy.classList.add('review');
        sad.classList.add('opaque');
    }
   
    check++;
})
sad.addEventListener('click',function(e)
{
   
if(check==0)
{
    sad.classList.add('review');
    happy.classList.add('opaque');
}
    
    check++;
})