function isFirstLetterUpperCase(str){
    regexp = /^[A_Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is  not uppercase");
    }
}