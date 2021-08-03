var hot = false;
var temp = 28;

if(temp>80)
{
  console.log("It's hot outside");
}

else if (temp <= 80 && temp >=50) {
  console.log("Average");
}

else if (temp <= 50 && temp >=32) {
  console.log("It's pretty cool");
}

else {
  console.log("It's very cold outside");
}
