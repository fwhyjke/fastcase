var pageId = document.getElementById('my-element').dataset.pageId;

document.addEventListener("DOMContentLoaded", function () {
  // Замените "ваш_эндпоинт" на реальный URL вашего API
  var apiUrl = 'http://127.0.0.1:8000/api/get_page_info/?id=' + pageId;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);

          // Здесь вы можете заполнить данные в соответствующие элементы вашего HTML

          // Заполнение основной информации
          document.getElementById("name").textContent = data.name || "не указано";
          document.getElementById("job").textContent = data.job || "не указано";
          document.getElementById("salary").textContent = data.salary || "не указано";
          document.getElementById("photo").src = data.photo || "{% static 'fastcase/images/photo.jpg' %}";
          document.getElementById("description").textContent = data.description || "Не указано";

          // Заполнение опыта работы
          var expList = document.querySelector(".exp_list");
          expList.innerHTML = "";
          data.experience.forEach(function (experience) {
              var jobItem = document.createElement("li");
              jobItem.innerHTML = "<div class='job'><h3 class='job__title'>" + (experience.title || "не указано") + "</h3><p class='job__description'>" + (experience.description || "не указано") + "</p></div>";
              expList.appendChild(jobItem);
          });

          // Заполнение профессиональных навыков
          var skillsList = document.querySelector(".about__skils");
          skillsList.innerHTML = "";
          data.skill.forEach(function (skill) {
              var skillItem = document.createElement("li");
              skillItem.innerHTML = "<p>" + skill + "</p>";
              skillsList.appendChild(skillItem);
          });

          // Заполнение кейсов
          var casesList = document.querySelector(".cases_list");
          casesList.innerHTML = "";
          data.case.forEach(function (caseItem) {
              var caseElement = document.createElement("li");
              caseElement.innerHTML = "<section class='case'><h1 class='case__name'>" + (caseItem.title || "не указано") + "</h1><h2 class='case__desc'>" + (caseItem.description || "не указано") + "</h2><a class='case__link' href='" + (caseItem.link || "не указано") + "'>" + (caseItem.link || "не указано") + "</a></section>";
              casesList.appendChild(caseElement);
          });
      } else if (xhr.readyState === 4) {
          console.log("Error fetching data. Status: " + xhr.status);
      }
  };
  xhr.send();
});
