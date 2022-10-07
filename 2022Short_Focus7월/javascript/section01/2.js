function solution(a, b, c){

    if(a<b+c && b<a+c && c<a+b){
        return('YES')
    }
    else{
        return('NO')
    }

}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));