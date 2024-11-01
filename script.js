// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);    
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



// Conatct form validation
document.getElementById('conact_form_btn').addEventListener('click', (e) => {
    e.preventDefault(); 

    // Collect input values
    let contactName = document.getElementById('cotactname').value.trim();
    let contactEmail = document.getElementById('contact_email').value.trim();
    let contactAge = document.getElementById('Contact_age').value;
    let contactTextArea = document.getElementById('textmeasage').value.trim();
    let genderSelected = document.querySelector('input[name="gender"]:checked');

    let errorMsg = document.getElementById('error_msg');
    let successMsg = document.getElementById('success_msg');
    errorMsg.style.display = "none"; 
    successMsg.style.display = "none"; 

    // Validation logic
    let errors = [];
    let regMAil = /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;

    if (contactName === "" && contactName.length < 3) {
        errors.push("Please enter a valid name with at least 3 characters.");
    }

    else if (contactEmail === "" && regMAil.test(contactEmail)) {
        errors.push("Please enter a valid email.");
    }

     else if (contactAge === "") {
        errors.push("Please enter your date of birth.");
    }

     else if (!genderSelected) {
        errors.push("Please select your gender.");
    }

     else if (contactTextArea === "") {
        errors.push("Message cannot be empty.");
    }

    // Display errors or success message
    if (errors.length > 0) {
        errorMsg.innerText = errors.join(" ");
        errorMsg.style.display = "block";  
        errorMsg.style.color = "red";      
        successMsg.style.display = "none"; 
    } else {
        successMsg.innerText = "Form submitted successfully!";
        successMsg.style.display = "block";  
        successMsg.style.color = "green";    
        errorMsg.style.display = "none";     

        document.querySelector("form").submit(); 
    }
});


// modal

// Get modal element and close button
const modal = document.querySelector('.modal');
const closeModal = document.getElementById('modal_close');

// Open modal when any "Book Now" button is clicked
document.querySelectorAll('#modal_open').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if user clicks outside of modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});




