var pageId = document.getElementById('my-element').dataset.pageId;

// Функция для создания AJAX запроса
function makeAjaxRequest(url, method, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var data = JSON.parse(xhr.responseText);
          callback(data);
      }
  };
  xhr.send();
}

// Используем функцию для загрузки данных с API
makeAjaxRequest('http://127.0.0.1:8000/api/get_page_info/?id=' + pageId, 'GET', function (data) {
  // Здесь можно использовать полученные данные для заполнения HTML

  // Пример: Заполняем основную информацию
  document.getElementById('name').innerText = data.name || 'не указано';
  document.getElementById('job').innerText = data.job || 'не указано';
  document.getElementById('salary').innerText = data.salary || 'не указано';
  document.getElementById('photo').src = data.photo || '{% static "fastcase/images/photo.jpg" %}';

  // Пример: Заполняем опыт работы
  const expSection = document.querySelector('.exp .job');
  expSection.innerHTML = ''; // Очищаем секцию перед заполнением

  data.experience.forEach(exp => {
      const jobElement = document.createElement('div');
      jobElement.innerHTML = `<h3 class="exp__job_h3">${exp.title || 'не указано'}</h3><p class="exp__job_p">${exp.description || 'не указано'}</p>`;
      expSection.appendChild(jobElement);
  });

  // Пример: Заполняем обо мне
  document.getElementById('description').innerText = data.description || 'не указано';

  // Пример: Заполняем профессиональные навыки
  const skillsList = document.querySelector('.about__skils');
  skillsList.innerHTML = ''; // Очищаем список перед заполнением

  data.skill.forEach(skill => {
      const skillElement = document.createElement('li');
      skillElement.innerHTML = `<p>${skill || 'не указано'}</p>`;
      skillsList.appendChild(skillElement);
  });

  // Пример: Заполняем кейсы
  const casesSection = document.querySelector('.case');
  casesSection.innerHTML = ''; // Очищаем секцию перед заполнением

  data.case.forEach(caseItem => {
      const caseElement = document.createElement('section');
      caseElement.innerHTML = `
          <h1 class="case__name">${caseItem.title || 'не указано'}</h1>
          <h2 class="case__desc">${caseItem.description || 'не указано'}</h2>
          <a class="case__link" href="${caseItem.link || 'не указано'}">${caseItem.link || 'не указано'}</a>
      `;
      casesSection.appendChild(caseElement);
  });
});
