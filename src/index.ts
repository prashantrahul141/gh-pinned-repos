// Usage example
import getPinnedRepos from './getRepos.js';

const USERNAME = 'prashantrahul141';

// either use inside a async function
const get = async () => {
  const repos = await getPinnedRepos('prashantrahul141');
  // do something with repos
};

// or use then, catch to use the function without await.
getPinnedRepos(USERNAME)
  .then((repos) => {
    // do something with repos
  })
  .catch((e: Error) => {
    throw e;
  });
