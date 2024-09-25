function checkCredentials() {
  var usernameInput = document.getElementById("adminUsername").value.trim(); // Trim to remove leading/trailing spaces
  var passwordInput = document.getElementById("adminPassword").value.trim();

  // Check if localStorage has users data
  var jsonString = localStorage.getItem("users");
  if (!jsonString) {
    alert("No user data found!");
    return;
  }

  try {
    var jsonObj = JSON.parse(jsonString);
  } catch (e) {
    alert("Invalid user data format!");
    return;
  }

  // Ensure jsonObj has admins array
  if (!jsonObj.admins || !Array.isArray(jsonObj.admins)) {
    alert("Invalid user data format!");
    return;
  }

  var flag = false; // Better to use boolean
  for (var i = 0; i < jsonObj.admins.length; i++) {
    if (jsonObj.admins[i].userName === usernameInput && jsonObj.admins[i].password === passwordInput) {
      flag = true;
      break;
    }
  }

  if (!flag) {
    alert("Invalid Credentials! Try Again.");
  } else {
    window.location.href = "adminDash.html"; // Redirect to admin dashboard
  }
}
