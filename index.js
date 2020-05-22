
function letterChange(word) {
  return word.split('').join('');
}
function CharChange() {
  var str1 = document.getElementById('str');
  str1 = str1.value;
  var splitString = str1.split(' ');
  for(var i = 0; i < splitString.length; i++) {
    var n = splitString[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26; 
    splitString[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  
  var resultString = []
  splitString.forEach(function(word) {
    resultString.push(letterChange(word));
  });
  splitString  =  splitString.join(' ');
  document.getElementById('result').innerHTML = resultString;
}



  