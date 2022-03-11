function checkSpam() {
    let str = document.getElementById(`exampleFormControlTextarea1`).value;
    let comment1 = str.replace(/viagra/ig, "***");
    let comment2 = comment1.replace(/XXX/ig, '***');

    let result = comment2;

    document.getElementById('result').innerHTML = result;

}