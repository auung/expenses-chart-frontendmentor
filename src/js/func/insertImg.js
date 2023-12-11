import logo from "../../assets/logo.svg";

function insertImg() {
  const logo_img = document.getElementById("logo");
  logo_img.src = logo;
}

export { insertImg };