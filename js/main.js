$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); // кнопка увеличения этажа
    var counterDown = $(".counter-down"); // кнопка уменьшения этажа
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var viewFlats = $('.view-flats')

    // функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); // удаление активного класса у этажей
        currentFloor = $(this).attr('data-floor'); // получение значения текущего этажа
        $(".counter").text(currentFloor); // запись значения этажа в счетчик справа
    });

    floorPath.on('click', toggleModal); /* вызов модального окна при клике на этаж */
    modalCloseButton.on('click', toggleModal); /* закрытие модального окна при клике на крестик */
    viewFlats.on('click', toggleModal);

    counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    function toggleModal() {
        modal.toggleClass('is-open');
    }

});