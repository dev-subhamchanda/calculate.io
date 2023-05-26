let outputSection = document.querySelector('.showContent')
let inputBtns = document.querySelectorAll('.input')
let str= new String()
//Actions For all the buttons
outputSection.innerHTML=''
inputBtns.forEach(btn=>{
    btn.addEventListener('click' ,function (e) {
        e.preventDefault()
        if(e.target.innerHTML==='Del'){
            outputSection.innerHTML=''
            str=''
    }
    else if(e.target.innerHTML==='='){
        str.length > 0 ? outputSection.innerHTML=eval(str):'false'
    }
    else {
        str += e.target.innerHTML
        outputSection.innerHTML = str 
    }

    })
})



