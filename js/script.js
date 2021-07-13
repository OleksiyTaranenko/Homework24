let containerDiv = document.getElementById('container');

function createDivs() {
    let goodsList = ["./img/1.jpg", './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/9.jpg', './img/10.jpg'], 
    tmp = document.createDocumentFragment();

    let names = ["Acer Nitro 5 AN515-44 (NH.Q9HEU.00L) Black", "Acer Aspire 3 A315-34-C0JQ (NX.HE3EU.004) Black", "Acer Aspire 3 A315-57G (NX.HZREU.00K) Black", "HP 15s-eq1010ua (389V1EA) Natural Silver", "HP 245 G8 14 (32M44EA) Charcoal Black", "Lenovo Gaming 3 15ARH05 (82EY00BMRA) Chameleon", "Acer Swift 1 SF114-34 (NX.A7BEU.00P) Safari Gold", "Lenovo ThinkPad X1 Carbon (20QESCNN00) Black", "Apple New MacBook Air M1 13.3'' 256Gb MGN63 Space", "Apple New MacBook Pro M1 13'' TB 256Gb MYD82 Space"];

    for (let i = 0; i < goodsList.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('unit');

        let newP = document.createElement('p');
        newP.classList.add('name');
        newP.innerHTML = names[i];
        newDiv.appendChild(newP);

        newDiv.style.backgroundImage = 'url(' + goodsList[i] + ')';
        tmp.appendChild(newDiv);

        let buyButton = document.createElement('button');
        buyButton.classList.add('button');
        buyButton.textContent = 'Add to basket';
        newDiv.appendChild(buyButton);        
    };

    containerDiv.appendChild(tmp);
};

createDivs();


let counter1 = 0;
let buttons = document.querySelectorAll('button');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        document.getElementById('counter').innerHTML = ++counter1;
        document.getElementById('counter').style.position= "absolute";
        document.getElementById('counter').style.marginTop = "5px";
        document.getElementById('counter').style.marginLeft = "-30px";        
    });
};