console.log('script');

function imgSlider(e){
    console.log(e);
    

    document.querySelector('.pepsi').src=e;     
}


function changeBgColor(c){
    console.log('changeBgColor');
    
    const sec=document.querySelector('.sec');
    sec.style.background=c;

}

