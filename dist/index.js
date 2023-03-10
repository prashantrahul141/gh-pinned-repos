var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Usage example
import getPinnedRepos from './getRepos.js';
const USERNAME = 'prashantrahul141';
// either use inside a async function
const get = () => __awaiter(void 0, void 0, void 0, function* () {
    const repos = yield getPinnedRepos('prashantrahul141');
    // do something with repos
});
// or use then, catch to use the function without await.
getPinnedRepos(USERNAME)
    .then((repos) => {
    // do something with repos
})
    .catch((e) => {
    throw e;
});
