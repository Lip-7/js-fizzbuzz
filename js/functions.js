function switchVisibility(value1,value2){
    const content1 = document.getElementById(value1);
    const content2 = document.getElementById(value2);
    content1.classList.add('d-none');
    content2.classList.remove('d-none');
}
function squareGenerator(squaresNumber){
    const fizz = 3
    const buzz = 5
    iterable = parseInt(squaresNumber);
    squareLocation = document.getElementById('result-container');
    for (let i = 1; i <= iterable; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            document.getElementById('result-container').innerHTML += `<div class="single-box d-flex align-items-center justify-content-center lip-bg-buzzfizz"><span>FizzBuzz</span></div>`
        }else if (i % buzz == 0){
            document.getElementById('result-container').innerHTML += `<div class="single-box d-flex align-items-center justify-content-center lip-bg-buzz"><span>Buzz</span></div>`
        }else if (i % fizz == 0) {
            document.getElementById('result-container').innerHTML += `<div class="single-box d-flex align-items-center justify-content-center lip-bg-fizz"><span>Fizz</span></div>`
        }else{
            document.getElementById('result-container').innerHTML += `<div class="single-box d-flex align-items-center justify-content-center lip-bg-normal"><span>${i}</span></div>`
        }
    };
    document.getElementById('result-container').innerHTML += `<div class="single-box d-flex align-items-center justify-content-center"><span><a href="./index.html">Restart</a></span></div>`
};