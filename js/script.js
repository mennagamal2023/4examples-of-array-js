
// return new array with even numbers ///////////////////////////////////////
const arr1 =[2,5,6,9,10,20,31,40,45,46]
const evenArr = arr1.filter(function(num){
    return num % 2 == 0;
})

console.log(evenArr);
// return new array with the largest number ////////////////////////////////////////////////
const arr2 =[2000 ,2010,5400,6700 ,205,4050]
let largest = arr2.sort((x ,y)=>{
    return x - y;
})
console.log(arr2[arr2.length-1])// the largest number
console.log(Math.max(...arr2));
// return same string but reversed //////////////////////////////////////////
const arr3="Hello from development worldwide "
let strReserved = arr3.split('').reverse().join('');

console.log(strReserved)

////return anew array witout duplicate numbers///////////////////////////////
let arr4 =[2,5,11,20,9,10,20,31,9,10,11,2]

function arrDuplicate(data){
    return data.filter((item , index) => 
        data.indexOf(item) === index
       
    );
}
console.log(arrDuplicate(arr4))

