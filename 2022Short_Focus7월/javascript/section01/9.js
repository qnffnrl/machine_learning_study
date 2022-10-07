function solution(str){
    
    let answer = "";

    for(let s of str){
        answer += (s == 'A') ? "#" : s;
    }
    return answer;
}
console.log(solution("BANANA"));