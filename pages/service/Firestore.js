// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, Timestamp} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWuVCHyiozaI-94AMr7i4j4rNUhNDhNAI",
  authDomain: "harry-potter-quiz-a82b2.firebaseapp.com",
  projectId: "harry-potter-quiz-a82b2",
  storageBucket: "harry-potter-quiz-a82b2.appspot.com",
  messagingSenderId: "1032035719018",
  appId: "1:1032035719018:web:68e480ec48433c020fb713"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

  export async function playerScore(dataAnswer){

    const quizCollection = collection(appFirestore, "PlayerScoreData");
    const dataTime = Timestamp.now()
    const answerWhiteDate = {
      player: dataAnswer.player,
      score: dataAnswer.score,
      date: dataTime
    }
    const CreateNewAnswer = await addDoc(quizCollection, answerWhiteDate)
    return CreateNewAnswer;

  }

  export default appFirestore;