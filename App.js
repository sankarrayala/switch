/*import React,{useState} from "react";
import {view,Switch,Text} from 'react-native';
const SwitchExample=()=>{
  const [Switch1,setSwitch1]=useState(false);
  const [Switch2,setSwitch2]=useState(false); 
  const [Switch3,setSwitch3]=useState(false);

  const onToggleSwitch1=()=>setSwitch1(!Switch1);
  const onToggleSwitch2=()=>setSwitch2(!Switch1);
  const onToggleSwitch3=()=>setSwitch3(!Switch1);

  return(
  <view style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Switch 1</Text>
    <Switch
    trackColor={{false:"blue",true:"green"}}
    thumbColor={Switch?"red":"green"}
    ios_backgroundColor="red" 
    onValueChange={onToggleSwitch1}
    value={Switch1} 
    />
    <Text>Switch 2</Text>
    <Switch
    trackColor={{false:"blue",true:"green"}}
    thumbColor={Switch?"red":"green"}
    ios_backgroundColor="yellow" 
    onValueChange={onToggleSwitch2}
    value={Switch2} 
    />
    <Switch
    trackColor={{false:"blue",true:"green"}}
    thumbColor={Switch?"red":"green"}
    ios_backgroundColor="yellow" 
    onValueChange={onToggleSwitch3}
    value={Switch3} 
    />



    </view>
  );
};*/
  import React, { useState } from 'react';
  import { View, Switch, Text } from 'react-native';
  
  const SwitchExample = () => {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [switch3, setSwitch3] = useState(false);
  
    const onToggleSwitch1 = () => setSwitch1(!switch1);
    const onToggleSwitch2 = () => setSwitch2(!switch2);
    const onToggleSwitch3 = () => setSwitch3(!switch3);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Switch 1</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={switch1 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onToggleSwitch1}
          value={switch1}
        />
        <Text>Switch 2</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={switch2 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onToggleSwitch2}
          value={switch2}
        />
        <Text>Switch 3</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={switch3 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onToggleSwitch3}
          value={switch3}
        />
      </View>
    );
  };
  
  export default SwitchExample;
  