import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const SAVED_FORM = 'saved-form';

const savedForm = localStorage.getItem(SAVED_FORM);
if (savedForm) {
    const values = JSON.parse(savedForm);
    Object.keys(values).forEach(key => {
        form.elements[key].value = values[key];
    });
}

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(SAVED_FORM)));
    form.reset();
    localStorage.removeItem(SAVED_FORM);
});

form.addEventListener('input', throttle(event => {
    const storedForm = localStorage.getItem(SAVED_FORM);
    const savedForm = storedForm?JSON.parse(storedForm):{};
    savedForm[event.target.name]=event.target.value;
    localStorage.setItem(SAVED_FORM, JSON.stringify(savedForm))
}, 500));