function solution(arr){

    let sum = 0;
    let halsu = [];

    arr.forEach(element => {
        if(element%2==1){
            sum += element;
            halsu.push(element);
        }
    });

    let min = halsu[0];
    halsu.forEach(element => {
        min = (min>element)?element:min;
    });

    console.log(sum);
    console.log(min);
}

solution([12, 77, 38, 41, 53, 92, 85]);