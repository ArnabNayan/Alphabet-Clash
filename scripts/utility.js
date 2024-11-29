function hideElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden')
}


//add backgroundColorbyid
function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}
function getElementTextById(elementId){
    const element=document.getElementById(elementId)
    const text=element.innerText
    return text
}
function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz'
    const alphabets=alphabetString.split('')
    const randomNumber=Math.random()*25
    const index=Math.round(randomNumber)
    // console.log(index)
    const alphabet=alphabets[index]
    return alphabet
}