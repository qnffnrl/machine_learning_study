function solution(date, carNums){

    let count = 0;
    carNums.forEach(el => {
        count += (el%10 == date) ? 1 : 0;
    });
    return count;

}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));