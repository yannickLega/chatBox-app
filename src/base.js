import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCpgrZohxlSrzuBL-CGU186S6y37_GRvSc',
  authDomain: 'chatbox-app-6b92e.firebaseapp.com',
  databaseURL: 'https://chatbox-app-6b92e.firebaseio.com',
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
