// ================================================================

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const storageKey = 'feedback-form-state';

// ================================================================

form.addEventListener('input', onFormInput);

function onFormInput() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const localObj = {
    email,
    message,
  };

  setToLocal(storageKey, localObj);
}

function setToLocal(key, value) {
  const stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}

function getToLocal(key) {
  const storage = localStorage.getItem(key);
  try {
    return JSON.parse(storage);
  } catch {
    return storage;
  }
}

function insertLocalForm() {
  const data = getToLocal(storageKey) || {};
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

insertLocalForm();

// ================================================================

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('All form fields must be filled in');
    return;
  }

  const localObj = {
    email,
    message,
  };
  console.log(localObj);

  localStorage.removeItem(storageKey);
  form.reset();
}

// ================================================================
