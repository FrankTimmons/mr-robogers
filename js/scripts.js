function beepBoop(number){
  if (!Number(number)){
    return 0;
  }
  parsedNum = parseInt(number);
  numArray = [];
  for (let index = 0; index <= parsedNum; index +=1){
    numArray.push(index);
  }
  return numArray;
}