let before_money = 1000000;
let after_money;
const interestRate = 1.06;
const year = 10;

after_money = before_money * interestRate ** year;

document.write(before_money +"円を");
document.write(year + "年間（年利" + interestRate + "%）で投資した場合、");
document.write(after_money + "円になります");
document.write("</br>")

let r = 12;
let area = r*r*3.14

document.write(r + "cmの円の面積は" + area + "cm2になります");