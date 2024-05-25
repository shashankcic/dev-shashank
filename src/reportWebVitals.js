// This function reports any web vitals to the provided callback function
const reportWebVitals = async (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamically import the 'web-vitals' library
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

    // Call each of the get* methods with the callback function
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;