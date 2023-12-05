
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
const[courseGoals,setCourseGoals] = useState([])
const[modalIsVisible,setModalIsVisible] = useState(false);

  function addGoalHandler(enterredGoalText){
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      {text: enterredGoalText,id : Math.random().toString() },
      ]);
   
      endGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals)=> {
      return(
        currentCourseGoals.filter((goal)=> goal.id != id)
      )
    })
  }

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endGoalHandler(){
    setModalIsVisible(false)
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appcontainer}>
    <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
    { modalIsVisible &&
    <GoalInput visible={modalIsVisible} 
    onAddGoal={addGoalHandler} 
    onCancel={endGoalHandler}
    /> }
    <View style={styles.goalsContainer}>
    <FlatList 
      data={courseGoals} 
      renderItem={(itemData) => {
      return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
    }} 
     keyExtractor={(item,index)=> {
      return item.id;
     }} 
    />
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer : { 
    flex : 1,
    paddingTop : 50,
    paddingHorizontal : 16,
  },
  
  goalsContainer : {
    flex : 4,
  },
  
});
