
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>


      <View style={styles.goalsContainer}>
   
      <ScrollView style={styles.goalsContainer}>
          {courseGoals.map((goal) => (
            <View style={styles.goalsItem} key={goal}> 
              <Text style={styles.goalText}>{goal}</Text> 
            </View>
          ))}
      </ScrollView>
      </View>   
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalsItem: {
    borderRadius: 8,
    backgroundColor: 'blue',
    padding: 8,
    margin: 8,
  },
  goalText:{
    color: 'white',
 
  }
}); 