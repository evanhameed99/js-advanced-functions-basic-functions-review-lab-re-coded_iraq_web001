// Your code here

function saturdayFun(activity = "roller-skate"){

return `This Saturday, I want to ${activity}!` ;

}
saturdayFun();
saturdayFun('bathe my dog')

let mondayWork = function (activity = 'go to the office'){
  return `This Monday, I will ${activity}.`
}
mondayWork();
mondayWork('work from home');

function wrapAdjective(wrapper = '*'){

  return function (adjective = 'special'){
    return `You are ${string}${def}${string}`
  }
}
wrapAdjective();
wrapAdjective('||')('dedicated programmer');
