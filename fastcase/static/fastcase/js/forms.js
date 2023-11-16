    // Функция для добавления нового блока формы
function addForm(formsetPrefix) {
    const formset = document.getElementById(formsetPrefix + "-formset");
    const formCount = formset.getElementsByTagName("form").length;
    const newForm = document.createElement("div");
    newForm.classList.add("form-block");
    newForm.innerHTML = document.getElementById("empty-" + formsetPrefix + "-form").innerHTML.replace(/__prefix__/g, formCount);
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

