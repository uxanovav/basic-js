const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeamName = [];
  let result = '';
  if ( members != null){
  for (let i = 0; i < members.length; i++) {
    if ((typeof members[i]) === 'string'){
      let name = members[i].trim().toUpperCase();
      dreamTeamName.push(name[0]);
    }
  }
  dreamTeamName = dreamTeamName.sort();
  for (let i = 0; i < dreamTeamName.length; i++){
    result += dreamTeamName[i].toUpperCase();
  }
  return result;
} else {
  return false;
}
};

