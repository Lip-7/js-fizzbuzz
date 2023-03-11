/*Variables*/
var squaresNumber = 0;
const numberInput = document.getElementById('squareCount');


/*Buttons sheet*/
numberInput.addEventListener("input", function() {
    const button = document.getElementById("btnGenerate");
    if (parseInt(numberInput.value) > 9) {
      button.style.opacity = '0'
      button.style.opacity = '0.7'
    } else {
      button.style.opacity = '0.7'
      button.style.opacity = '0'
    }
  });
document.getElementById('btn-start').addEventListener('click', function(){switchVisibility('btn-start','squareCount-display')})
document.getElementById('btnGenerate').addEventListener('click', function(){
    squaresNumber = parseInt(document.getElementById('squareCount').value)
    if (squaresNumber) {
        if (squaresNumber > 9) {
            switchVisibility2('squareCount-display', 'result-wrap')
            squareGenerator(squaresNumber);
        }else{
            alert("Please insert a valid number");
        }
    }
})