/* ===== PASSWORD INPUT ===== */
const Password_input = document.querySelector(".password--input");

/* ===== PASSWORD EYE ICON ===== */
const Password_eye_icon = document.querySelector("#password_hidden");

/* ===== PASSWORD EYE ICON EVENTLISTENER ===== */
Password_eye_icon.addEventListener("click", () => {
  if (Password_input.type === "password") {
    /* ===== Checking if the password input has the 
            type of text if so then interchange the icons ===== */

    Password_input.type = "text";
    Password_eye_icon.setAttribute("name", "eye-outline");
    Password_eye_icon.removeAttribute("name", "eye-off-outline");
  } else {
    Password_input.type = "password";

    Password_eye_icon.setAttribute("name", "eye-off-outline");
    Password_eye_icon.removeAttribute("name", "eye-outline");
  }
});
