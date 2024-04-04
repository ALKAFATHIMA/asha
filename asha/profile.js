function showProfileForm() {
    const profileDetails = document.getElementById('profile-details');
    const passwordChange = document.getElementById('password-change');
    profileDetails.classList.remove('hidden');
    passwordChange.classList.add('hidden');
    
    
    
}

function showChangePasswordForm() {
    const profileDetails = document.getElementById('profile-details');
    const passwordChange = document.getElementById('password-change');
    profileDetails.classList.add('hidden');
    passwordChange.classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
}

function logout() {
    // Perform logout logic here
    alert('Logged out successfully!');
}

document.addEventListener('DOMContentLoaded', function() {
    const backLink = document.getElementById('back-link');
    backLink.href = document.referrer;
});

/// Function to show the overlay
function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
}

// Function to hide the overlay
function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

/*function toggle()
{
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')

    var popup = document.getElementById('popup');
    popup.classList.toggle('active')

    
 
    
    
}

function toggles()
{
    var blur = document.getElementsById('blur');
    blur.classList.toggles('active')


 
    var pop = document.getElementById('pop');
    pop.classList.toggles('active')
    
}*/

function showOverlayWithForm(formId) {
    const overlay = document.getElementById('overlay');
    const form = document.getElementById(formId);
    overlay.style.display = 'block';
    form.style.display = 'block';
}

// Function to hide the overlay and form
function hideOverlayWithForm(formId) {
    const overlay = document.getElementById('overlay');
    const form = document.getElementById(formId);
    overlay.style.display = 'none';
    form.style.display = 'none';
}

// Example of toggling the overlay and form
function toggleOverlayWithForm(formId) {
    const overlay = document.getElementById('overlay');
    const form = document.getElementById(formId);
    if (overlay.style.display === 'block') {
        // If overlay is currently visible, hide it along with the form
        hideOverlayWithForm(formId);
    } else {
        // If overlay is currently hidden, show it along with the form
        showOverlayWithForm(formId);
    }
}