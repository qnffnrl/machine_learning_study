function solution(arr){

    // let min = arr[0];
    // for(i = 0; i < arr.length; i++){
    //     if(min > arr[i]){
    //         min = arr[i];
    //     }
    // }
    // return min;

    
    let min = arr[0];
    arr.forEach(element => {
        min = (min>element)?element:min;
    });
    return min;

}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));