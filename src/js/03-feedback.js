const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const save = value => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem('feedback-form-state', serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = () => {
  try {
    const serializedState = localStorage.getItem('feedback-form-state');
    return serializedState === null ? {} : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const onInput = function (e) {
  const formData = load();
  formData[e.target.name] = e.target.value;
  save(formData);
};

const onSubmit = function (e) {
  e.preventDefault();
  console.log(load());
  localStorage.removeItem('feedback-form-state');
  form.reset();
};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const onUpdate = function () {
  const formData = load();
  email.value = formData.email ? formData.email : '';
  message.value = formData.message ? formData.message : '';
};
onUpdate();
