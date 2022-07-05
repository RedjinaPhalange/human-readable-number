module.exports = function toReadable (number) {
    let num = number.toString();
    const units = 'one two three four five six seven eight nine'.split(' ');
    const teens = 'ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
    const dozens = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
    if (number == 0){
        return 'zero';
    }
    if (number < 10){
        return units[number - 1];
    }
    if (number > 9 && number < 20){
        return teens[num[1]];
    }
    if ((number % 10 == 0) && number < 100){
        return dozens[(number / 10) - 2];
    }
    if ((number % 10 != 0) && number < 100){
        return dozens[Math.trunc(number / 10) - 2] + ' ' + units[num[1] - 1];
    }
    if ((number % 100 != 0) && num[1] == 0) {
        return units[Math.trunc(number / 100) - 1] + ' hundred' + ' ' + units[num[2] -1];
    }
        if ((number % 100 != 0) && num[1] == 1) {
        return units[Math.trunc(number / 100) - 1] + ' hundred' + ' ' + teens[num[2]];
    }
    if ((number % 100 == 0) && number < 1000){
        return units[Math.trunc(number / 100) - 1] + ' hundred';
    }
            if (num[2] == 0){
        return units[Math.trunc(number / 100) - 1] + ' hundred' + ' ' + dozens[num[1] -2];
    }
    if (number % 100 != 0){
        return units[Math.trunc(number / 100) - 1] + ' hundred' + ' ' + dozens[num[1] -2] + ' ' + units[num[2] -1];
    }
        if (num[2] == 0){
        return units[Math.trunc(number / 100) - 1] + ' hundred' + ' ' + dozens[num[1] -2];
    }
}
