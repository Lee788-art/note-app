let container = document.querySelector('.container')
let button  = document.querySelector('.btn')
let delete_icon = document.querySelector('.delete-icon')
let test = document.querySelector('.test')
let note_container = document.querySelector('.note-container')


button.addEventListener('click',()=>{
    // let li = document.createElement('li')
    let para = document.createElement('p')
    let img = document.createElement('img')
    img.classList.toggle("delete-icon")
    para.setAttribute('contenteditable',true)
    para.classList.add('input-box')
    img.src="img/notes-app-img/delete.png"
    // li.appendChild(para)
    para.appendChild(img)
    note_container.appendChild(para)


    settingData()
    
    
})

note_container.addEventListener("click",(e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove()
        settingData()
    }else if(e.target.tagName=='P'){
        notes = document.querySelectorAll('.input-box')
        notes.forEach(element => {
            element.onkeyup = function(){
                settingData()
            }
        });
    }
})


function settingData(){
    localStorage.setItem('data',note_container.innerHTML)
}


function getData(){
    note_container.innerHTML = localStorage.getItem('data')
}

getData()