document.getElementById('submit-button').addEventListener('click', function () {
    const userEmailField = document.getElementById('customer-email');
    const userEmail = userEmailField.value;
    
    // user password section
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    
    // check validation
    if (userEmail == 'admin@admin.com' && userPassword == 12345) {
        window.location.href= 'banking.html'
    }
})
