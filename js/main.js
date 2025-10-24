// ===================================
// Engineering College - Main JavaScript
// ===================================

'use strict';

// ===== DOM Content Loaded Event =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initProgramFilter();
    initReadMore();
    initContactForm();
    initRegistrationForm();
    initNavbarActiveState();
    initSmoothScroll();
});

// ===== Interactive Feature 1: Program Filter =====
function initProgramFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const programCards = document.querySelectorAll('.program-card');
    
    if (filterButtons.length === 0 || programCards.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter program cards with fade effect
            programCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Set initial styles
    programCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    });
}

// ===== Interactive Feature 2: Read More Toggle =====
function initReadMore() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    if (readMoreButtons.length === 0) return;
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contentId = this.getAttribute('data-content');
            const moreContent = document.getElementById(contentId);
            
            if (!moreContent) return;
            
            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                moreContent.style.display = 'block';
                this.textContent = 'Read Less';
                this.classList.remove('btn-outline-primary');
                this.classList.add('btn-primary');
            } else {
                moreContent.style.display = 'none';
                this.textContent = 'Read More';
                this.classList.remove('btn-primary');
                this.classList.add('btn-outline-primary');
            }
        });
    });
}

// ===== Contact Form Validation and Submission =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!contactForm.checkValidity()) {
            e.stopPropagation();
            contactForm.classList.add('was-validated');
            return;
        }
        
        // Check anti-spam answer
        const antispamInput = document.getElementById('antispam');
        if (antispamInput && antispamInput.value !== '8') {
            antispamInput.classList.add('is-invalid');
            return;
        }
        
        // Simulate form submission
        const messageDiv = document.getElementById('contactFormMessage');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
        
        setTimeout(() => {
            messageDiv.style.display = 'block';
            messageDiv.className = 'alert alert-success';
            messageDiv.innerHTML = '<strong>Success!</strong> Your message has been sent. We will get back to you within 24 hours.';
            
            contactForm.reset();
            contactForm.classList.remove('was-validated');
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
            
            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1500);
    });
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.checkValidity()) {
                this.classList.add('is-valid');
                this.classList.remove('is-invalid');
            } else {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
            }
        });
        
        input.addEventListener('input', function() {
            if (contactForm.classList.contains('was-validated')) {
                if (this.checkValidity()) {
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                } else {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                }
            }
        });
    });
}

// ===== Registration Form Validation and Submission =====
function initRegistrationForm() {
    const registrationForm = document.getElementById('registrationForm');
    
    if (!registrationForm) return;
    
    // Password match validation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    if (password && confirmPassword) {
        const validatePasswordMatch = function() {
            if (confirmPassword.value === '') {
                confirmPassword.classList.remove('is-valid', 'is-invalid');
                return;
            }
            
            if (password.value === confirmPassword.value && password.value !== '') {
                confirmPassword.classList.add('is-valid');
                confirmPassword.classList.remove('is-invalid');
            } else {
                confirmPassword.classList.add('is-invalid');
                confirmPassword.classList.remove('is-valid');
            }
        };
        
        password.addEventListener('input', validatePasswordMatch);
        confirmPassword.addEventListener('input', validatePasswordMatch);
    }
    
    // Form submission
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate all fields
        if (!registrationForm.checkValidity()) {
            e.stopPropagation();
            registrationForm.classList.add('was-validated');
            isValid = false;
        }
        
        // Check password match
        if (password && confirmPassword && password.value !== confirmPassword.value) {
            confirmPassword.classList.add('is-invalid');
            isValid = false;
        }
        
        // Check study mode radio buttons
        const studyModeRadios = registrationForm.querySelectorAll('input[name="studyMode"]');
        const studyModeChecked = Array.from(studyModeRadios).some(radio => radio.checked);
        
        if (!studyModeChecked) {
            document.getElementById('studyModeError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('studyModeError').style.display = 'none';
        }
        
        // Check terms checkbox
        const agreeTerms = document.getElementById('agreeTerms');
        if (agreeTerms && !agreeTerms.checked) {
            agreeTerms.classList.add('is-invalid');
            isValid = false;
        }
        
        if (!isValid) {
            // Scroll to first invalid field
            const firstInvalid = registrationForm.querySelector('.is-invalid, :invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalid.focus();
            }
            return;
        }
        
        // Simulate form submission
        const messageDiv = document.getElementById('registrationFormMessage');
        const submitButton = registrationForm.querySelector('button[type="submit"]');
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';
        
        setTimeout(() => {
            messageDiv.style.display = 'block';
            messageDiv.className = 'alert alert-success';
            messageDiv.innerHTML = `
                <h4 class="alert-heading">Registration Successful!</h4>
                <p>Thank you for registering with Engineering College. Your application has been submitted successfully.</p>
                <hr>
                <p class="mb-0">You will receive a confirmation email at <strong>${document.getElementById('email').value}</strong> within 24 hours with next steps.</p>
            `;
            
            registrationForm.reset();
            registrationForm.classList.remove('was-validated');
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Registration';
            
            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Remove validation classes
            const allInputs = registrationForm.querySelectorAll('.is-valid, .is-invalid');
            allInputs.forEach(input => {
                input.classList.remove('is-valid', 'is-invalid');
            });
        }, 2000);
    });
    
    // Real-time validation for all inputs
    const formInputs = registrationForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (registrationForm.classList.contains('was-validated')) {
                if (this.checkValidity()) {
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                } else {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                }
            }
        });
        
        input.addEventListener('input', function() {
            if (registrationForm.classList.contains('was-validated')) {
                if (this.checkValidity()) {
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                } else {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                }
            }
        });
    });
    
    // Study mode radio validation
    const studyModeRadios = registrationForm.querySelectorAll('input[name="studyMode"]');
    studyModeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('studyModeError').style.display = 'none';
        });
    });
}

// ===== Active Navigation State =====
function initNavbarActiveState() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

// ===== Smooth Scroll for Anchor Links =====
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ===== Form Reset Handler =====
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('reset', function() {
            setTimeout(() => {
                const allInputs = form.querySelectorAll('.is-valid, .is-invalid');
                allInputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
                form.classList.remove('was-validated');
                
                const messageDiv = form.querySelector('[id$="FormMessage"]');
                if (messageDiv) {
                    messageDiv.style.display = 'none';
                }
            }, 10);
        });
    });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 0.5rem 1.5rem rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
        }
    }
});

// ===== Accessibility: Keyboard Navigation Enhancement =====
document.addEventListener('keydown', function(e) {
    // Escape key closes modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) bsModal.hide();
        });
    }
});