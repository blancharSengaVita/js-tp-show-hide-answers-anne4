const showHideAnswer = {
  jsEnabled() {
    document.documentElement.classList.add('js-enabled')
  },

  initConst() {
    this.buttons = document.querySelectorAll('button');
    this.answers = document.querySelectorAll('.desc')
  },

  displayAnswer(){
    this.buttons.forEach(button => {
      button.addEventListener('click',()=>{
        const ariaControls = button.getAttribute('aria-controls');
        this.answers.forEach(answer =>{
          if (answer.id === ariaControls){
            answer.style.display = 'block';
            button.focus();
            answer.setAttribute('aria-expanded','true')
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

showHideAnswer.initApp()