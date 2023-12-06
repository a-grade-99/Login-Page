const { JSDOM } = require('jsdom');

// Your JavaScript code
const labels = document.querySelectorAll('label');
labels.forEach((label) => {
  const input = document.getElementById(label.getAttribute('for'));
  input.addEventListener('focus', () => {
    label.style.display = 'block';
  });
  input.addEventListener('blur', () => {
    if (input.value === '') {
      label.style.display = 'none';
    }
  });
});

// Jest test
test('your test description', () => {
  // Set up a DOM environment
  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  global.document = dom.window.document;

  // Add your HTML content if needed
  document.body.innerHTML = `
    <label for="input1">Label 1</label>
    <input id="input1" type="text" />
    <label for="input2">Label 2</label>
    <input id="input2" type="text" />
  `;

  // Trigger focus and blur events on inputs (simulate user interactions)
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const label1 = document.querySelector('label[for="input1"]');
  const label2 = document.querySelector('label[for="input2"]');

  input1.focus();
  expect(label1.style.display).toBe('block');

  input1.blur();
  expect(label1.style.display).toBe('none');

  input2.focus();
  expect(label2.style.display).toBe('block');

  input2.blur();
  expect(label2.style.display).toBe('none');
});