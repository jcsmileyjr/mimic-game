
import celebration from '../assets/celebration.png';
import danceLeft from '../assets/dance-left-icon.png';
import danceRight from '../assets/right-dance-icon.png';
import dipDance from '../assets/dip-dance-icon.png';
import djBooth from '../assets/dj-booth-icon.png';
import funSticker from '../assets/fun-sticker-icon.png';
import leftHop from '../assets/left-hop-icon.png';
import rightHop from '../assets/right-hop-icon.png';
import rightSway from '../assets/right-sway-icon.png';
import blankIcon from '../assets/blank-icon.png';

/*Sounds use as beats when the user click a button */
import sound1 from '../assets/boom.wav';
import sound2 from '../assets/clap.wav';
import sound3 from '../assets/kick.wav';
import sound4 from '../assets/openhat.wav';
import sound5 from '../assets/ride.wav';
import sound6 from '../assets/snare.wav';
import sound7 from '../assets/tink.wav';
import sound8 from '../assets/tom.wav';
import sound9 from '../assets/hihat.wav';

const danceColors = [
  {colorKey:"A", color:"pineGreen", icon:danceLeft, sound: sound1},
  {colorKey:"S", color:"blue", icon: danceRight, sound: sound2},
  {colorKey:"D", color:"lightGreen", icon: dipDance, sound: sound3},
  {colorKey:"F", color:"salmon", icon: djBooth, sound: sound4},
  {colorKey:"G", color:"purple", icon: funSticker, sound: sound5},
  {colorKey:"H", color:"red", icon: leftHop, sound: sound6},
  {colorKey:"J", color:"orange", icon: rightHop, sound: sound7},
  {colorKey:"K", color:"deepPurple", icon: rightSway, sound: sound8},
  {colorKey:"L", color:"burntOrange", icon: celebration, sound: sound9},
];

  // Function called, within the updateBeats(), when user click a beat the background color change 
  export const updateAnimationByKey = (letterKey, isShowDanceColor, setBeatIcon, setPrimaryColor, freeStyle) => {
    // Match the pressed key to a color and beat image
    danceColors.forEach((colorObject) => {
      if(letterKey === colorObject.colorKey){
        isShowDanceColor(colorObject.color)
        setBeatIcon(colorObject.icon);
        setPrimaryColor(false);
        if(freeStyle){
          let audio = new Audio(colorObject.sound);
          audio.play();          
        }
      }
    })

    // Remove the color and image after the user press a beat
    setTimeout(() => {
      isShowDanceColor("white");
      setBeatIcon(blankIcon)
      setPrimaryColor(true)
    }, 900); //default is 300
  }

  // Function called when user click a beat to update a score and update the "Listen" image to show the user if the beat is incorrect or correct. 
  export const updateBeats = (key, remainingBeats,setRemainingBeats,recording, isShowDanceColor, setBeatIcon, setPrimaryColor) => {
    let correctKey = recording[remainingBeats];

    if(key === correctKey){
      let currentBeatCount = remainingBeats + 1;
      setRemainingBeats(currentBeatCount);
    }

    updateAnimationByKey(key, isShowDanceColor, setBeatIcon, setPrimaryColor);
  }

