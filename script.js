document.addEventListener('DOMContentLoaded', function () {
    const codeInputs = document.querySelectorAll('.code');

    codeInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;

            if (value.length === 1 && index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && index > 0) {
                e.preventDefault();
                input.value = '';
                codeInputs[index - 1].focus();
            }
        });
    });
});
