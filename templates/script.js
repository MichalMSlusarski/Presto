function copyToClipboard() {
    var copyText = document.getElementById("copy-link");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("copy-button");

    tooltip.innerText = "Copied! ✅"
}

function addIdea() {
    var elemDiv = document.createElement('div');
    var mainTwo = document.getElementById("boxbutton");

    elemDiv.style.cssText = "opacity: 1; position: relative; background: rgb(245, 245, 245); width: 400px; height: 100px; margin: 10px auto 20px auto; border-radius: 20px; box-shadow: 0 4px 11px rgb(0 0 0 / 0.2); display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: 'Poppins', sans-serif;"

    document.body.appendChild(elemDiv);
    document.body.insertBefore(mainTwo, elemDiv);

}