
function selectionSort(arr){
    let min;
    for(let i = 0; i < arr.length - 1; i++){
        min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) min = j;
        }
        if(i !== min){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}
 
let myArray = [4,2,6,5,1,3];
selectionSort(myArray);
console.log(myArray);

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/  