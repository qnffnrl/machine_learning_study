function solution(arr){

    let eachCount = [];
    for(let i of arr){
        let count = 0;
        for(let k of i){
            count += 1;
        }
        eachCount.push(count);
    }

    max = eachCount[0];
    for(let j of eachCount){
        if(max < j) max = j;
    }

    return arr[eachCount.indexOf(max)];

}


const start = new Date();
console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));
const end = new Date();

console.log("Running Time : " + (end - start)/100 + " sec");