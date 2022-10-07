function solution(num){

    let sum = 0;
    for(i = 1; i <= num; i++){
        sum += i;
    }
    return sum;

}

console.log(solution(6));
console.log(solution(10));