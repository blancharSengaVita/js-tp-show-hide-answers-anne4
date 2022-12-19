const showHideAnswer = {
  jsEnabled() {
    document.documentElement.classList.add('js-enabled');
  },

  initConst() {
    this.buttons = document.querySelectorAll('button');
    this.answers = document.querySelectorAll('.desc');
  },

  //peut t'on faire mieux ?

  displayAnswer(){
    this.buttons.forEach(button => {
      button.addEventListener('click',()=>{
        const ariaControls = button.getAttribute('aria-controls');
        const areaExpanded = button.getAttribute('aria-expanded');
        this.answers.forEach(answer =>{
          button.focus();
          if (answer.id === ariaControls && areaExpanded === 'false'){
            answer.style.display = 'block';
            button.setAttribute('aria-expanded','true');
          }else if (answer.id === ariaControls && areaExpanded === 'true'){
            answer.style.display = 'none';
            button.setAttribute('aria-expanded','false');
          }
        });
      })
    })
  },

  initApp() {
    this.jsEnabled();
    this.initConst();
    this.displayAnswer();
  }
}

showHideAnswer.initApp();