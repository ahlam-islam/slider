var img =Array.from(document.images);
var layOut = document.querySelector(".layout");
var backgrounImg = document.querySelector(".light-box");
var close = document.getElementById("close");
var after = document.getElementById("after");
var before = document.getElementById("before");

for (var i = 0; i < img.length; i++)
{
    img[i].addEventListener("click", function (e) {
        
        currentIndex = img.indexOf(e.target);
        var src = e.target.src;
        layOut.style.display = "flex";

        backgrounImg.style.backgroundImage = "url("+src+")";
    }
    )
}
    




close.addEventListener("click", function () {
    layOut.style.display = "none";
})




var currentIndex = 0;

before.addEventListener("click", function () {
  
    if (currentIndex == img.length)
    {
        currentIndex = -1;
        }
    currentIndex++;
    backgrounImg.style.backgroundImage = "url("+img[currentIndex].getAttribute("src")+")";
    
})


after.addEventListener("click", function () {
  
    if (currentIndex == 0)
    {
        currentIndex = img.length ;
        }
    currentIndex--;
    backgrounImg.style.backgroundImage = "url("+img[currentIndex].getAttribute("src")+")";
    
})


layOut.addEventListener("click", function (e) {
    if (e.target != backgrounImg)
    {
        layOut.style.display = "none";
        }
})



document.body.addEventListener("keydown", function (e) {
    
    if (e.keyCode == 39)
    {
      
        if (currentIndex == img.length)
        {
            currentIndex = -1;
            }
        currentIndex++;
        backgrounImg.style.backgroundImage = "url("+img[currentIndex].getAttribute("src")+")";
        
    }
    else if (e.keyCode == 37)
    {
        if (currentIndex == 0)
        {
            currentIndex = img.length ;
            }
        currentIndex--;
        backgrounImg.style.backgroundImage = "url(" + img[currentIndex].getAttribute("src") + ")";
        

    }
    else if (e.keyCode == 27)
    {
        layOut.style.display = "none";
        }
})




    