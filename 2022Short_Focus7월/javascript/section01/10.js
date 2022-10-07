function solution(str, s){

    count = 0;
    for(let c of str){
        count += (c === s) ? 1 : 0;
    }
    return count;

}


const start = new Date();

console.log(solution('COMPUTERPROGRAMMING', 'R'));  

const end = new Date();

console.log('Running Time : ' + (end - start)/100 + 'sec');