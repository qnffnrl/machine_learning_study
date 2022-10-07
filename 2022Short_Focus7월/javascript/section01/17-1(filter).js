function solution(arr){

    let answer = arr.filter((i, j) => (j===0) ? false : j===arr.indexOf(i));

    return answer;

}

console.log(solution([5, 'good', 'time', 'good', 'time', 'student']));