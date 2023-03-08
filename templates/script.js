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
          
          textarea {
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 12px;
            font-weight: normal;
            padding: 30px;
            width: 100%;
            box-sizing: border-box;
            white-space: pre-wrap;
            resize: none;
          }
        </style>
        <div class="box">
          <textarea placeholder="What's your idea?" wrap="soft" name="idea-box" maxlength="120" spellcheck="true"></textarea>
        </div>
      `;
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
  }
  
  addNewLine() {
    const textarea = this.shadowRoot.querySelector('textarea');
    const value = textarea.value;
  
    if (value.length % 20 === 0) {
      textarea.value = value + "\n";
      const box = this.shadowRoot.querySelector('div');
      //const boxHeight = box.offsetHeight;
      //const lineHeight = parseInt(window.getComputedStyle(textarea, null).getPropertyValue('line-height'), 10);
      //const newBoxHeight = boxHeight + lineHeight + 10;
      box.style.height = "300px"; //`${newBoxHeight}px`;
    }
  }
  
}
  
customElements.define('idea-box', Idea);

function addIdea() {
    var boxButton = document.getElementById("boxbutton");
    const elemDiv = document.createElement('idea-box');
    
    document.body.appendChild(elemDiv);
    document.body.insertBefore(elemDiv, boxButton);
}




  