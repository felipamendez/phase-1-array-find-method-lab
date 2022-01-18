

function superbowlWin(records) {
    const superBowlWinDeclaration = records.find(record => record.result === "W")
    if(superBowlWinDeclaration) {
        return superBowlWinDeclaration.year
      } else {
        return undefined
   }
}


