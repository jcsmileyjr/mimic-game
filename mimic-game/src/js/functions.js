

  // Function called, within the updateBeats(), when user click a beat and its the correct beat. Then the celebration is icon is shown for a second. 
  const correctBeat = (isShowListenIcon, isShowCelebrationIcon) => {
    isShowListenIcon(false)
    isShowCelebrationIcon(true)
    setTimeout(() => {
        isShowListenIcon(true)
        isShowCelebrationIcon(false)
    }, 300);
  }

  // Function called, within the updateBeats(), when user click a beat and its the incorrect beat. Then the celebration is icon is shown for a second. 
  const badBeat = (isShowListenIcon, isIncorrectBeatIcon) => {
    isShowListenIcon(false);
    isIncorrectBeatIcon(true);
    setTimeout(() => {
        isShowListenIcon(true);
        isIncorrectBeatIcon(false);
    }, 300);
  }

  const updateBackgroundColorByKey = (letterKey, isShowDanceColor) => {
    const danceColors = [
      {colorKey:"A", color:"lightGreen"},
      {colorKey:"S", color:"blue"},
      {colorKey:"D", color:"yellow"},
      {colorKey:"F", color:"green"},
      {colorKey:"G", color:"purple"},
      {colorKey:"H", color:"red"},
      {colorKey:"J", color:"orange"},
      {colorKey:"K", color:"deepPurple"},
      {colorKey:"L", color:"burntOrange"},
    ];
    console.log("background function runs with key " + letterKey)
    danceColors.forEach((colorObject) => {
      if(letterKey === colorObject.colorKey){
        console.log("matching color key")
        isShowDanceColor(colorObject.color)
      }
    })
  }

  // Function called when user click a beat to update a score and update the "Listen" image to show the user if the beat is incorrect or correct. 
  export const updateBeats = (key, remainingBeats,setRemainingBeats,recording, isShowDanceColor) => {
    let correctKey = recording[remainingBeats];

    if(key === correctKey){
      let currentBeatCount = remainingBeats + 1;
      setRemainingBeats(currentBeatCount);
    }

    updateBackgroundColorByKey(key, isShowDanceColor);
  }
