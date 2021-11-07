import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const TwoMinute = () => {
  
  const timeLength = 120
  var [state, setState] = useState({
    state: "ready",
    interval: null,
    time: timeLength,
    successCount: 0,
    failCount: 0
  })
  
  
  useEffect(() => {
    console.log("component mounted")
    return () => {
      console.log("component unmounted")
    }
  }, [])
  
  const startTimer = () => {
    console.log("starting timer")
    state.interval = setInterval(decrementTimer, 1000)
    state.state = "running"
    setState({...state})
  }
  
  const decrementTimer = () => {
    state.time--
    if (state.time < 0) {
      state.state = "done"
      state.time = timeLength
      clearInterval(state.interval)
      state.interval = null
    }
    setState({...state})
  }
  
  const stopTimer = () => {
    console.log("stoping timmer")
    state.time = timeLength
    state.state = "ready"
    clearInterval(state.interval)
    state.interval = null
    setState({...state})
  }
  
  const markSuccessFail = (success) => {
    if (success) {
      state.successCount++
    } else {
      state.failCount++
    }
    state.state = "ready"
    setState({...state})
  }
  
 
  if(state.state === "ready") {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Success: {state.successCount}   Fail: {state.failCount}
        </Text>
        <Button title="Start" onPress={startTimer}/>
      </View>
    ) 
  } else if (state.state === "running") {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Success: {state.successCount}   Fail: {state.failCount}
        </Text>
        <Text style={styles.message}>
          {state.time}
        </Text>
        <Button title="Cancel" onPress={stopTimer}/>
      </View>
    ) 
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Success: {state.successCount}   Fail: {state.failCount}
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
  }
})



export default TwoMinute