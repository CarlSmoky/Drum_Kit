const buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", function() {

    const buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);

  });

}


