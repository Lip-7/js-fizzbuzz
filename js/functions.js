function switchVisibility(value1,value2){
    const content1 = document.getElementById(value1)
    const content2 = document.getElementById(value2)
    content1.classList.add('d-none')
    content2.classList.remove('d-none')
}