/*
Logic Challenge - Password Generator
Problem

Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator
Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
    //code di sini
    var library = 'aiueoAIUEO'
    var alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    for(var x=0; x<str.length; x++){
        for(var y=0; y<library.length; y++){
            var temp = str[x]
            if(str[x] === library[y]){
                temp = alphabets[alphabets.indexOf(library[y])+1]
                break
            }
        }
        result += temp
    }
    return result
  }
  
  function reverseWord (str) {
    //code di sini
    if(str.length === 0){
        return ''
    }
    var result = str[str.length-1]
    return result + reverseWord(str.substr(0, str.length-1))
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var result = ''
    for(var x=0; x<str.length; x++){
        var temp = str[x]
        if(str[x] === str[x].toLowerCase()){
            temp = str[x].toUpperCase()
        }
        else if(str[x] === str[x].toUpperCase()){
            temp = str[x].toLowerCase()
        } 
        result += temp
    }
    return result
  }
  
  function removeSpaces (str) {
    //code di sini
    var result = ''
    for(var x=0; x<str.length; x++){
        if(str[x] !== ' '){
            result += str[x]
        }
    }
    return result
  }
  
  function passwordGenerator (name) {
    //code di sini
    // removeSpaces(name)
    if(name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var vocalChange = changeVocals(name)
    var reversed = reverseWord(vocalChange)
    var swapLetterCase = setLowerUpperCase(reversed)
    var spaceRemoved = removeSpaces(swapLetterCase)
    return spaceRemoved
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'