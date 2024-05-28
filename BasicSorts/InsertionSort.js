
function insertionSort(arr){
    let temp;
    for(let i = 1; i < arr.length; i++){
        temp = arr[i];
        for(var j = i - 1; arr[j] > temp && j > -1; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = temp;
    }
    return arr;
}

let myArray = [4,2,6,5,1,3];
insertionSort(myArray);
console.log(myArray);

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/  