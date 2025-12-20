import * as SQLite from 'expo-sqlite';
import { Place } from '../Models/place';

const database = SQLite.openDatabaseSync('places.db');

export async function init() {
  try {
    database.withTransactionSync(() => {
      database.execAsync(`
        CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        );
      `);
    });
  } catch (error) {
    console.log('Database init failed:', error);
    throw error;
  }

  // OLD CODE FROM COURSE, EXPO SQLite HAS SINCE CHANGED!

  //   const promise = new Promise((resolve, reject) => {
  //     database.transaction((tx) => {
  //       tx.executeSql(
  //         `CREATE TABLE IF NOT EXISTS places (
  //         id INTEGER PRIMARY KEY NOT NULL,
  //         title TEXT NOT NULL,
  //         imageUri TEXT NOT NULL,
  //         address TEXT NOT NULL,
  //         lat REAL NOT NULL,
  //         lng REAL NOT NULL
  //         )`,
  //         [],
  //         // Callback if everything succeeded
  //         () => {
  //           resolve();
  //         },
  //         // Callback if we have an error, _ is the transaction that failed but we are not interested in that in this case
  //         (_, error) => {
  //           reject(error);
  //         }
  //       );
  //     });
  //   });

  //   return promise;
}

export async function insertPlace(place) {
  try {
    const result = await database.runAsync(
      `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?,?)`,
      [
        place.title,
        place.imageUri,
        place.address,
        place.location.lat,
        place.location.lng
      ]
    );
    return result;
  } catch (error) {
    console.log('Insert place failed: ', error);
    throw error;
  }

  // CODE FROM THE COURSE, SQLite HAS CHANGED SINCE!
  //   const promise = new Promise((resolve, reject) => {
  //     database.transaction((tx) => {
  //       tx.executeSql(
  //         `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?,?)`,
  //         [
  //           place.title,
  //           place.imageUri,
  //           place.address,
  //           place.location.lat,
  //           place.location.lng
  //         ],
  //         // success case, first argument is the transaction but we are not interested in that for this case
  //         (_, result) => {
  //           console.log(result);
  //           resolve(result);
  //         },
  //         // error case
  //         (_, error) => {
  //           reject(error);
  //         }
  //       );
  //     });
  //   });

  //   return promise;
}

export async function fetchPlaces() {
  try {
    const result = await database.getAllAsync('SELECT * FROM places');

    // return result;

    // TODO: - Check if this is correct, at the momemt of following and implementing the course I couldn't test it
    const places = [];
    for (const dp of result.rows._array) {
      places.push(
        new Place(
          dp.title,
          dp.imageUri,
          {
            address: dp.address,
            lat: dp.lat,
            lng: dp.lng
          },
          dp.id
        )
      );
    }

    return places;
  } catch (error) {
    console.log('Fetch places failed:', error);
    throw error;
  }

  // CODE FROM THE COURSE, SQLite has changed since then
  //   const promise = new Promise((resolve, reject) => {
  //     database.transaction((tx) => {
  //       tx.executeSql(
  //         'SELECT * FROM places',
  //         // the second argument is the array of data should be injected into this command, but here we don't have any placeholders so we use an empty array!
  //         [],
  //         // success function
  //         (_, result) => {
  //           console.log(result);

  //            resolve(result.rows._array);

  //           resolve(result);
  //         },
  //         // error function
  //         (_, error) => {
  //           reject(error);
  //         }
  //       );
  //     });
  //   });

  //   return promise;
}

export async function fetchPlaceDetails(id) {
  try {
    const result = await database.getFirstAsync(
      'SELECT * FROM places WHERE id = ?',
      [id]
    );

    // return place;
    const dbPlace = result.rows._array[0];
    const place = new Place(
      dbPlace.title,
      dbPlace.imageUri,
      { lat: dbPlace.lat, lng: dbPlace.lng, address: dbPlace.address },
      dbPlace.id
    );
    return place;
  } catch (error) {
    console.log('Fetch place details failed:', error);
    throw error;
  }

  // CODE FROM THE COURSE, SQLite HAS CHANGED SINCE THEN!
  //   const promise = new Promise((resolve, reject) => {
  //     database.transaction((tx) => {
  //       tx.executeSql(
  //         'SELECT * FROM places WHERE id = ?',
  //         [id],
  //         // success
  //         (_, result) => {
  //           resolve(result);
  //         },
  //         // error
  //         (_, error) => {
  //           reject(error);
  //         }
  //       );
  //     });
  //   });

  //   return promise;
}
