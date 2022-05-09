// let startDate = document.getElementById('startDate')
// let endDate = document.getElementById('endDate')
//
// startDate.addEventListener('change',(e)=>{
//   let startDateVal = e.target.value
//   document.getElementById('startDateSelected').innerText = startDateVal
// })
//
// endDate.addEventListener('change',(e)=>{
//   let endDateVal = e.target.value
//   document.getElementById('endDateSelected').innerText = endDateVal
// })
// function starClicked(element)
// {
//   // alert(element.id);
// }
function regexMatch(input, pattern)
{
  let text = input.toString();
  return text.match(pattern);
}
function roundHalf(x)
{
    return Math.ceil(x/.5)*.5;
}
function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}
function countStars(element) {
  var children = element.children;
  var starCount = 0;
  for (var i = 0; i < children.length; i++) {
    var starChild = children[i];
    var isStar = starChild.getAttribute('alt')=='fill';
    if(isStar){starCount++};
  }
  return starCount;
}
