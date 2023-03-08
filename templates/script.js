function copyToClipboard() {
    var copyText = document.getElementById("copy-link");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("copy-button");

    tooltip.innerText = "Copied! ✅"
}

class Idea extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: 'Poppins', sans-serif;
          }

            @keyframes fadeInAnimation {
                0% {
                    scale: 0;
                }
                100% {
                    scale: 1;
                }
            }
          
          .box {
            background-color: #F5F5F5;
            border-radius: 20px;
            box-shadow: 0 4px 11px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px auto 20px;
            opacity: 1;
            position: relative;
            width: 400px;
            height: 70px;
            animation: fadeInAnimation ease 0.25s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }
          
          input[type="text"] {
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 12px;
            font-weight: normal;
            padding: 20px;
            width: 100%;
            box-sizing: border-box;
          }
        </style>
        <div class="box">
          <input type="text" placeholder="What's your idea?" name="idea-box" id="1" maxlength="120" spellcheck="true">
        </div>
      `;
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }
  }
  
customElements.define('idea-box', Idea);

function addIdea() {
    //var mainDiv = document.getElementById("main");
    var boxButton = document.getElementById("boxbutton");
    const elemDiv = document.createElement('idea-box');
    
    //elemDiv.style.cssText = "opacity: 1; position: relative; background: rgb(245, 245, 245); width: 400px; height: 100px; margin: 10px auto 20px auto; border-radius: 20px; box-shadow: 0 4px 11px #9ecaed; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: 'Poppins', sans-serif;"

    document.body.appendChild(elemDiv);
    document.body.insertBefore(elemDiv, boxButton);

}


  