function solution(arr){
    let min = arr[0];

    for(i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

console.log(solution([6, 5, 11, 3, 5, 1, 98, 54, 1]));