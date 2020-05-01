import React from 'react'



function Time() {
  const date = new Date()
  const hours = date.getHours()
  let timeofDay
  const styles = {
    fontSize:30
  }

  if (hours < 12) {
    timeofDay = "morning"
    styles.color = "#ffa500"
  }
  else if (hours >= 12) {
    timeofDay = "afternoon"
    styles.color = "#ff0000"
  }
  else {
    timeofDay = "night"
    styles.color = "#0000ff"
  }

    return (
     
      <h1 style = {styles}>Good, {timeofDay} </h1>
    
    )
  }

export default Time; 