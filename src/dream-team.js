module.exports = function createDreamTeam(members) {
 if (Array.isArray(members)) {
    return members.map((item) => {
      if (typeof(item) === 'string') return item.trim().slice(0, 1).toUpperCase();
    }).sort().join('');
  };
  return false;
};
