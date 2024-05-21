// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message is about capturing button clicks
  if (message.action === "captureButtonClick") {
    // Add event listeners to all buttons in the page
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(event) {
        // Get the ID of the clicked button
        var buttonID = event.target.id;
        // Send the button ID to the background script
        chrome.runtime.sendMessage({action: "buttonClicked", buttonID: buttonID});
      });
    }
  }
});

// Send a message to the background script to start capturing button clicks
chrome.runtime.sendMessage({action: "startCapturingButtonClick"});





setTimeout(function(){

chrome.storage.local.get('btn', function(result){
       repriceFlatMerchantAnnualSavingsBgVal = result.btn;
      console.log("Buttocccccc", repriceFlatMerchantAnnualSavingsBgVal);
	  
	  if (repriceFlatMerchantAnnualSavingsBgVal= "Tableau")
	  {
   document.getElementById("select2-chosen-1").innerHTML="Technology";
      document.getElementById("select2-chosen-2").innerHTML="Software";
   document.getElementById("select2-chosen-3").innerHTML="Tableau";
   document.getElementById("select2-chosen-17").innerHTML="Desktop Issue";

     document.evaluate('/html/body/div/section/main/div[1]/div/sp-page-row/div/div/span[1]/div/div/div[1]/div[1]/div/div[2]/form/div/sp-variable-layout/div[1]/div/div/div/div/span/span/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.value="mytest";
     document.evaluate('/html/body/div/section/main/div[1]/div/sp-page-row/div/div/span[1]/div/div/div[1]/div[1]/div/div[2]/form/div/sp-variable-layout/div[4]/div/div/div/div/span/textarea', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.value="mytest";

	  }
                     
       });

   

}, 5000);