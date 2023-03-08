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
          
          .idea {
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
            min-height: 70px;
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
        <div class="idea">
          <textarea placeholder="What's your idea?" wrap="soft" name="idea-box" maxlength="120" rows="1" spellcheck="true"></textarea>
        </div>
      `;
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
  }
  
  addNewLine() {
    const textarea = this.shadowRoot.querySelector('textarea');
    const box = this.shadowRoot.querySelector('.idea');
    const value = textarea.value;
    const additionalHeight = 50;
  
    if (value.length % 20 === 0) {
      textarea.value = value + "\n";
      box.style.height = `${boxHeight + additionalHeight}px`;
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




  