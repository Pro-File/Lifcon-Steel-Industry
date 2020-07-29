var hidden_panel = document.getElementById('panel');
var ham = document.querySelector('.ham');
var cross = document.querySelector('.crossed');
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


var page_1 = document.querySelector('.about-1');

hidden_panel.classList.add('hidden');
page_1.classList.add('downward');
cross.classList.add('hide');
ham.addEventListener('click', function(){
    hidden_panel.classList.remove('hidden');
    hidden_panel.classList.add('visible');
    ham.classList.add('hide');
    cross.classList.remove('hide');
});


cross.addEventListener('click', function(){
    hidden_panel.classList.remove('visible');
    hidden_panel.classList.add('hidden');
    cross.classList.add('hide');
    ham.classList.remove('hide');
});

contact.addEventListener('click', function(e){
    e.preventDefault();
    const ClickedOn = e.target.id;
    if(ClickedOn === "contact"){
        location.replace(`../contact.html`);
    
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
    // sad.classList.remove('review');
    // happy.classList.remove('opaque');

    if(check==0)
    {
        happy.classList.add('review');
        sad.classList.add('opaque');
    }
   
    check++;
})
sad.addEventListener('click',function(e)
{
    // sad.classList.remove('opaque');
    // happy.classList.remove('review');
if(check==0)
{
    sad.classList.add('review');
    happy.classList.add('opaque');
}
    
    check++;
})