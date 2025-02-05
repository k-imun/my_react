
const link = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
        anchor.addEventListener("click",function(e){
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if(targetElement){
                targetElement.scrollIntoView({behavior:"smooth"});
            }
            console.log(targetId)
        })
    });
    // ^ 는 '시작하는' 라는 뜻   a[href^] 는  a로 시작하는...
}

export default link