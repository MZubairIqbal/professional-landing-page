// console.log("This is to Check the Linkage Between HTML And JavaScript Files...");

//FAQ Accordion 
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');


    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        if (!groupHeader) {
            return;
        }

        const group = groupHeader.parentElement;
        const gropBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toogle Icon Plus or Minus
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toogl Visibility of faqBody
        gropBody.classList.toggle('open');

        // Close other Opend FAQ bodies 
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});



// Mobile Menu Toggler
document.addEventListener('DOMContentLoaded', () => {

    const btnhamburger = document.querySelector('#hamburger-button');
    const mobileM = document.querySelector('.mobile-menu');
    btnhamburger.addEventListener('click', () => {
        mobileM.classList.toggle('active');
    });
});