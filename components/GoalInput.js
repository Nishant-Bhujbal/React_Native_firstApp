import { StyleSheet ,View,Button,TextInput, Modal,Image} from "react-native";
import { useState } from "react";

function GoalInput(props) {
const [enterredGoalText,setEnteredGoalText] = useState('');

function goalInputHandler(eneterdText){
    setEnteredGoalText(eneterdText);
  };

function addGoalHandler(){
    props.onAddGoal(enterredGoalText);
    setEnteredGoalText('');
}

  return (
    <Modal visible={props.visible} animationType="slide" >
    <View style={styles.inputContainer}>
    <Image style={styles.image} source={require('../assets/images/goal.jpg')} />
      <TextInput placeholder='Your course goal' 
        onChangeText={goalInputHandler} 
        style={styles.textInput} 
        value={enterredGoalText} 
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Add Goal'onPress={addGoalHandler} color='#5e0acc'/>
        </View>
        <View style={styles.button}>
          <Button title='Cancel'onPress={props.onCancel} color='#f31282'/>
        </View>
        </View>
    </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 16,
        backgroundColor : '#311b6b'
      },
      textInput : {
        borderWidth : 1,
        borderColor : '#e4d0ff',
        backgroundColor : '#e4d0ff',
        color : '#120438',
        borderRadius : 6,
        width : '90%',
        marginRight : 8,
        padding : 16,
      },
      buttonContainer : {
        flexDirection : 'row',
        marginTop : 60,
      },
      button : {
        width : '30%',
        marginHorizontal : 8,
      },
      image: {
        width : 100,
        height : 100,
        margin : 20,
      }
})