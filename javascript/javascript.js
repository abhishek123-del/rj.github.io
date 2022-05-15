
// Nav start 
var respNav = document.getElementById("resp-nav");
var navigation = document.getElementById("navigation");
var croseBtn = document.getElementById("crosebtn");
respNav.addEventListener("click",()=>{
  navigation.style.display = "flex";
})
croseBtn.addEventListener("click",()=>{
    navigation.style.display = "none";
})
// nav end 

// For activities page section 
// var activitiesNames = ['Craft making competition','Diya making competition','Kite making competition','Basant Panchami','Watch making competion','Holi celebration','Indivisual speech'];
// var activitiesPhotos = ['craftmaking.jpeg','diyamaking.jpeg','kitemaking.jpeg','BasantPanchami.jpeg','watchmaking.jpeg','Holi.jpeg','Indivisual.jpeg'];
// var num = 0;
// var url = "url(Images/";
// var num1 = 0;
// var activitiesName = document.getElementById("activitiesName");
// var activities = document.getElementById("activities");
// activitiesName.innerText = activitiesNames[0];
// activities.style.backgroundImage = url + activitiesPhotos[0] + ")";
// var btn2 = document.getElementById("btn2").addEventListener("click",()=>{
//   num++;
//   num1++;
//   if(num == activitiesNames.length){
//      num = 0;
//   }
//   if(num1 == activitiesPhotos.length){
//     num1 = 0;
//  }
//   activitiesName.innerText = activitiesNames[num];
//   activities.style.backgroundImage = url + activitiesPhotos[num1] + ")";
// })


// var btn1 = document.getElementById("btn1").addEventListener("click",()=>{
//   num--;
//   num1--;
//   if(num == -1){
//      num = 6;
//   }
//   if(num1 == -1){
//     num1 = 6;
//  }
//   activitiesName.innerText = activitiesNames[num];
//   activities.style.backgroundImage = url + activitiesPhotos[num1] + ")";
// })
// activites section end 


// Slider images 
var slides = document.querySelectorAll(".slide");
var sliderSection = document.getElementById("sliderGallery");
var gallery = document.getElementById("gallery");
var galleryRow = document.getElementById("galleryRow");
function blockdiv(pic){
  sliderSection.style.display = "block";
  gallery.src = pic ;
}
var croseBtn = document.getElementById("croseBtn2").addEventListener("click",()=>{
  sliderSection.style.display = "none";
})


var counter = 0;
function goNext(){
 counter++;
 if(counter == slides.length){
   counter = 0;
 }
 gallery.src = slides[counter].src;
}

function goPrev(){
  counter--;
  if(counter == -1){
    counter = 8;
  }
  gallery.src = slides[counter].src;
 }


