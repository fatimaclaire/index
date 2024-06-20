<!-- function generateReceipt() {
    let receiptContent = "Orders:\n\n";
    let totalAmount = 0;

   
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            
            const itemDetails = checkbox.parentNode.querySelector('.item-details');
            const itemName = itemDetails.querySelector('h3').textContent; 
            const price = parseFloat(itemDetails.querySelector('p').textContent.replace('Php. ', '')); 
            const quantity = parseFloat(itemDetails.querySelector('input[type="number"]').value); 
            const itemTotal = price * quantity;

          
            receiptContent += `${itemName} x ${quantity} = Php. ${itemTotal.toFixed(2)}\n`;

        
            totalAmount += itemTotal;
        }
    });

    
    receiptContent += `\nTotal Amount: Php. ${totalAmount.toFixed(2)}`;

    
    const receipt = document.getElementById('receipt');
    receipt.textContent = receiptContent;
}
-->