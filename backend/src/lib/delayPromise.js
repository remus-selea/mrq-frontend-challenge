const delayPromise = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = delayPromise;
