module.exports = function toReadable(number) {
    strNum = String(number);
    let str = '';
    let arrOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrTwo = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    function one(numOne) {
        str += `${arrOne[numOne]}`;
        console.log(str); 
        return str;
    }
    function two(numTwo) {
        if (strNum[1] === '0') {
            let i = Number(strNum[0]);
            str = `${str}${arrTwo[i - 2]}`;
            console.log(str); 
            return str;
        }
        let two = strNum[0];
        let one = strNum[1];
        str += `${arrTwo[two-2]} ${arrOne[one]}`;
        console.log(str); 
        return str;
    }
    if (number >= 0 && number < 20) {
        let numOne = number;
        one(numOne);
    }
    if (number >= 20 && number < 100) {
        let numTwo = number;
        two(numTwo);
    }
    if (number >= 100) {
        if (strNum.length>2 && strNum[1] === '0' && strNum[2] === '0') {
            let i = Number(strNum[0]);
            str = `${arrOne[i]} ${hundred}`;
            console.log(str);
            return str;
        }
        if (strNum.length>2 && strNum[1] !== '0' && strNum[1] !== '1') {
            let i = Number(strNum[0]);
            numTwo=number-(i*100);
            str = `${arrOne[i]} ${hundred} `;
            strNum = String(numTwo);
            two(numTwo);
        } 
        if (strNum.length>2 && strNum[1] === '0' && strNum[2] !== '0') {
            let i = Number(strNum[2]);
            let j = Number(strNum[0]);
            numOne=i;
            str = `${arrOne[j]} ${hundred} `;
            strNum = String(numOne);
            one(numOne);
        }
           if (strNum.length>2 && strNum[1] !== '0' && strNum[1] === '1') {
            let ii = `${strNum[1]}${strNum[2]}`;
            let i = Number(ii);
            let j = Number(strNum[0]);
            numOne=i;
            str = `${arrOne[j]} ${hundred} `;
            strNum = String(numOne);
            one(numOne);
        }
          }
     console.log(str);
     return str;
}
