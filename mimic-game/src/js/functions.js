

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

  // Function called when user click a beat to update a score and update the "Listen" image to show the user if the beat is incorrect or correct. 
  export const updateBeats = (key, remainingBeats,setRemainingBeats,recording, isShowListenIcon, isShowCelebrationIcon, isIncorrectBeatIcon) => {
    let correctKey = recording[remainingBeats];
    if(key === correctKey){
      correctBeat(isShowListenIcon, isShowCelebrationIcon);
      let currentBeatCount = remainingBeats + 1;
      setRemainingBeats(currentBeatCount);
    }else{
      badBeat(isShowListenIcon, isIncorrectBeatIcon);
    }
  }
