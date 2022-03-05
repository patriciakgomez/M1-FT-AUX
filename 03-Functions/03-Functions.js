function timeConversion(time) {
    // dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
    // Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
    //las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

    //hour=parseInt(time.slice(0,2));
    //min=parseInt(time.slice(3,5));
    //sec=parseInt(time.slice(6,8));
    //Tambien se puede usar split()
    if (time.length !== 10) return false;
    let [hour, min, sec] = time.split(':') 
    let ampm = sec[2] + sec[3]
    sec = sec[0] + sec[1]
    if (parseInt(hour) > 12 || parseInt(min) > 59 || parseInt(sec) > 59) return false;
    if (ampm === 'AM') {
        hour= hour === '12' ? hour = '00': hour;
    } else {
        hour= hour === '12' ? hour: parseInt(hour) + 12;
    }
    return `${hour}:${min}:${sec}`;
}


module.exports = {
    timeConversion
}