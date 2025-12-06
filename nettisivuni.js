function showPic() {
    const container = document.getElementById("kuvaContainer");

const img = document.createElement("img");
img.src = "/kuvia/gorillakeskisormi.jpg";
img.width = 650;
container.innerHTML = "";
container.appendChild(img);
}