function copyToClipboard() {
    var copyText = document.getElementById("copy-link");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);
  
    //alert("Copied the text: " + copyText.value);

    var tooltip = document.getElementById("copy-button");

    tooltip.innerText = "Copied! ✅"
  } 