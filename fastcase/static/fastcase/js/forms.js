function addForm(formsetPrefix) {
    const formset = document.getElementById(formsetPrefix + "-formset");
    const formTemplate = document.getElementById(formsetPrefix + "-form-block");
    const newForm = formTemplate.cloneNode(true);
    newForm.style.display = "block";
    formset.appendChild(newForm);
  }

    // Функция для удаления блока формы
    function removeForm(event) {
        const formBlock = event.target.closest(".form-block");
        formBlock.remove();
    }

    // Обработчик клика на кнопку "Добавить навык"
    document.getElementById("add-skill-form").addEventListener("click", () => {
        addForm("skill");
    });

    // Обработчик клика на кнопку "Добавить проект"
    document.getElementById("add-case-form").addEventListener("click", () => {
        addForm("case");
    });

    // Обработчик клика на кнопку "Добавить опыт работы"
    document.getElementById("add-experience-form").addEventListener("click", () => {
        addForm("experience");
    });

    // Обработчик клика на кнопку "Удалить"
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-form")) {
            removeForm(event);
        }
    });
