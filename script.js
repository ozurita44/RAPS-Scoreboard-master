const rubyPoints = document.getElementById('ruby-points');
const sapphirePoints = document.getElementById('sapphire-points');
const amberPoints = document.getElementById('amber-points');
const pearlPoints = document.getElementById('pearl-points');
const winner = document.getElementById('winner');
const startButton = document.getElementById('start-button');
const startButtonContainer = document.getElementById('start-button-container');

import { db } from './db.js';
import { collection, getDocs } from 'firebase/firestore';

// fetchData();

const houses = [
  {
    houseReference: rubyPoints,
    totalPoints: 0,
  },
  {
    houseReference: sapphirePoints,
    totalPoints: 0,
  },
  {
    houseReference: amberPoints,
    totalPoints: 0,
  },
  {
    houseReference: pearlPoints,
    totalPoints: 0,
  },
];

async function getData() {
  const querySnapshot = await getDocs(collection(db, 'points')).catch(
    (error) => {
      console.log('Error getting documents: ', error);
      getData();
    }
  );
  querySnapshot.forEach((doc) => {
    if (doc.data().house === 'Ruby') {
      houses[0].totalPoints += parseInt(doc.data().points);
    }
    if (doc.data().house === 'Sapphire') {
      houses[1].totalPoints += parseInt(doc.data().points);
    }
    if (doc.data().house === 'Amber') {
      houses[2].totalPoints += parseInt(doc.data().points);
    }
    if (doc.data().house === 'Pearl') {
      houses[3].totalPoints += parseInt(doc.data().points);
    }
  });
}

getData().then(() => {
  rubyPoints.innerHTML = houses[0].totalPoints;
  sapphirePoints.innerHTML = houses[1].totalPoints;
  amberPoints.innerHTML = houses[2].totalPoints;
  pearlPoints.innerHTML = houses[3].totalPoints;
});
