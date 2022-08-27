const Next = document.querySelector(".next");
const Prev = document.querySelector(".prev");
const imgContainer = document.querySelector(".image-container");
const allImgs = document.querySelectorAll("img");

console.log(allImgs);

let currentImg = 1;

let timeout ;
Next.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

Prev.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

updateImg();
function updateImg() {
    if (currentImg > allImgs.length) {
        currentImg=1;
    }
    else if(currentImg<1){
        currentImg=allImgs.length;
    }
    imgContainer.style.transform = `translateX(-${(currentImg - 1)*500}px)`;
    timeout = setTimeout(()=>{
        currentImg++;
        updateImg();
    },3000)
}

