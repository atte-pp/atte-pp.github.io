function showPic() {
    const container = document.getElementById("kuvaContainer");

const img = document.createElement("img");
img.src = "/kuvia/gorillakeskisormi.jpg";
container.innerHTML = "";
container.appendChild(img);
}