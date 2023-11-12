// Создаем новый XMLHttpRequest объект
var xhr = new XMLHttpRequest();
// Указываем метод запроса и URL
xhr.open('GET', 'http://127.0.0.1:8000/api/get_page_info/?id=2', true);
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
    document.getElementById('salary').innerHTML = data.salary;
    document.getElementById('photo').src = data.photo;
    document.getElementById('description').innerHTML = data.description;
    
    // // Вставляем данные об опыте работы
    // var experienceList = document.getElementById('experience');
    // data.experience.forEach(function(experience) {
    //   var listItem = document.createElement('li');
    //   listItem.innerHTML = '<strong>' + experience.title + '</strong>: ' + experience.description;
    //   experienceList.appendChild(listItem);
    // });
    
    // // Вставляем данные о навыках
    // var skillList = document.getElementById('skill');
    // data.skill.forEach(function(skill) {
    //   var listItem = document.createElement('li');
    //   listItem.innerHTML = skill;
    //   skillList.appendChild(listItem);
    // });
    
    // // Вставляем данные о проектах
    // var caseList = document.getElementById('case');
    // data.case.forEach(function(project) {
    //   var listItem = document.createElement('li');
    //   listItem.innerHTML = '<strong>' + project.title + '</strong>: ' + project.description + ' (<a href="' + project.link + '">ссылка</a>)';
    //   caseList.appendChild(listItem);
    // });
  }
};