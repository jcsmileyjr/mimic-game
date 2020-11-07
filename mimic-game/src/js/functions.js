
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

  // Function called, within the updateBeats(), when user click a beat the background color change 
  const updateAnimationByKey = (letterKey, isShowDanceColor, setBeatIcon, setPrimaryColor) => {
    const danceColors = [
      {colorKey:"A", color:"lightGreen", icon:danceLeft},
      {colorKey:"S", color:"blue", icon: danceRight},
      {colorKey:"D", color:"yellow", icon: dipDance},
      {colorKey:"F", color:"green", icon: djBooth},
      {colorKey:"G", color:"purple", icon: funSticker},
      {colorKey:"H", color:"red", icon: leftHop},
      {colorKey:"J", color:"orange", icon: rightHop},
      {colorKey:"K", color:"deepPurple", icon: rightSway},
      {colorKey:"L", color:"burntOrange", icon: celebration},
    ];

    // Match the pressed key to a color and beat image
    danceColors.forEach((colorObject) => {
      if(letterKey === colorObject.colorKey){
        isShowDanceColor(colorObject.color)
        setBeatIcon(colorObject.icon);
        setPrimaryColor(false);
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
