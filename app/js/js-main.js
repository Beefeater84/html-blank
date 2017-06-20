window.onload = function () {
    (function () {
        let btnAnnual = document.querySelector('.btn-annual--js');
        let btnMonthly = document.querySelector('.btn-monthly--js');

        if (Boolean(btnAnnual) && Boolean(btnMonthly)) {
            btnMonthly.addEventListener('click', function () {
                let btnGroup = document.querySelector('.btn-group-container');
                btnGroup.classList.add('monthly-front');
                document.querySelector('.btn-group').classList.add('monthly-front');
            });
            btnAnnual.addEventListener('click', function () {
                let btnGroup = document.querySelector('.btn-group-container');
                btnGroup.classList.remove('monthly-front');
                document.querySelector('.btn-group').classList.remove('monthly-front');
            });
        }

        let btnCoupon = document.querySelector('.btn-coupon--js');
        if (Boolean(btnCoupon)) {
            btnCoupon.addEventListener('click', function (e) {
                e.preventDefault();
                let btnInput = document.querySelector('.coupon-input--js');
                btnInput.classList.toggle('invisible');
            });
        }


        let btnPlainBig = document.querySelector('.test-answer');
        if (Boolean(btnPlainBig)) {
            btnPlainBig.addEventListener('click', function () {
                showAnswer('answer-green', 'Ответ от сервера, что все хорошо');
                showAnswer('answer-red', 'Ответ от сервера, Что все плохо');
            });
        }


    })();
};

/*
 Функция показа сообщений что все хорошо или не очень хорошо
 @colorClass -  answer-green // answer-red // answer-yellow

 */
function showAnswer(colorClass, text, closeTime = 6000) {
    var answerBlock = createAnswer(),
        parent = document.querySelector('.answer-parent'),
        closeLink = answerBlock.querySelector('.answer-block-close'),
        answerText = answerBlock.querySelector('.answer-block-text');

    answerText.innerHTML = text;
    answerBlock.classList.add(colorClass);

    closeLink.addEventListener('click', function (e) {
        e.preventDefault();
        answerBlock.classList.remove(colorClass);
    });
    setTimeout(function () {
        parent.removeChild(answerBlock);
    }, closeTime)
}


function createAnswer() {
    let answer = document.createElement('div');
    answer.className = 'answer-block';
    answer.innerHTML = `<a href="#" class="answer-block-close">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.28 9.28">
            <defs>
                <style>.cls-1 {
                    fill: inherit;
                }</style>
            </defs>
            <path class="cls-1"
                  d="M6.82,5.36,9.43,2.75a1,1,0,0,0,0-1.39L9.08,1A1,1,0,0,0,7.69,1L5.08,3.62,2.47,1A1,1,0,0,0,1.07,1l-.35.35a1,1,0,0,0,0,1.39L3.34,5.36.73,8a1,1,0,0,0,0,1.39l.35.35a1,1,0,0,0,1.39,0L5.08,7.1,7.69,9.71a1,1,0,0,0,1.39,0l.35-.35A1,1,0,0,0,9.43,8Z"
                  transform="translate(-0.44 -0.72)"/>
        </svg>
    </a>
    <div class="answer-block-img"></div>
    <div class="answer-block-text"></div>`;

    createParent();

    var parent = document.querySelector('.answer-parent');

    parent.insertBefore(answer, parent.children[0]);
    return answer;
}

function createParent() {
    var check = document.querySelectorAll('.answer-parent');

    if (check.length === 0) {
        var parent = document.createElement('div');
        parent.className = 'answer-parent';
        document.body.appendChild(parent);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var percentage = document.querySelector('.js_percentage');
    if (percentage) {
        lory(percentage, {
            infinite: 1
        });
    }
});

(function () {
    let myMap;

// Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);

    function init() {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [55.76, 37.64], // Москва
            zoom: 10
        });

        myPlacemark = new ymaps.Placemark([55.76, 37.64], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Балун метки",
            balloonContentBody: "Содержимое <em>балуна</em> метки",
            balloonContentFooter: "Подвал",
            hintContent: "Хинт метки"
        });

        myMap.geoObjects.add(myPlacemark);

        // Открываем балун на карте (без привязки к геообъекту).
        myMap.balloon.open([55.86, 37.94], "Содержимое балуна", {
            // Опция: не показываем кнопку закрытия.
            closeButton: false
        });

        // Показываем хинт на карте (без привязки к геообъекту).
        myMap.hint.show(myMap.getCenter(), "Содержимое хинта", {
            // Опция: задержка перед открытием.
            showTimeout: 1500
        });

        // Для добавления элемента управления на карту
        // используется поле map.controls.
        // Это поле содержит ссылку на экземпляр класса map.control.Manager.

        // Добавление элемента в коллекцию производится
        // с помощью метода add.

        // В метод add можно передать строковый идентификатор
        // элемента управления и его параметры.
        myMap.controls
        // Кнопка изменения масштаба.
            .add('zoomControl', {left: 5, top: 5})
            // Список типов карты
            .add('typeSelector')
            // Стандартный набор кнопок
            .add('mapTools', {left: 35, top: 5});

        // Также в метод add можно передать экземпляр класса элемента управления.
        // Например, панель управления пробками.
        // let trafficControl = new ymaps.control.TrafficControl();
        // myMap.controls
        //     .add(trafficControl)
        //     // В конструкторе элемента управления можно задавать расширенные
        //     // параметры, например, тип карты в обзорной карте.
        //     .add(new ymaps.control.MiniMap({
        //         type: 'yandex#publicMap'
        //     }));

        /*
         // Удаление элементов управления производится через метод remove.
         myMap.controls
         .remove(trafficControl)
         .remove('mapTools');
         */

    }
})()