function beepBoop(number, name){
  if (!Number(number)){
    return "Please input a number for number";
  }
  if (Number(name)){
    return "Please input a string for name";
  }
  numArray = [];
  for (let index = 0; index <= number; index +=1){
    if (index.toString().indexOf('3') > -1){
      numArray.push(" Won't you be my neighbor " + name + "?");
    }else if (index.toString().indexOf('2') > -1){
      numArray.push(" Boop!");
    }else if (index.toString().indexOf('1') > -1){
      numArray.push(" Beep!");
    }else {
      numArray.push(" " + index);
    }
  }
  return numArray;
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const numberPass = parseInt($("input#number").val());
    const namePass = $("input#name").val();
    $("#arrayOutput").text(beepBoop(numberPass, namePass));
    $("#outputBox").show();
  });
});