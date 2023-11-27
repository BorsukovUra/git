function calculateCost() {
  var roomSize = parseFloat(document.getElementById("roomSize").value);
  var repairType = document.getElementById("repairType").value;
  var workType = document.getElementById("workType").value;

  // Проверьте, что все поля заполнены
  if (!roomSize || !repairType || !workType) {
    document.getElementById("error").innerHTML = "Пожалуйста, заполните все поля.";
    document.getElementById("result").innerHTML = "";
    return;
  }

  // Проверка на некорректные данные
  if (roomSize < 0) {
    document.getElementById("error").innerHTML = "Ошибка 01: Число в поле 'Размер помещения' отрицательное.";
    document.getElementById("result").innerHTML = "";
    return;
  }

  if (isNaN(roomSize)) {
    document.getElementById("error").innerHTML = "Ошибка 02: Введен символ в поле 'Размер помещения'.";
    document.getElementById("result").innerHTML = "";
    return;
  }

  if (roomSize === 0) {
    document.getElementById("error").innerHTML = "Ошибка 03: Число равно нулю в поле 'Размер помещения'.";
    document.getElementById("result").innerHTML = "";
    return;
  }

  // Удалите сообщение об ошибке, если оно было ранее отображено
  document.getElementById("error").innerHTML = "";

  // Выполните расчет стоимости на основе размера помещения, типа ремонта и вида работы
  var cost = 0;
  if (repairType === "standard") {
    if (workType === "painting") {
      cost = roomSize * 20; // Стоимость покраски стен для стандартного ремонта (20 рублей за квадратный метр)
    } else if (workType === "flooring") {
      cost = roomSize * 30; // Стоимость укладки пола для стандартного ремонта (30 рублей за квадратный метр)
    } else if (workType === "plumbing") {
      cost = roomSize * 25; // Стоимость сантехнических работ для стандартного ремонта (25 рублей за квадратный метр)
    } else if (workType === "electrical") {
      cost = roomSize * 28; // Стоимость электрических работ для стандартного ремонта (28 рублей за квадратный метр)
    }
  } else if (repairType === "premium") {
    if (workType === "painting") {
      cost = roomSize * 25; // Стоимость покраски стен для премиум ремонта (25 рублей за квадратный метр)
    } else if (workType === "flooring") {
      cost = roomSize * 40; // Стоимость укладки пола для премиум ремонта (40 рублей за квадратный метр)
    } else if (workType === "plumbing") {
      cost = roomSize * 60; // Стоимость сантехнических работ для премиум ремонта (60 рублей за квадратный метр)
    } else if (workType === "electrical") {
      cost = roomSize * 50; // Стоимость электрических работ для премиум ремонта (50 рублей за квадратный метр)
    }
  }

  // Отобразите результат с классом "red"
  document.getElementById("result").innerHTML = "Стоимость ремонта: <span class='red'>" + cost + " рублей</span>";
}

function clearForm() {
  // Очистите все поля формы
  document.getElementById("roomSize").value = "";
  document.getElementById("repairType").value = "";
  document.getElementById("workType").value = "";

  // Удалите сообщение об ошибке и результат
  document.getElementById("error").innerHTML = "";
  document.getElementById("result").innerHTML = "";
}
