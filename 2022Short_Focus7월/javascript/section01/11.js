function solution(str){

    count = 0;
    
    // for(i = 0; i < str.length; i++){
    //     if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) count += 1;
    // }

    for(let x of str){
        if(x===x.toUpperCase()) count++;
    }
    
    return count;   

}

const start  = new Date()

console.log(solution('KoreaTimeGood'));

const end = new Date()

console.log('Running Time : ' + (end - start)/100 + 'sec');
