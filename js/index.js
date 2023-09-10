const $recipe = document.getElementById('recipe');
const $equipment = document.getElementById('equipment');
const $contact = document.getElementById('contact');
const modalOpen = document.querySelectorAll('.modal_open');
const modalClose = document.querySelector('.modal-close');

const $form_recipe = document.querySelector('.recipe');
const $form_equipment = document.querySelector('.equipment');
const $form_contact = document.querySelector('.footer');

const scrollToForm = (btn, form) => {
    if (btn == $contact) {
        btn.addEventListener('click', () => {
            form.scrollIntoView({
                block: "nearest",
                behavior: "smooth"
            })});
        } else { 
            btn.addEventListener('click', () => {
                form.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                })});
            }
    };

scrollToForm ($recipe, $form_recipe);
scrollToForm ($equipment, $form_equipment);
scrollToForm ($contact, $form_contact);

modalOpen.forEach(item => item.addEventListener('click', () => {document.querySelector('.modal').classList.add('open')}));

modalClose.addEventListener('click', () => {document.querySelector('.modal').classList.remove('open')});
