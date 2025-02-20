const countingProgressBarEffect = () => {
    const value1 = document.querySelector('.my-progress-1 .progress .value')
    const value2 = document.querySelector('.my-progress-2 .progress .value')
    const value3 = document.querySelector('.my-progress-3 .progress .value')

    let initial1  = 0
    const end1 = 75

    let initial2  = 0
    const end2 = 50

    let initial3  = 0
    const end3 = 82

    setInterval(()=>{
        if (initial1 >= end1)
        clearInterval()
        
        else
        {
        initial1 ++
        value1.textContent = `${initial1}%`
        }
    } , 30) 


    setInterval(()=>{
        if (initial2 >= end2)
        clearInterval()
        
        else
        {
        initial2 ++
        value2.textContent = `${initial2}%`
        }
    } , 20) 


    setInterval(()=>{
        if (initial3 >= end3)
        clearInterval()
        
        else
        {
        initial3 ++
        value3.textContent = `${initial3}%`
        }
    } , 10) 



}
countingProgressBarEffect()




window.onscroll = function() { toggleScrollButton(); };




function toggleScrollButton() {
    let btn = document.querySelector(".scrollUpBtn");
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}