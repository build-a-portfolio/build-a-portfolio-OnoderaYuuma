(function () {
    if (window.emailjs) {
        emailjs.init("JPwewp9w9vkcRLA6F");
    }
})();

function showToast(message, type = "info") {
    const palette = {
        success: { background: "#007bff", color: "#ffffff" },
        error: { background: "#ff0000", color: "#ffffff" },
    };

    Toastify({
        text: message,
        duration: 3000,
        gravity: "bottom",
        position: "center",
        style: palette[type] || palette.success,
    }).showToast();
}

window.addEventListener("load", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const formFields = Array.from(form.querySelectorAll(".contactPage_form_box input, .contactPage_form_box textarea"));
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const setFieldState = (field, isValid) => {
        const wrapper = field.closest(".contactPage_form_box");
        if (!wrapper) return;
        wrapper.classList.toggle("is-invalid", !isValid);
        field.setAttribute("aria-invalid", isValid ? "false" : "true");
    };

    const resetFieldState = (field) => {
        const wrapper = field.closest(".contactPage_form_box");
        if (!wrapper) return;
        wrapper.classList.remove("is-invalid");
        field.setAttribute("aria-invalid", "false");
    };

    formFields.forEach((field) => {
        field.addEventListener("input", () => {
            const value = field.value.trim();
            if (field.name === "email") {
                setFieldState(field, value === "" || emailPattern.test(value));
            } else {
                setFieldState(field, value !== "");
            }
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameField = this.querySelector('input[name="name"]');
        const emailField = this.querySelector('input[name="email"]');
        const subjectField = this.querySelector('input[name="subject"]');
        const messageField = this.querySelector('textarea[name="message"]');

        const validationList = [
            { field: nameField, message: "お名前を入力してください。" },
            { field: subjectField, message: "件名を入力してください。" },
            { field: messageField, message: "メッセージを入力してください。" },
        ];

        let hasError = false;

        validationList.forEach(({ field, message }) => {
            if (!field.value.trim()) {
                setFieldState(field, false);
                hasError = true;
                showToast(message, "error");
            } else {
                setFieldState(field, true);
            }
        });

        const emailValue = emailField.value.trim();
        if (!emailValue || !emailPattern.test(emailValue)) {
            setFieldState(emailField, false);
            hasError = true;
            showToast("有効なメールアドレスを入力してください。", "error");
        } else {
            setFieldState(emailField, true);
        }

        if (hasError) {
            return;
        }

        if (!this.checkValidity()) {
            this.reportValidity();
            return;
        }

        this.contact_number.value = (Math.random() * 100000) | 0;
        emailjs.sendForm("service_tbbfmrd", "template_o3ryyfp", this).then(
            function () {
                console.log("SUCCESS!");
                this.reset();
                formFields.forEach((field) => resetFieldState(field));
                showToast("メールを送信しました！", "success");
            }.bind(this),
            function (error) {
                console.log("FAILED...", error);
                showToast("メールの送信に失敗しました", "error");
            },
        );
    });
});
