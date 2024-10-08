document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('feedbackForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission
        clearErrors();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let country = document.getElementById('country').value;
        let valid = true;

        // Name validation
        if (name.trim() === "") {
            console.log('Name is missing');  
            document.getElementById('nameError').style.display = 'block';  
            valid = false;
        }

        // Email validation 
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!emailPattern.test(email.trim())) {
            document.getElementById('emailError').style.display = 'block';
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            valid = false;
        }
        

        // Country validation
        if (country === "") {
            console.log('Country is missing');  
            document.getElementById('countryError').style.display = 'block';  
            valid = false;
        }

        // If the form is valid, submit it after showing the alert
        if (valid) {
            console.log('Form is valid');
            alert('Form submitted successfully!');
            setTimeout(function() {
                form.submit();  // Delay the actual form submission to let the alert display
            }, 100);  // Give it a short delay to allow the alert to show before form submission
        }
    });

    // Hide the error message
    function clearErrors() {
        console.log('Clearing previous errors');  
        document.getElementById('nameError').style.display = 'none';  
        document.getElementById('emailError').style.display = 'none';  
        document.getElementById('countryError').style.display = 'none';  
    }

    // Character counter for feedback textarea 
    const feedback = document.getElementById('comments');
    const charCount = document.getElementById('charCount');

    feedback.addEventListener('input', function() {
        const currentLength = feedback.value.length;
        charCount.textContent = `${currentLength}/200 characters`;

        // Limit feedback to 200 characters
        if (currentLength > 200) {
            feedback.value = feedback.value.substring(0, 200);
            charCount.textContent = '200/200 characters';
        }
    });


    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", 
        "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
        "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", 
        "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
        "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", 
        "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
        "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", 
        "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", 
        "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", 
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
        "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
        "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", 
        "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
        "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", 
        "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", 
        "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", 
        "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", 
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];
    

    const countrySelect = document.getElementById('country');

    let defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Select a country";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    countrySelect.appendChild(defaultOption);

    countries.forEach(function(country) {
        let option = document.createElement('option');
        option.value = country.toLowerCase();  
        option.text = country;
        countrySelect.appendChild(option);
    });
});

