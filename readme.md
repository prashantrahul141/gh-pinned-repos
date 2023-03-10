<h1 align='center'>Gh Pinned Repos</h1>

<p align="center">
A simple script to get pinned repos of a github user because github's rest api doesn't allow it.
</p>

###Usage
`getRepos.ts/js` file exports `getPinnedRepos` function.

function `getPinnedRepos(params)`
@params
username: string -> Username of the gh user.

@returns
info: {owner: string, repo: string, url: string} -> Pinned repos.

###Note
`index.ts/js` is only for demonstration purpose.
