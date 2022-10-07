// 자동차 객체
const car = {
  wheels: 4,
  color: 'red',
  maxSpeed: '300',
  drive: function(){
    console.log('go go')
  }
};

const car2 = Object.assign(car)
console.log(car2);