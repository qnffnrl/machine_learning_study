function solution(arr){

    for(i = 0; i < arr.length; i++){
        for(k = arr.length; k > i; k--){
            if(arr[i] == arr[k]){
                arr.splice(k, 1);
            }
        }
    }

    arr.forEach(el => {
        console.log(el);
    });

}
solution(['good', 'time', 'good', 'time', 'student']);