import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBZyUyOoV8V3S1FN5K8SaNKM-xXvzz2OfQ',
  authDomain: 'chat-enginerring-work.firebaseapp.com',
  databaseURL: 'https://chat-enginerring-work-default-rtdb.firebaseio.com',
  projectId: 'chat-enginerring-work',
  storageBucket: 'chat-enginerring-work.appspot.com',
  messagingSenderId: '694784130352',
  appId: '1:694784130352:web:b767388ca3a223184edcf5',
}

export const firebaseApp = initializeApp(firebaseConfig)

export const firestore = getFirestore(firebaseApp)
export const functions = getFunctions(firebaseApp)
export const auth = getAuth(firebaseApp)
