const items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'],
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
];

let cart = 0;
let listBarang = document.getElementById('listBarang');
let cartNum = document.getElementById('cart')

const loopingBarang = (listItem) => {
    let item = "";
    if (listItem.length > 0) {
        for (let i = 0; i < listItem.length; i++) {
            item +=
                `
                <div class ="col-4 mt-2"> 
                    <div class="card h-100" style="width: 18rem;">
                        <img src="./img/${listItem[i][4]}" class="card-img-top" height="200px" width="200px" alt="${listItem[i][1]}">
                        <div class="card-body d-flex flex-column justify-content-end">
                            <h5 class="card-title" id="${listItem[i][0]}">${listItem[i][1]}</h5>
                            <p class="card-text">${listItem[i][3]}</p>
                            <p class="card-text">Rp ${listItem[i][2].toLocaleString()}</p>
                            <a href="#" class="btn btn-primary pointer-event cart-barang">Add To Cart</a>
                        </div>
                    </div>
                </div>
            `
        }
    }
    return item;
};

const filter = (value) => {
    let updateData = [];
    if (value.length) {
        updateData = items.filter(item => {
            const startsWith =
                item[1].toLowerCase().startsWith(value.toLowerCase()) || //filter by Name
                item[3].toLowerCase().startsWith(value.toLowerCase()); //filter by Description

            const includes =
                item[1].toLowerCase().includes(value.toLowerCase()) || //filter by Name
                item[3].toLowerCase().includes(value.toLowerCase()); //filter by Description

            if (startsWith) {
                return startsWith;
            } else if (!startsWith && includes) {
                return includes;
            } else {
                return null;
            }
        });
    } else {
        updateData = items;
    }
    return updateData;
};

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    listBarang.innerHTML = loopingBarang(items);
});


document.getElementById('formItem').addEventListener('submit', (e) => {
    e.preventDefault();
    listBarang.innerHTML = loopingBarang(filter(e.target.firstElementChild.value));
});

document.addEventListener('click', (e) => {

    if (!e.target.matches('.cart-barang')) return;

    e.preventDefault();
    cartNum.innerHTML =
        `
    <i class="fas fa-shopping-cart"></i>(${++cart})
    `
}, false);