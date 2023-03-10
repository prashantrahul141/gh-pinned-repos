<h1 align='center'>Gh Pinned Repos</h1>

<p align="center">
A simple script to get pinned repos of a github user because github's rest api doesn't allow it.
</p>

<h2>Usage</h2>

`getRepos.ts/js` file exports `getPinnedRepos` function.

<br>

function `getPinnedRepos(params)`

@params<br>
username: string -> Username of the gh user.

@returns<br>
info: {owner: string, repo: string, url: string} -> Pinned repos.

<br>

<h2>Note</h2>

`index.ts/js` is only for demonstration purpose.
