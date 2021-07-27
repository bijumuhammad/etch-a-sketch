const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonContainer =  document.querySelector('.buttons')


function createDivs(col, rows)
{ for(let i=0;i<( col * rows );i++)
    {
    const div = document.createElement('div')
    div.style.border='1px solid red'
    container.style.gridTemplateColumns = `repeat(${col},1fr)` ;
    container.style.gridTemplateRows = `repeat(${rows},1fr)`;
    container.appendChild(div).classList.add('box')    
    }
    

}

function gray(){
    
  const boxs=container.querySelectorAll('.box');
  btnGray.textContent='Gray';
  btnGray.addEventListener('click',()=>{
      boxs.forEach(box =>box.addEventListener('mouseover',()=>{
          let Rnum= Math.floor(Math.random()*255)
          box.style.background=`rgb(${Rnum},${Rnum},${Rnum})`
  }))

})

buttonContainer.appendChild(btnGray).classList.add('btn')
}
 
function black(){


    const boxs1=container.querySelectorAll('.box')
    boxs1.forEach(box =>box.addEventListener('mouseover',()=>{
        box.style.background=`black`

    }))


      const boxs=container.querySelectorAll('.box');
  btnBlack.textContent='Black';
  btnBlack.addEventListener('click',()=>{
      boxs.forEach(box =>box.addEventListener('mouseover',()=>{
          
          box.style.background=`black`
  }))

})

buttonContainer.appendChild(btnBlack).classList.add('btn')
}

function RGB(){
    
  const boxs=container.querySelectorAll('.box');
  btnRGB.textContent='RGB';
  btnRGB.addEventListener('click',()=>{
      boxs.forEach(box =>box.addEventListener('mouseover',()=>{
        let R= Math.floor(Math.random()*255)
        let G= Math.floor(Math.random()*255)
        let B= Math.floor(Math.random()*255)
          box.style.background=`rgb(${R},${G},${B})`
  }))

})

buttonContainer.appendChild(btnRGB).classList.add('btn')
}

function reset()
{
    const boxs=container.querySelectorAll('.box')
    boxs.forEach(box=>box.remove())
}

function buttonResize(){
btnSize.textContent='Resize';
btnSize.addEventListener('click',()=>{
   let user= prompt("enter dimensaion")
   if(user==null||user<1)
    {   reset();
        createDivs(16,16);
        
        gray();
        black();
        RGB();
    }
    else{
        reset();
        createDivs(user,user);
        
        gray();
        black();
        RGB();

    }

})

buttonContainer.appendChild(btnSize).classList.add('btn')
}


createDivs(16,16);
buttonResize();
gray();
black();
RGB();