function saturdayFun(activity="roller-skate") {
  return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = (work="go to the office") => {
  return (`This Monday, I will ${work}.`)
}

function wrapAdjective(flair="*") {
  return function(param="special") {
    return (`You are ${flair}${param}${flair}!`)
  }
}
