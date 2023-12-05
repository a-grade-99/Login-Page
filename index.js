const labels = document.querySelectorAll('label');
labels.forEach(label => {
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

