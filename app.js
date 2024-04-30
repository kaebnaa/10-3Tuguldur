const btn = document.getElementById("btn")
const modal = document.getElementById("modal")

btn.addEventListener("click", ()=>{
    modal.style.visibility= 'unset';
})

modal.addEventListener("click", (e)=>{
    if(e.target == modal){
        modal.style.visibility = 'hidden'
    }
})