// Password Generator Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('lengthValue');
    const uppercaseCheck = document.getElementById('uppercase');
    const numbersCheck = document.getElementById('numbers');
    const symbolsCheck = document.getElementById('symbols');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const passwordDisplay = document.getElementById('passwordDisplay');
    
    // Character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Update length display
    lengthSlider.addEventListener('input', function() {
        lengthValue.textContent = this.value;
    });
    
    // Generate password function
    function generatePassword() {
        const length = parseInt(lengthSlider.value);
        let charset = lowercase; // Always include lowercase
        let password = '';
        
        // Build character set based on options
        if (uppercaseCheck.checked) {
            charset += uppercase;
        }
        if (numbersCheck.checked) {
            charset += numbers;
        }
        if (symbolsCheck.checked) {
            charset += symbols;
        }
        
        // Generate random password
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        
        // Ensure at least one character from each selected type
        if (uppercaseCheck.checked && !/[A-Z]/.test(password)) {
            const pos = Math.floor(Math.random() * password.length);
            password = password.substring(0, pos) + 
                      uppercase[Math.floor(Math.random() * uppercase.length)] + 
                      password.substring(pos + 1);
        }
        
        if (numbersCheck.checked && !/[0-9]/.test(password)) {
            const pos = Math.floor(Math.random() * password.length);
            password = password.substring(0, pos) + 
                      numbers[Math.floor(Math.random() * numbers.length)] + 
                      password.substring(pos + 1);
        }
        
        if (symbolsCheck.checked && !/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
            const pos = Math.floor(Math.random() * password.length);
            password = password.substring(0, pos) + 
                      symbols[Math.floor(Math.random() * symbols.length)] + 
                      password.substring(pos + 1);
        }
        
        return password;
    }
    
    // Generate password on button click
    generateBtn.addEventListener('click', function() {
        const password = generatePassword();
        passwordDisplay.textContent = password;
        copyBtn.disabled = false;
    });
    
    // Copy password to clipboard
    copyBtn.addEventListener('click', function() {
        const password = passwordDisplay.textContent;
        
        if (password && password !== 'Your secure password will appear here') {
            navigator.clipboard.writeText(password).then(function() {
                // Visual feedback
                const originalText = copyBtn.textContent;
                copyBtn.textContent = '✓ Copied!';
                copyBtn.style.backgroundColor = '#66BB6A';
                
                setTimeout(function() {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '';
                }, 2000);
            }).catch(function(err) {
                alert('Failed to copy password: ' + err);
            });
        }
    });
    
    // Generate initial password on page load
    generateBtn.click();
});

