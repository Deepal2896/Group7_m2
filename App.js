import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {TextInput} from 'react-native-gesture-handler';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={MainPage} />
        <Stack.Screen name="AddPatient" component={AddPatient} />
        <Stack.Screen name="ViewPatient" component={ViewPatient} />
        <Stack.Screen name="List of all patients" component={AllPatients} />
        <Stack.Screen
          name="List of all critical patients"
          component={CriticalPatients}
        />
        <Stack.Screen name="Add patient record" component={AddPatientRecord} />
        <Stack.Screen
          name="View patient record"
          component={ViewPatientRecord}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainPage({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Add Patient"
          onPress={() => navigation.push('AddPatient')}
        />
        <Button
          title="View Patient"
          onPress={() => navigation.push('ViewPatient')}
        />
        <Button
          title="List of all patients"
          onPress={() => navigation.push('AllPatients')}
        />
        <Button
          title="List of all critical patients"
          onPress={() => navigation.push('CriticalPatients')}
        />
        <Button
          title="Add patient record"
          onPress={() => navigation.push('AddPatientRecord')}
        />
        <Button
          title="View Patient record"
          onPress={() => navigation.push('ViewPatientRecord')}
        />
      </View>
    </SafeAreaView>
  );
}
function AddPatient({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Age" />
        <TextInput placeholder="Gender" />
        <TextInput placeholder="Reason for visit" />
        <TextInput placeholder="Condition" />
        <TextInput placeholder="Blood Group" />
        <TextInput placeholder="Allergy" />
        <Button title="Submit" onPress={() => navigation.goBack('MainPage')} />
      </View>
    </SafeAreaView>
  );
}
function ViewPatient({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <TextInput placeholder="Enter Patient's Name" />
        <Button title="Search" onPress={() => navigation.goBack('MainPage')} />
      </View>
    </SafeAreaView>
  );
}
function AllPatients({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>Name</Text>
        <Button title="Search" onPress={() => navigation.goBack('MainPage')} />
      </View>
    </SafeAreaView>
  );
}
function CriticalPatients({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Button title="Search" onPress={() => navigation.goBack('MainPage')} />
      </View>
    </SafeAreaView>
  );
}
function AddPatientRecord({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Button title="Search" onPress={() => navigation.goBack('MainPage')} />
      </View>
    </SafeAreaView>
  );
}
function ViewPatientRecord({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Button title="Search" onPress={() => navigation.goBack('MainPage')} />
      </View>
    </SafeAreaView>
  );
}
