// function play(){
//     //hide the home screen,to hide the screen add the class hidden to the home section
//      const homeSection=document.getElementById('home-screen')
//      homeSection.classList.add('hidden')
//     //show the playground
//     const playgroundSection=document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }
function handleKeyboardButtonPress(event){
  const pressedKey=event.key
  console.log(pressedKey)
  //escape the game if player pressed escape button 'esc'
  if(pressedKey==='Escape'){
    hideElementById('play-ground')
    showElementById('score-card')
    const totalScore=document.getElementById('total-score')
    // const totalScoreText=totalScore.innerText
    
    const currentScoreElement=document.getElementById('score')
    const currentScoreText=currentScoreElement.innerText
    // // console.log(currentScoreText)
    // const currentScore=parseInt(currentScoreText)
  
   
     totalScore.innerText=currentScoreText  
     const currentAlphabet=getElementTextById('current-alphabet')
removeBackgroundColorById(currentAlphabet)
  }
  const currentAlphabetElement=document.getElementById('current-alphabet')
  const expectedAlphabet=currentAlphabetElement.innerText
  const expectedAlphabetToLowerCase=expectedAlphabet.toLowerCase()
  console.log(expectedAlphabetToLowerCase)
  
  if(pressedKey===expectedAlphabetToLowerCase){
    // console.log('button matched')
   const currentScoreElement=document.getElementById('score')
   const currentScoreText=currentScoreElement.innerText
   const currentScore=parseInt(currentScoreText)
 
   const newScore=currentScore+1
    currentScoreElement.innerText=newScore   
    removeBackgroundColorById(expectedAlphabetToLowerCase) 
    continueGame()
   
    
  
    
  }
  else{
    const currentLifeElement=document.getElementById('life')
    const currentLifeElementText=currentLifeElement.innerText
    const currentLife=parseInt(currentLifeElementText)
    const remainingLife=currentLife-1
    currentLifeElement.innerText=remainingLife
    if(remainingLife===0){
      hideElementById('play-ground')
      showElementById('score-card')
      const totalScore=document.getElementById('total-score')
      // const totalScoreText=totalScore.innerText
      
      const currentScoreElement=document.getElementById('score')
      const currentScoreText=currentScoreElement.innerText
      // // console.log(currentScoreText)
      // const currentScore=parseInt(currentScoreText)
    
     
       totalScore.innerText=currentScoreText  
       const currentAlphabet=getElementTextById('current-alphabet')
removeBackgroundColorById(currentAlphabet)
      // const remove=document.getElementById('score-card')
      // remove.classList.remove('hidden')

    }
    // console.log('You hit the wrong button')
  
  }
}
document.addEventListener('keyup',handleKeyboardButtonPress)
function continueGame(){
//generate a random alphabet
  const alphabet=getARandomAlphabet()
  //set randomly generated alphabet to the screen
  const currentAlphabetElement=document.getElementById('current-alphabet')
  currentAlphabetElement.innerText=alphabet
  setBackgroundColorById(alphabet)
}
function play(){
    hideElementById('home-screen')
    hideElementById('score-card')
    showElementById('play-ground')
    
   //show the life three again when play again
   const currentLifeElement=document.getElementById('life')
  currentLifeElement.innerText=3
  
    //show the score 0 again when play again
    const currentScoreElement=document.getElementById('score')
   currentScoreElement.innerText=0
   

  //  removeBackgroundColorById(alphabet)
    continueGame()
   
   
}
//play again
// function plays(){
//   hideElementById('score-card')
//   showElementById('play-ground')
//   continueGame()
// }
