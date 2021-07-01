function dropdown() {
  document.getElementById("dropdown").classList.toggle("tampilkan");
}

document.onclick = function (e) {
  if (!e.target.matches(".dropdown-btn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains("tampilkan")) {
        openDropdown.classList.remove("tampilkan");
      }
    }
  }
};
