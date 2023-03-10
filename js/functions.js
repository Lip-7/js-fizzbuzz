function switchVisibility(value1,value2){
    const content1 = document.getElementById(value1);
    const content2 = document.getElementById(value2);
    content1.classList.add('d-none');
    content2.classList.remove('d-none');
}
function switchVisibility2(value1,value2){
    const content1 = document.getElementById(value1);
    const content2 = document.getElementById(value2);
    content1.classList.add('d-none');
    content2.classList.add('show');
    setTimeout(() => {
        content2.style.opacity = 1;
      }, 10);
}

function squareGenerator(squaresNumber){
    const fizz = 3
    const buzz = 5
    iterable = parseInt(squaresNumber);
    squareLocation = document.getElementById('result-container');
    for (let i = 1; i <= iterable; i++) {
        setTimeout(() => {
            let newSquare = document.createElement('div');
            newSquare.classList.add('single-box', 'd-flex', 'align-items-center', 'justify-content-center');
            if (i % fizz == 0 && i % buzz == 0) {
                newSquare.classList.add('lip-bg-buzzfizz');
                newSquare.innerHTML = '<span>FizzBuzz</span>';
            }else if (i % buzz == 0){
                newSquare.classList.add('lip-bg-buzz');
                newSquare.innerHTML = '<span>Buzz</span>';
            }else if (i % fizz == 0) {
                newSquare.classList.add('lip-bg-fizz');
                newSquare.innerHTML = '<span>Fizz</span>';
            }else{
                newSquare.classList.add('lip-bg-normal');
                newSquare.innerHTML = `<span>${i}</span>`;
            }
            squareLocation.appendChild(newSquare);
        }, i * 20);
    };
    document.getElementById('result-container').innerHTML += `<div class="single-box d-flex align-items-center justify-content-center order-1"><span><a href="./index.html">Restart</a></span></div>`
};