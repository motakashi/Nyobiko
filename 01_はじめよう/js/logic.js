var age = 16;
var member = true;
var price = 1800;

var childrenFlag = false;
var memberFlag = false;

// 15歳判定
if (age <= 15){
  childrenFlag = true;
}

// 会員判定
if (member === true){
  memberFlag = true;
}

// 金額判定
if(memberFlag === true){
  price = 1000;
}

if(childrenFlag === true){
  price = 800;
}

document.write(price);