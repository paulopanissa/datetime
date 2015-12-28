function pad(val){
    if(val <= 9){
        val.toString();
        val = "0" + val;
    }return val;
}

exports.timestamp = function timestamp () {
    var now = new Date();
    var year = "" + now.getFullYear();
    var month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    var day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
    var hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    var minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    var second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

exports.date = function(){
    var d  = new Date(),
        y  = d.getFullYear(),
        m  = pad(d.getMonth()+1),
        dy = pad(d.getDate());

    return y+"-"+m+"-"+dy;
}

exports.dateBr = function(){
    var d  = new Date(),
        y  = d.getFullYear(),
        m  = pad(d.getMonth()+1),
        dy = pad(d.getDate());

    return dy + "/" + m + "/" + y;
}

exports.changeDate = function(date){
    var d = date.split('/');
    return d[0] + "-" + d[1] + "-" + d[2];
}

exports.changeDateToBr = function(date){
    var d = date.split('-');
    return d[2] + "/" + d[1] + "/" + d[0];
}