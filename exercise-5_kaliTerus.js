function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka<10){
        return angka
    }
    var str = angka.toString()
    var result = 1
    for(var x=0; x<str.length; x++){
        result *= parseInt(str[x])
    }
    return kaliTerusRekursif(result)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
  console.log(kaliTerusRekursif(12398769)); // 6