import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection, Timestamp} from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyDXuHXPXiZjiKeqLb8SghyDq2DYNiowBYw",
  authDomain: "hpquiz-2254c.firebaseapp.com",
  projectId: process.env.REACT_APP_PROYECT_FB_ID,
  storageBucket: "hpquiz-2254c.appspot.com",
  messagingSenderId: "447438591430",
  appId: "1:447438591430:web:be7737c5d72868754acec7"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

  export default async function playerScore(dataAnswer){

    const quizCollection = collection(appFirestore, "PlayerScoreData");
    const dataTimeStamp = Timestamp.now()
    const answerWhiteDate = {
      player: dataAnswer.player,
      score: dataAnswer.score,
      date: dataTimeStamp
    }
    const CreateNewAnswer = await addDoc(quizCollection, answerWhiteDate)
    return CreateNewAnswer;

  }

  // export default appFirestore;