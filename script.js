const ProjectBtn=document.querySelector(".tab-btn1");
const ImageBox=document.getElementById("projectImages");

const ProjectBtn2=document.querySelector(".tab-btn2");
const ImageBox1=document.getElementById("projectImages1");

const ProjectBtn3=document.querySelector(".tab-btn");
const ImageBox2=document.getElementById("projectImages2");

ProjectBtn.addEventListener("click",()=>{
    ImageBox.classList.remove("hidden");
    ImageBox1.classList.add("hidden1");
    ImageBox2.classList.add("hidden2");
});
ProjectBtn2.addEventListener("click",()=>{
    ImageBox.classList.add("hidden");
    ImageBox1.classList.remove("hidden1");
    ImageBox2.classList.add("hidden2");
});

ProjectBtn3.addEventListener("click",()=>{
    ImageBox.classList.add("hidden");
    ImageBox1.classList.add("hidden1");
    ImageBox2.classList.remove("hidden2")
})


window.addEventListener("DOMContentLoaded",function(){
    const left=document.querySelector('.left_section');
    const right=document.querySelector('.right_section');

    this.window.addEventListener("scroll",function(){
        let windowHeight=this.window.innerHeight;

        let leftTop=left.getBoundingClientRect().top;
        let rightTop=right.getBoundingClientRect().top;

        if (leftTop<windowHeight && leftTop>0){
            left.classList.add("animate-left");
        }else{
            left.classList.remove("animate-left");
        }

        if (rightTop<windowHeight && rightTop>0){
            right.classList.add("animate-right");
        }else{
            right.classList.remove("animate-right");
        }

    });
});

window.addEventListener("DOMContentLoaded",function(){
    const centerContent=document.querySelector(".center_content");

    window.addEventListener("scroll",function(){
        const rect=centerContent.getBoundingClientRect();
        const windowHeight=window.innerHeight;

        if(rect.top<windowHeight && rect.bottom>0){
            centerContent.classList.add("zoom-in");
        }else{
            centerContent.classList.remove("zoom-in")
        }
    });
});

window.addEventListener("DOMContentLoaded", function(){
    const aboutSection=document.querySelector(".about-section");

    window.addEventListener("scroll",function(){
        const rect=aboutSection.getBoundingClientRect();
        const windowHeight=window.innerHeight;

        if (rect.top < windowHeight&& rect.bottom>0){
            aboutSection.classList.add("zoom-in");
        }
        else{
            aboutSection.classList.remove("zoom-in");
        }
    });
});



window.addEventListener("DOMContentLoaded",function(){
    const RightSection=document.querySelector('.FullDiv');
    const LeftSection=this.document.querySelector('.LFT_Section')

    this.window.addEventListener("scroll",function(){
        let windowHeight=this.window.innerHeight;

         let rightDiv=RightSection.getBoundingClientRect().top;
         let leftDiv=LeftSection.getBoundingClientRect().top;

         if(leftDiv<windowHeight && leftDiv>0){
            LeftSection.classList.add("animations-left");
         }else{
            LeftSection.classList.add("animations-left");
         }

         if (rightDiv<windowHeight && rightDiv>0){
            RightSection.classList.add("animations-right");
        }else{
            RightSection.classList.remove("animations-right");
        }


    });


   
});



window.addEventListener("DOMContentLoaded",function(){
    const centerContent=document.querySelector(".Portfolio");

    window.addEventListener("scroll",function(){
        const rect=centerContent.getBoundingClientRect();
        const windowHeight=window.innerHeight;

        if(rect.top<windowHeight && rect.bottom>0){
            centerContent.classList.add("zoom-ins");
        }else{
            centerContent.classList.remove("zoom-ins")
        }
    });
});
