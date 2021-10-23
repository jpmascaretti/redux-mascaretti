import { FIREBASE_API_KEY } from '@env'

export const URL_API = 'https://doseplus-6ff71-default-rtdb.firebaseio.com/'
export const URL_SIGNUP_AUTH_API = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`
export const URL_LOGIN_AUTH_API = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`
