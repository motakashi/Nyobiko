let chars = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ"];

for (let firstChar = 0; firstChar < chars.length ; firstChar++) {
    for (let secondChar = 0; secondChar < chars.length; secondChar++) {
        document.write(chars[firstChar] + chars[secondChar] + "<br>");
    }
}
