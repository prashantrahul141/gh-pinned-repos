var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jsdom from 'jsdom';
const BASE_GITHUB_URL = 'https://github.com/';
const getDocument = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const page = yield fetch(url);
    const pageText = yield page.text();
    const parsedPage = new jsdom.JSDOM(pageText);
    return parsedPage;
});
const getPinnedRepos = (username) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const USER_GH_URL = BASE_GITHUB_URL + '/' + username;
    const document = yield getDocument(USER_GH_URL);
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
    const repoNames = [];
    for (let i = 0; i < pinnedReposNamesHTML.length; i++) {
        const element = pinnedReposNamesHTML[i];
        const href = element.getAttribute('href');
        let url = '';
        if (href) {
            if (href.includes('http')) {
                url = href;
            }
            else {
                url = BASE_GITHUB_URL + href;
            }
        }
        else {
            url = USER_GH_URL;
        }
        const owner = ((_a = element.getElementsByClassName('owner').item(0)) === null || _a === void 0 ? void 0 : _a.textContent) || username;
        const repo = (_b = element.getElementsByClassName('repo').item(0)) === null || _b === void 0 ? void 0 : _b.textContent;
        if (repo) {
            const info = { owner, repo, url };
            repoNames.push(info);
        }
    }
    return repoNames;
});
export default getPinnedRepos;
