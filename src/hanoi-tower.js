module.exports = function calculateHanoi(disksNumber, turnSpeed) {
  let obj = {};
  obj.turns = Math.pow(2,disksNumber);
  obj.seconds = obj.turns/(turnsSpeed/3600);
  return obj;
};
