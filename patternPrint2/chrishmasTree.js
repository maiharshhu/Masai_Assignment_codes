function chrismasTree(height) {
    for(let i = 0; i <= height; i++) {
        let str = '';
        for(let j = 0; j <= height-i; j++) {
            str += " ";
        }
        for(let k = 0; k <(2*i)-1; k++) {
            str += "*";
        }
        console.log(str);
    }
}
chrismasTree(8);