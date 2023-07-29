const Random = (collection) => {
  const totalCount = collection.length;
  const randomElementIndex = Math.floor(Math.random() * totalCount);
  return collection[randomElementIndex];
};

export default Random;
