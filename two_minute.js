import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const TwoMinute = () => {
  
  const timeLength = 120
  var [state, setState] = useState("ready")
  var intervalID = null
  var [time, setTime] = useState(timeLength)
  var [successCount, setSuccessCount] = useState(0)
  var [failCount, setFailCount] = useState(0)
  
  
  useEffect(() => {
    console.log("component mounted")
    
    return () => {
      console.log("component unmounted")
      clearInterval(intervalID)
    }
  }, [])
  
  const startTimer = () => {
    console.log("starting timer")
    intervalID = setInterval(decrementTimer, 1000)
    setState("running")
  }
  
  const decrementTimer = () => {
    setTime(--time)
    if (time < 0) {
      setState("done")
      setTime(timeLength)
      clearInterval(intervalID)
    }
  }
  
  const stopTimer = () => {
    console.log("stoping timmer")
    setState("ready")
    clearInterval(intervalID)
    setTime(timeLength)
  }
  
  const markSuccessFail = (success) => {
    if (success) {
      setSuccessCount(++successCount)
    } else {
      setFailCount(++failCount)
    }
    setState("ready")
  }
  
  if(state === "ready") {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Success: {successCount}   Fail: {failCount}
        </Text>
        <Button title="Start" onPress={startTimer}/>
      </View>
    ) 
  } else if (state === "running") {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Success: {successCount}   Fail: {failCount}
        </Text>
        <Text style={styles.message}>
          {time}
        </Text>
        <Button title="Cancel" onPress={stopTimer}/>
      </View>
    ) 
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Success: {successCount}   Fail: {failCount}
        </Text>
        <Text style={styles.message}>
          Done!
        </Text>
        <Button title="Success" onPress={() => markSuccessFail(true)}/>
        <Button title="Fail" onPress={() => markSuccessFail(false)}/>
      </View> 
    )

  }
  
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
})



export default TwoMinute