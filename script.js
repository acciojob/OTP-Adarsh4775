document.addEventListener('DOMContentLoaded', function () {
    const codeInputs = document.querySelectorAll('.code');
    let focusedInputIndex = 0;

    codeInputs[focusedInputIndex].focus();

    codeInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;

            if (value.length === 1 && focusedInputIndex < codeInputs.length - 1) {
                focusedInputIndex++;
                codeInputs[focusedInputIndex].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                if (focusedInputIndex > 0) {
                    e.preventDefault();
                    input.value = '';
                    focusedInputIndex--;
                    codeInputs[focusedInputIndex].focus();
                }
            }
        });
    });
});
