
var i=0;

var page6para=document.querySelector(".page6para")

var next=document.getElementById("next")
var previous=document.getElementById("previous");
var page6head=document.getElementById("pg6heading")

var page6photo=document.querySelector(".page6image");
var number=document.getElementById("render")

var hidden_panel = document.getElementById('panel');
var ham = document.querySelector('.ham');
var cross = document.querySelector('.cross');
var page_1 = document.querySelector('.productpage0');
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


var images=[];
  images[0]='(1.jpg)'; 
  images[1]='(3.jpg)';
  images[2]='(2.jpg)';
  images[3]='(4.jpg)';
var text=[];
text[0]="Cost effective and remarkably versatile this thin, flat steel shape is often the cornerstone or construction projects. The low carbon content and serviceable strength of this cut-to-size metal makes it highly adaptable to a variety of manufacturers and it is a prevalent component of everyday items.";
text[1]="Steel round bars are available in hot rolled or cold rolled. Hot rolled bars and cold rolled bars are immensely used in construction. Some common applications of steel round bar include frameworks, supports, braces, shafts, and axles.";
text[2]="As popular structural material, Equal angle steel is largely used in bridge building, construction and engineering. According to the steel content, Equal angle steel can be divided into mild steel angle and HSLA steel angle.";
text[3]="Square bars, also known as square steel, squares and square metal bar are a multipurpose steel section mainly used for manufacturing and repairs. General purpose square bars are part of our light and re-rolled section, making it suitable for everyday commercial projects."; 

var head=[];
head[0]="Flat Bar";
head[1]="Round Bar";
head[2]="Equal Angle";
head[3]="Square Bar";


onload();
function onload(){

    page6photo.style.background="url"+images[i];
    page6photo.style.backgroundSize="100% 100%";
    page6para.textContent=text[i];
    page6head.textContent=head[i];
    ++i;
}

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

next.addEventListener("click",function()
{
    score=i+1;
    number.textContent="0"+score;
    page6photo.style.transition = "all 2s";
    page6photo.style.background="url"+images[i];
    page6photo.style.backgroundSize="100% 100%";
    page6para.textContent=text[i];
    page6head.textContent=head[i];

    if(i<images.length-1)
    {
        
        i++
        j=i;

    }
    else{
        i=0;
    }
    
})

previous.addEventListener("click",function()
{
    
    page6photo.style.transition = "all 2s";
   
   
    if(images.length-1>=j)
    {
        if(j==0)
        {
            j=4;
        }
        score=j;
        number.textContent="0"+score;
        j=j-1;
     
        page6photo.style.background="url"+images[j];
        page6photo.style.backgroundSize="100% 100%";
        page6para.textContent=text[j];
        page6head.textContent=head[j];

        
        
       
    }
    

})
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