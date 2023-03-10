/*Variables*/
var squaresNumber = 0


/*Buttons sheet*/
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