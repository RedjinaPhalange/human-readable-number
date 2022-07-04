module.exports = function toReadable (number) {
    let num = number.toString();
    const units = 'One Two Three Four Five Six Seven Eight Nine'.split(' ');
    const teens = 'Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen'.split(' ');
    const dozens = 'Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety'.split(' ');
    if (number == 0){
        return 'Zero';
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
        return units[Math.trunc(number / 100) - 1] + ' Hundred' + ' ' + units[num[2] -1];
    }
        if ((number % 100 != 0) && num[1] == 1) {
        return units[Math.trunc(number / 100) - 1] + ' Hundred' + ' ' + teens[num[2]];
    }
    if ((number % 100 == 0) && number < 1000){
        return units[Math.trunc(number / 100) - 1] + ' Hundred';
    }
    if ((number % 100 != 0) && number > 100){
        return units[Math.trunc(number / 100) - 1] + ' Hundred' + ' ' + dozens[num[1] -2] + ' ' + units[num[2] -1];
    }
}
