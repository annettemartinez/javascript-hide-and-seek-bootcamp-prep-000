
function getFirstSelector(selector){
return document.querySelector(selector)}

function nestedTarget(){
const el = document.getElementById('nested')
return el

}

function deepestChild(){
  const list = document.getElementById('grand-node').querySelectorAll('div')
  var l = list.length
  return list[l-1]

}
function increaseRankBy(){
   const list = document.querySelectorAll('.ranked-list')
   for (var i = 0; i < list.length; i++) {
     var value = parseInt(list[i]) + i
     list[i].innerHTML = value.toString
   }
}
