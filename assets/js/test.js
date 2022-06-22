

//点击切换图片 案例一 start
var ImgOne = document.getElementById("ImgOne");
var flag = true;
ImgOne.onclick = function(){
    if(flag){
         
        ImgOne.src = "assets/img/blog/list/blog-list-2.jpg";
        flag = false;
    }
    else{
        ImgOne.src = "assets/img/blog/list/blog-list-1.jpg";
        flag = true;
    }
}


//点击切换图片 案例一 over
var ImgTwo = document.getElementById("ImgTwo");
var flag = true;
ImgTwo.onclick = function(){
    if(flag){
         
        ImgTwo.src = "https://dycharts.com/xshow/index.html?id=c_540b29b2ee58bc3485099ee98e74483f";
        flag = false;
    }
    else{
        ImgTwo.src = "https://dycharts.com/xshow/index.html?id=c_2b4b5d09f2c13a5976ccd00562592bd1" ;
        flag = true;
    }
}


