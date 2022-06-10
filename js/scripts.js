function beepBoop(number){
  if (!Number(number)){
    return "Please input a number";
  }
  parsedNum = parseInt(number);
  numArray = [];
  for (let index = 0; index <= parsedNum; index +=1){
    if (index.toString().indexOf('3') > -1){
      numArray.push(" Won't you be my neighbor?");
    }else if (index.toString().indexOf('2') > -1){
      numArray.push(" Boop!");
    }else if (index.toString().indexOf('1') > -1){
      numArray.push(" Beep!");
    }else {
      numArray.push(index);
    }
  }
  return numArray;
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const numberPass = $("input#number").val();
    $(".arrayOutput").text(beepBoop(numberPass));
  });
});