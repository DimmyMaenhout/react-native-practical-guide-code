import { useCallback, useState } from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../UI/Button';

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [pickedLocation, setPickedLocation] = useState();
  const [selectImage, setSelectedImage] = useState();

  function changeTitleHandler(enteredText) {
    console.log('changeTitleHanlder, enteredText: ', enteredText);

    setEnteredTitle(enteredText);
  }

  function imageTakenHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function savePlaceHandler() {
    console.log(enteredTitle);
    console.log(selectImage);
    console.log(pickedLocation);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>TITLE</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>

      <ImagePicker onTakeImage={imageTakenHandler} />

      <LocationPicker onPickLocation={pickLocationHandler} />

      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100
  }
});
