let classes = ["A", "B", "C", "D"];

for (let grade = 1; grade <= 4; grade++) {
    for (let className = 0; className < classes.length; className++) {
        document.write(grade + "年" + classes[className] + "組<br>");
    }
}
