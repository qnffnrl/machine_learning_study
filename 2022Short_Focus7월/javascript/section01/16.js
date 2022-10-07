function solution(str){

    let answer = [];
    for(i = 0; i < str.length; i++){
        answer.push(str[i]);
    }

    for(i = 0; i < answer.length; i++){
        for(k = answer.length; k > i; k--){
            if(answer[i] == answer[k]){
                answer.splice(k, 1);
            }
        }
    }
    return answer.join('');

}

console.log(solution('ksekkset'));