
document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.getElementById("add-skill-form");
    var formContainer = document.getElementById("skill-formset");

    addButton.addEventListener("click", function () {
        // Находим первый блок формы со стилем "none"
        var hiddenForm = Array.from(formContainer.querySelectorAll(".form-block")).find(function (form) {
            return form.style.display === "none";
        });

        // Если есть блок со стилем "none", то изменяем его стиль на "block"
        if (hiddenForm) {
            hiddenForm.style.display = "block";
        }
    });

    // Добавляем обработчик события для кнопки "удалить"
    formContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-form")) {
            // Находим родительский блок формы
            var formBlock = event.target.closest(".form-block");

            // Если нашли, изменяем стиль на "none"
            if (formBlock) {
                formBlock.style.display = "none";
            }
        }
    });
});


    document.addEventListener("DOMContentLoaded", function () {
        var addButton = document.getElementById("add-experience-form");
        var formContainer = document.getElementById("experience-formset");

        addButton.addEventListener("click", function () {
            // Находим первый блок формы со стилем "none"
            var hiddenForm = Array.from(formContainer.querySelectorAll(".form-block")).find(function (form) {
                return form.style.display === "none";
            });

            // Если есть блок со стилем "none", то изменяем его стиль на "block"
            if (hiddenForm) {
                hiddenForm.style.display = "block";
            }
        });

            // Добавляем обработчик события для кнопки "удалить"
    formContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-form")) {
            // Находим родительский блок формы
            var formBlock = event.target.closest(".form-block");

            // Если нашли, изменяем стиль на "none"
            if (formBlock) {
                formBlock.style.display = "none";
            }
        }
    });
    });


    document.addEventListener("DOMContentLoaded", function () {
        var addButton = document.getElementById("add-case-form");
        var formContainer = document.getElementById("case-formset");

        addButton.addEventListener("click", function () {
            // Находим первый блок формы со стилем "none"
            var hiddenForm = Array.from(formContainer.querySelectorAll(".form-block")).find(function (form) {
                return form.style.display === "none";
            });

            // Если есть блок со стилем "none", то изменяем его стиль на "block"
            if (hiddenForm) {
                hiddenForm.style.display = "block";
            }
        });

            // Добавляем обработчик события для кнопки "удалить"
    formContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-form")) {
            // Находим родительский блок формы
            var formBlock = event.target.closest(".form-block");

            // Если нашли, изменяем стиль на "none"
            if (formBlock) {
                formBlock.style.display = "none";
            }
        }
    });
    });

