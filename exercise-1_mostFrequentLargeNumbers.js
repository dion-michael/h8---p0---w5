function sorting(arrNumber) {
    // code di sini
    for(var x=0; x<arrNumber.length-1; x++){
        if(arrNumber[x]>arrNumber[x+1]){
            var temp = arrNumber[x]
            arrNumber[x] = arrNumber[x+1]
            arrNumber[x+1] = temp
            x-=2
        }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    if(arrNumber.length === 0){
        return 'empty array! please put some values in it'
    }
    var count = 0
    var highest = arrNumber[arrNumber.length-1]
    for(var x=0; x<arrNumber.length; x++){
        if(arrNumber[x] === highest){
            count++
        }
    }
    return 'angka paling besar adalah ' + highest + ', dan jumlah kemunculan sebanyak ' + count + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([8, 2, 1, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''