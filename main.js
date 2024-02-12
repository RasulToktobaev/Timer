let days = document.querySelector('#days')
let  hours = document.querySelector('#hours')
let  minutes = document.querySelector('#minutes')
let  second = document.querySelector('#seconds')
let input = document.querySelector('.timer__input')
let btn = document.querySelector('.timer__btn')
let resetBtn = document.querySelector('.reset__btn')

const addZero = (num) => {
    if(num < 10){
        return `0${num}`
    }else {
        return  num
    }
};


btn.addEventListener('click', () => {
    let deadline = input.value;
    if(Date.parse(deadline) > Date.parse(new Date) + 360000){
        const day = (days,hours, minutes, second) => {
            let current = new Date();

            let result = Date.parse(deadline) - Date.parse(current) ;
            second.textContent = addZero(result / 1000 % 60) ;
            minutes.textContent = addZero(Math.floor(result / 1000 /60) % 60);
            hours.textContent = addZero( Math.floor(result / 1000 /60 /60 ) % 24);
            days.textContent = addZero(Math.floor(result / 1000 /60 /60 /24)) ;

            let timerId = setInterval(() => {
                day(days,hours,minutes,second)
            },1000)
            if(result < 0){
                clearInterval(timerId)
                days.textContent = '00'
                hours.textContent = '00'
                minutes.textContent = '00'
                second.textContent = '00'
            }
            resetBtn.addEventListener('click', () => {
                clearInterval(timerId)
                days.textContent = '00'
                hours.textContent = '00'
                minutes.textContent = '00'
                second.textContent = '00'
                input.value = ''
            })
        };
        day(days,hours,minutes,second);
    }else {
        alert('Ошибка')
        input.value = ''
    }

});









