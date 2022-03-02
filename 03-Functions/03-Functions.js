function timeConversion(time) {
    // dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
    // Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
    //las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
    hora=parseInt(time.slice(0,2));
    min=parseInt(time.slice(3,5));
    seg=parseInt(time.slice(6,8));
    if (time==="") return false;
    if (time.length!=10) return false;
    if (hora>12)return false;
    if (min>60)return false;
    if (seg>60)return false;
    if (time[8] === 'A') {
        if (hora===12){
            return '00'+time.slice(2, 8);     
        }
        return time.slice(0, 8);
    } else{
        if (hora===12){
            return time.slice(0, 8);     
        }
        let horaM=hora+12
        return horaM+time.slice(2, 8);
    }


}

module.exports = {
    timeConversion
}