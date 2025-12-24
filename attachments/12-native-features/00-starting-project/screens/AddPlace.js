import PlaceForm from '../components/Places/PlaceForm';
import { insertPlace } from '../util/database';

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    try {
      await insertPlace(place);
      navigation.navigate('AllPlaces');
    } catch (error) {
      console.log('AddPlace, failed to insert place into databse');
    }
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
