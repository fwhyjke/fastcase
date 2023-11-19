var userId = document.getElementById('my-element').dataset.userId;

document.addEventListener("DOMContentLoaded", function () {
    // Замените "ваш_эндпоинт" на реальный URL вашего API
    var apiUrl = 'http://127.0.0.1:8000/api/get_user_pages/' + userId;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            if (data && data.pages && data.pages.length > 0) {
                // Получаем список страниц и заполняем данными
                var pageList = document.querySelector('.page-list');
                data.pages.forEach(function (page) {
                    // Создаем элемент списка для каждой страницы
                    var listItem = document.createElement('li');
                    listItem.innerHTML = '<div class="page-info">' +
                        '<div class="row">' +
                        '<div class="center-wraper row-name"><p>Ссылка:</p></div>' +
                        '<a class="page-link center-wraper" id="link" href="' + page.link + '">' + page.link + '</a>' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="center-wraper row-name"><p>Имя:</p></div>' +
                        '<p class="infos center-wraper" id="name">' + page.name + '</p>' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="center-wraper row-name"><p>Должность:</p></div>' +
                        '<p class="infos center-wraper" id="job">' + page.job + '</p>' +
                        '</div>' +
                        '<div class="row">' +
                        '<div class="center-wraper row-name"><p>Зарплата:</p></div>' +
                        '<p class="infos center-wraper" id="salary">' + page.salary + '</p>' +
                        '</div>' +
                        '<div>' +
                        '<a class="change-btn" href="#">изменить</a>' +
                        '<a class="del-btn" href="#">удалить</a>' +
                        '</div>' +
                        '</div>';


                    // Добавляем элемент в список
                    pageList.appendChild(listItem);
                });
            } else {
                // Сообщение, если список страниц пуст
                var pageList = document.querySelector('.page-list');
                var listItem = document.createElement('div');
                listItem.innerHTML = '<div class="center-wraper"><p class="username">Список страниц пуст</p></div>';
                pageList.appendChild(listItem);
            }
        } else if (xhr.readyState === 4) {
            console.log("Error fetching data. Status: " + xhr.status);
        }
    };
    xhr.send();
});