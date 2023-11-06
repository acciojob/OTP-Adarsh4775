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
                } else if (focusedInputIndex === codeInputs.length - 1) {
                    // If 'Backspace' is pressed on the last input, maintain its ID as 'code-5'
                    input.value = '';
                }
            }
        });
    });
});
