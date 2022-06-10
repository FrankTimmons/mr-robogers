function beepBoop(number){
  if (!Number(number)){
    return 0;
  }
  parsedNum = parseInt(number);
  numArray = [];
  for (let index = 0; index <= parsedNum; index +=1){
    if (index.toString().indexOf('3') > -1){
      numArray.push("Won't you be my neighbor?");
    } else {
    numArray.push(index);
    }
  }
  return numArray;
}