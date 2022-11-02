const showonpx=100
const backtotopbutton=document.querySelector(".button")

const scrollcontailer=() => {
    return document.documentElement || document.body;

};
document.addEventListener("scroll",()=>{
    if(scrollcontailer().scrollTop>showonpx){
        backtotopbutton.classList.remove("hidden")
    }else{
        backtotopbutton.classList.add("hidden")
        
    }
    
})


const gototop=()=>{
    document.body.scrollIntoView();
};