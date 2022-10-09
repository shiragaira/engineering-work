import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'
import { errorResponse } from './utils'
import {
  emailDoesntExistResponse,
  emailExistResponse,
  invalidRegisterKeyResponse,
  validRegisterKeyResponse,
} from './response'

admin.initializeApp()

exports.checkEmail = functions.https.onCall(async (data) => {
  const email = data.email as string

  const docRef = getFirestore().collection('allowedEmails').doc(email)
  return await docRef
    .get()
    .then((doc) => {
      if (doc.exists) return emailExistResponse

      return emailDoesntExistResponse
    })
    .catch(errorResponse)
})

exports.validateRegisterKey = functions.https.onCall(async (data) => {
  const email = data.email as string
  const registerKey = data.registerKey as string

  const docRef = getFirestore().collection('allowedEmails').doc(email)
  return await docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        if (doc.data()?.registerKey === registerKey) {
          return validRegisterKeyResponse
        }
        return invalidRegisterKeyResponse
      }

      return emailDoesntExistResponse
    })
    .catch(errorResponse)
})
