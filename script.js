const carouselItemEl = document.querySelectorAll(".carousel-item")
console.log(carouselItemEl)

const carouselLeftBtn = document.getElementById("carousel-Left")
const carouselRightBtn =document.getElementById("carousel-right")

let start = 0;
const numImg = 3;

const end = 100 * (numImg -1) ;

let isAutoRender = true;

carouselRightBtn.addEventListener("click",carouselRightSift)
function carouselRightSift(){
    isAutoRender = false;
        console.log(start,end)
    
        if(start > -end ){
            start=start-100;
        }   
        carouselItemEl.forEach(element =>{
            element.style.transform = `translateX(${start}%)`
        })
}

carouselLeftBtn.addEventListener("click",carouselLeftsift)
function carouselLeftsift(){
    isAutoRender = false;

        console.log(start,end)
        if(start <= -100 ){
            start = start + 100;
        }
       
        carouselItemEl.forEach(element =>{
            element.style.transform = `translateX(${start}%)`
        })
}


const autoRender = ()=>{
    console.log(start,end)
    
        if(start > -end ){
            carouselRightSift()
        }
        else{
            start = 0
            carouselLeftsift()
        } 
        
}

isAutoRender ? setInterval(autoRender,2000) : ""