for (var i=1; i<10000; i++){

  var result = i;
  document.write(fizzbuzz_cal(i) + "<br>");

  function fizzbuzz_cal(i){
    if( i % 15  === 0 ){
      return "FizzBuzz";
    }
    
    if( i % 3 === 0 ){
      return "Fizz";
    }

    if( i % 5 === 0 ){
      return "Buzz";
    }

    return i;
  }

}