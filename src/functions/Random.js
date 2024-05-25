// This function returns a random element from a collection
const Random = (collection) => {
  // Calculate the total count of elements in the collection
  const totalCount = collection.length;

  // Generate a random index
  const randomElementIndex = Math.floor(Math.random() * totalCount);

  // Return the element at the random index
  return collection[randomElementIndex];
};

export default Random;