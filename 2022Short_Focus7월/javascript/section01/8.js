function solution(arr){

    let arrSum = 0;
    arr.forEach(el => {arrSum += el;});

    let fakeSum = arrSum - 100;

    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i]+arr[j] == fakeSum){
                arr.splice(j, 1);
                arr.splice(i, 1);
            }
        }
    }
    console.log(arr.join(' '));
    
}

solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);