const student = "Матвеев Кирилл Дмитриевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;


const firstWeek = Array(16).fill([4, 1, 2, 5, 2, 2, 0]).flat();
const firstExam = Array(1).fill([0, 2, 0, 2, 0, 0, 0]).flat();
const holidays = Array(2).fill([0, 0, 0, 0, 0, 0, 0]).flat();
const lastWeek = Array(23).fill([1, 4, 4, 2, 5, 0, 0]).flat();
const lastExam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]).flat();

let array = [firstWeek, firstExam, holidays, lastWeek, lastExam].flat();

let consolePrice = +prompt('Стоимость приставки', 56000);
let ridePrice = +prompt('Стоимость транспорта', 30);
let mamyMoney = +prompt('Сумма денег от мамы на проезд', 250);
let lunchMoney = +prompt('Сумма денег от мамы на обед', 500);

const ride_difference = mamyMoney - ridePrice

let totalmoney = 0;
let totaldays = 0;


if (ride_difference < 0) {
    alert('Ошибка! Стоимость проезда не может быть больше суммы которую даёт мама.')
} else {
    for (let element = 0; element < array.length; element++) {

        if (totalmoney >= consolePrice) {
            break
        }

        if ((array[element] <= 3) && (array[element] > 0)) {
            totalmoney = totalmoney + lunchMoney + ride_difference
        
        } else if (array[element] > 3) {
            totalmoney = totalmoney + ride_difference 
        
        }

        totaldays = totaldays + 1
        continue
        
    }
}


if (totalmoney >= consolePrice) {
    alert('На приставку накопить удалось за ' + Number(totaldays) + ' дней.')
} else {
    alert('На приставку накопить не удалось, но за все время было накоплено ' + Number(totalmoney) + ' рублей.')
}




