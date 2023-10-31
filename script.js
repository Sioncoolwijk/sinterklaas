
function sendEmail() {

  const email = document.getElementById('email').value
  const voornaam = document.getElementById('voornaam').value
  const achternaam = document.getElementById('achternaam').value
  const adres = document.getElementById('adres').value
  const toevoeging = document.getElementById('toevoeging').value
  const postcode = document.getElementById('postcode').value
  const stad = document.getElementById('stad').value
  const telefoonnummer = document.getElementById('telefoonnummer').value
  const datum = document.getElementById('datum').value
  const bericht = document.getElementById('bericht').value
  
  // Define an array of input element IDs you want to check
  var elementIds = ['email', 'achternaam', 'adres', 'postcode', 'stad', 'telefoonnummer', 'datum'];
  var emptyElementCount = 0

  // Iterate through the element IDs
  for (var i = 0; i < elementIds.length; i++) {
    var elementId = elementIds[i];
    var element = document.getElementById(elementId);
    
    // Check if the element's value is empty
    if (element.value === '') {
      emptyElementCount++;
      element.style.border = "solid 1px red";
    } else {
      // Reset the border style if not empty
      element.style.border = ""; // or null to remove the border
    }
  }

  var button = document.getElementById('verstuur-button')
  var errorMessage = document.getElementById("error-message");
  if (emptyElementCount > 0) {
    errorMessage.style.display = "block"; 
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    button.style.backgroundColor = "#990000";
    return
  }
  errorMessage.style.display = "none"; 

  var successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";

  // Clear all input fields
  var elementIdsAll = ['email', 'voornaam', 'achternaam', 'adres', 'toevoeging', 'postcode', 'stad', 'telefoonnummer', 'datum'];
  elementIdsAll.forEach(function (elementId) {
    var element = document.getElementById(elementId);
    element.value = ''; // Set the value to an empty string
  });

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  button.style.backgroundColor = "#990000";

};
