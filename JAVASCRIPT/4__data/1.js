document
    .addEventListener('DOMContentLoaded', function () {
        var data = [
            {
                id: 1,
                name: "tuankim",
                age: 23
            }, {
                id: 2,
                name: "Toduyen",
                age: 34
            }
        ];
        for (let i = 0; i < data.length; i++) {
            var giatri = `
            <div id="view-${data[i].id}">
                <h1>${data[i].name}</h1>
                <p>${data[i].age}</p>
                <p>${data[i].id}</p>
            </div>
        `;
        let themoi = document.createElement('section');
        themoi.innerHTML = giatri;
        let layid =  document.getElementById('view-1');
        layid.appendChild(themoi);
        }
    })