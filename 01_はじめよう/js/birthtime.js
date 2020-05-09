function updateParagraph(birthDay){
  var myBirthTime = new Date(birthDay);
  var nowDate = new Date();
  var birthdayFromDay = (nowDate.getTime() - myBirthTime.getTime()) / 86400000;
  document.getElementById('birth-time').innerHTML = "誕生日から" + birthdayFromDay + "日目";
}