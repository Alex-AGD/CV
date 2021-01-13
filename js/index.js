// Скрытие навбара
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById ("navbar").style.top = "0";
    } else {
        document.getElementById ("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

//type.js
let typed = new Typed ('.type', {
    // Waits 1000ms after typing "First"
    strings: [ 'I\'m a Senior Fullstack  Developer',
        'Junior Frontend Developer :)' ],
    startDelay: 3700,
    typeSpeed: 60,
    backSpeed: 60,
    loop: false,
    showCursor: false,
});


let logo = new Typed ('.welcome', {
    strings: [ 'Hello! Welcome to my site!' ],
    typeSpeed: 100,
    loop: false,
    showCursor: false,

});

//date
function zero_first_format (value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

function date_time () {
    let current_datetime = new Date ();
    let day = zero_first_format (current_datetime.getDate ());
    let month = zero_first_format (current_datetime.getMonth () + 1);
    let year = current_datetime.getFullYear ();
    let hours = zero_first_format (current_datetime.getHours ());
    let minutes = zero_first_format (current_datetime.getMinutes ());
    let seconds = zero_first_format (current_datetime.getSeconds ());

    return day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
}

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
setInterval (function () {
    document.getElementById ('date').innerHTML = date_time ();
}, 1000);

//about
const text = [
    `Мy name Aliksei \n`+
   'I\'m looking for a possibility to work in a team as junior frontend developer\n' +
   'I\'ll be glad any job interview in this direction.\n' +
   'I\'m responsible, accurate, hardworking and self-developing.\n' +
   'I\'m ready to respond to your suggestions. '
];
let line = 0;
let count = 0;
let result = '';
function typeLine(){
    let interval = setTimeout(
        ()=> {
            result += text[line][count]
            document.getElementById('description').innerHTML =result + '|';
            count++
            if (count>= text[line].length){
                count = 0;
                line++
                if (line === text.length){
                    clearTimeout(interval)
                    document.getElementById('description').innerHTML = result;
                    return true;
                }
            }
            typeLine();
        }, getRandomInt(getRandomInt(250*2.5)))
}
typeLine();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//skills
$(".bar").each(function(){
    $(this).find(".bar-inner").animate({
        width: $(this).attr("data-width")
    },2000)
});

//goUp button
let timeOut;
function goUp() {
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        timeOut = setTimeout('goUp()',20);
    } else clearTimeout(timeOut);
}
