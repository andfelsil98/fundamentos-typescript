(() => {
  let isEnable = true;
  isEnable = false;

  let isNew: boolean = false;
  console.log(`is new: ${isNew}`);
  isNew = true;
  console.log(`is new: ${isNew}`);

  const random = Math.random();//valor random entree 0 y 1
  console.log(`random: ${random}`);
  isNew = random >= 0.5 ? true : false;
  console.log(`is new: ${isNew}`);
})();
