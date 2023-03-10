import jsdom from 'jsdom';

const BASE_GITHUB_URL = 'https://github.com/';

const getDocument = async (url: string) => {
  const page = await fetch(url);
  const pageText = await page.text();
  const parsedPage = new jsdom.JSDOM(pageText);
  return parsedPage;
};

const getPinnedRepos = async (username: string) => {
  const USER_GH_URL = BASE_GITHUB_URL + '/' + username;
  const document = await getDocument(USER_GH_URL);

  const pinnedReposFormHTML = document.window.document
    .getElementsByClassName('js-pinned-items-reorder-container')
    .item(0);
  if (!pinnedReposFormHTML) {
    throw new Error("Couldn't parse html.");
  }

  const pinnedReposLiHTML = pinnedReposFormHTML.getElementsByTagName('li');
  if (!pinnedReposLiHTML) {
    throw new Error("Couldn't parse html.");
  }

  const pinnedReposNamesHTML = pinnedReposFormHTML.getElementsByTagName('a');
  if (!pinnedReposNamesHTML) {
    throw new Error("Couldn't parse html.");
  }

  const repoNames: Array<{ owner: string; repo: string; url: string }> = [];

  for (let i = 0; i < pinnedReposNamesHTML.length; i++) {
    const element = pinnedReposNamesHTML[i];

    const href = element.getAttribute('href');
    let url = '';
    if (href) {
      if (href.includes('http')) {
        url = href;
      } else {
        url = BASE_GITHUB_URL + href;
      }
    } else {
      url = USER_GH_URL;
    }

    const owner =
      element.getElementsByClassName('owner').item(0)?.textContent || username;
    const repo = element.getElementsByClassName('repo').item(0)?.textContent;

    if (repo) {
      const info = { owner, repo, url };
      repoNames.push(info);
    }
  }

  return repoNames;
};

export default getPinnedRepos;
