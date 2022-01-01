let layID = document.getElementsByTagName("h4");
console.log(layID[1].innerText);

// chuyentatcah4 thanh input
for (let i = 0; i < layID.length; i++) {
    layID[i].innerHTML = `<input type="text" id="fname" name="fname"/>`;
}