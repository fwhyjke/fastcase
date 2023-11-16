// Создаем новый XMLHttpRequest объект
var xhr = new XMLHttpRequest();
var pageId = '{{ page_id }}';
// Указываем метод запроса и URL
xhr.open('GET', 'http://127.0.0.1:8000/api/get_page_info/?id=' + pageId, true);
// Отправляем запрос
xhr.send();
// Отслеживаем изменение состояния запроса
xhr.onreadystatechange = function() {
  // Проверяем, что запрос успешно завершен и статус ответа 200 (OK)
  if (xhr.readyState == 4 && xhr.status == 200) {
    // Парсим JSON ответ
    var data = JSON.parse(xhr.responseText);

    // Находим элементы HTML-разметки, куда нужно вставить данные, и обновляем их значения
//    document.getElementById('user').innerHTML = data.user;
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('job').innerHTML = data.job;
    document.getElementById('salary').innerHTML = data.salary;
    document.getElementById('photo').src = data.photo;
    document.getElementById('description').innerHTML = data.description;
  }
};