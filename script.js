document.addEventListener('DOMContentLoaded', function () {
    // Set the ID of the input field with ID 'code-0' to 'code-1'
    document.getElementById('code-0').id = 'code-1';

    // Set the IDs for the remaining input fields
    for (let i = 1; i <= 5; i++) {
        document.getElementById('code-' + i).id = 'code-' + (i + 1);
    }

    const codeInputs = document.querySelectorAll('.code');
    let focusedInputIndex = 0;

    // Set the initial focus to the input with ID 'code-1'
    if (codeInputs[focusedInputIndex].id === 'code-1') {
        codeInputs[focusedInputIndex].focus();
    }

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
