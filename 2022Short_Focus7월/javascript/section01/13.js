function solution(str){

    let answer = "";
    for(i = 0; i < str.length; i++){

        answer += (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ? String.fromCharCode(str.charCodeAt(i)+32) : String.fromCharCode(str.charCodeAt(i)-32);
        

        // if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        //     answer += String.fromCharCode(str.charCodeAt(i)+32);
        // }else{
        //     answer += String.fromCharCode(str.charCodeAt(i)-32);
        // }

    }
    return answer;

}

const start = new Date();
console.log(solution('StuDY'));
const end = new Date();

console.log("Running Time : " + (end-start)/100 + "sec");