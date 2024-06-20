//NAVIGATION
window.onload = function() {
    showPage('home');
};
function showPage(pageId) {
    var sections = document.querySelectorAll('.home, .jeans, .shirts, .sando, .perfume, .toys, .history'); 
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(pageId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

//ITEM IMAGES
var modal = document.getElementById("myModal");

var modalImg = document.getElementById("modalImg");
var imgs = document.getElementsByClassName("modal-trigger");
var i;

for (i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
//Image end


// INVENTORY
let stocks = {
    jeans1: 23,
    jeans2: 12,
    jeans3: 35,
    jeans4: 12,
    shirts1: 3,
    shirts2: 2,
    shirts3: 10,
    shirts4: 2,
    sando1: 65,
    sando2: 98,
    sando3: 21,
    sando4: 47,
    perfume1: 8,
    perfume2: 7,
    perfume3: 9,
    perfume4: 6,
    toys1: 23,
    toys2: 28,
    toys3: 11,
    toys4: 3,
};

// Function to show/hide pages
function showPage(pageId) {
 //Hide
    const pages = document.querySelectorAll('.home, .jeans, .shirts, .sando, .perfume, .toys');
    pages.forEach(page => {
        page.style.display = 'none';
    });
//Show
    document.getElementById(pageId).style.display = 'block';
}

//add stock
function addStock(itemId) {
    const quantity = parseInt(document.getElementById('add-stock-' + itemId).value);
    if (!isNaN(quantity) && quantity > 0) {
        stocks[itemId] += quantity;
        document.getElementById('stock-' + itemId).textContent = stocks[itemId];
    } else {
        alert('Please enter a valid quantity.');
    }
}

// deduct stock
function deductStock(itemId) {
    const quantity = parseInt(document.getElementById('add-stock-' + itemId).value);
    if (!isNaN(quantity) && quantity > 0 && stocks[itemId] >= quantity) {
        stocks[itemId] -= quantity;
        document.getElementById('stock-' + itemId).textContent = stocks[itemId];
    } else {
        alert('Invalid quantity or insufficient stock.');
    }
}

//Receipt
// Function to generate a receipt
function generateReceipt(category) {
    var checkedItems = document.querySelectorAll('.' + category + ' .item-checkbox:checked');
    var totalPrice = 0;
    var selectedItemsList = ""; // Initialize an empty string to store selected items
    checkedItems.forEach(function(item) {
        var itemName = item.parentElement.querySelector('.itemized-' + category + ' h3').innerText; // Get item name
        var priceText = item.parentElement.querySelector('.itemized-' + category + ' .price').innerText;
        var price = parseInt(priceText.replace('Price: Php. ', ''));
        var quantityInput = item.parentElement.querySelector('.itemized-' + category + ' input[name="item_quantity"]');
        var quantity = parseInt(quantityInput.value);
        totalPrice += price * quantity; // Multiply price by quantity
        // Add the selected item to the list
        selectedItemsList += itemName + ' x ' + quantity + '<br>';
    });

    // Applying discount
    var discountType = document.querySelector('input[name="discountType"]:checked');
    if (discountType) {
        var discountValue = 0;
        switch (discountType.value) {
            case 'student':
                discountValue = 0.1;
                break;
            case 'pwd':
                discountValue = 0.3;
                break;
            case 'senior':
                discountValue = 0.2;
                break;
            default:
                discountValue = 0;
                break;
        }
        totalPrice -= totalPrice * discountValue;
    }

    var cashInput = document.getElementById('cashInput');
    var cashAmount = parseInt(cashInput.value);
    var change = cashAmount - totalPrice;

    // Displaying the receipt
    var receiptContainer = document.querySelector('.' + category + ' .receipt');
    receiptContainer.innerHTML = '<h3>Receipt</h3>' +
        '<p>Selected Items:</p>' +
        '<p>' + selectedItemsList + '</p>' +
        '<p>Total Price: Php. ' + totalPrice.toFixed(2) + '</p>' +
        '<p>Cash: Php. ' + cashAmount.toFixed(2) + '</p>' +
        '<p>Change: Php. ' + change.toFixed(2) + '</p>';
}
