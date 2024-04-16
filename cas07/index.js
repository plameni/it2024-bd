console.log('Hello world!'); 

let btnCount = document.getElementById('btnCount');  
let count = 0; 
// console.log(btnCount); 

let noOfClicksDiv = document.querySelector('.no-of-clicks'); 

btnCount.addEventListener('click', (ev) => {
    // console.log(ev); 
    // alert('Click'); 
    count++;
    noOfClicksDiv.innerText = `<b>${count}</b>`;   
})