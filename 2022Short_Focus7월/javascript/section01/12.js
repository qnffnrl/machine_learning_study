function solution(str){

    let answer = "";
    for(i = 0; i < str.length; i++){

        if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
            answer += String.fromCharCode(str.charCodeAt(i)-32);
        }else{
            answer += str[i];
        }

    }

    return answer;

}

const start = new Date();
console.log(solution('ItisTimeToStudy'));
const end = new Date();

console.log("Running Time : " + (end-start)/100 + "sec");