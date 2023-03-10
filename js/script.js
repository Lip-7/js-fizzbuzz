/*Variables*/
var squaresNumber = 0


/*Buttons sheet*/
document.getElementById('btn-start').addEventListener('click', function(){switchVisibility('btn-start','squareCount-display')})
document.getElementById('btnGenerate').addEventListener('click', function(){
    squaresNumber = document.getElementById('squareCount').value
    switchVisibility2('squareCount-display', 'result-wrap')
    squareGenerator(squaresNumber)
})