for (let index = 1; index <= 100000; index++) {

    if (index % 15 == 0){
        document.write("FizzBuzz" + " ");
        continue;
    }

    if (index % 3 == 0) {
        document.write("Fizz" + " ");
        continue;
    }
    
    if (index % 5 == 0) {
        document.write("Buzz" + " ");
        continue;
    }

    document.write(index + " ");
}