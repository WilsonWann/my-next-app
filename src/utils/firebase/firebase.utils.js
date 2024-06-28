import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcgnWdUlvJ_AxlNDZhuvOVNjCxzc13rvc",
  authDomain: "my-next-app-1718349703161.firebaseapp.com",
  projectId: "my-next-app-1718349703161",
  storageBucket: "my-next-app-1718349703161.appspot.com",
  messagingSenderId: "610975766643",
  appId: "1:610975766643:web:5129c5b1f2336efdfdb206"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'portfolio')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categories = querySnapshot.docs.reduceRight((acc, docSnapshot) => [...acc, docSnapshot.data()], [])
  return categories
}
