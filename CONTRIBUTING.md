# 🍻 Contributing

**Thank you for considering contributing to this project!**

Before you doing so, **please read the following simple steps** on how to contribute.

This will **make life easier and help to avoid wasting time** on things, which are not requested.

## 📑	Get Familiar With The Project

Check out **in detail** the:

 - **`README.md`**, especially the **Usage** / **CLI** / **API** sections
 
 - **`package.json`** for **NPM scripts**, additional **configs**, and **dependencies**
 
 - **`src`** / **`lib`** / **`bin`** directories for **sources**, **structure**, and **naming conventions**

 - **`script`** directory and the **project's `root`** for **tools**, **scripts**, **tasks**, and **configs**

 - **`test`** directory for **tests**, the **test style**, and the **test process**

 - **`*.js`** / **`*.mjs`** files for **coding style** and **commenting style**, and get familiar with:
 
   - [![Code Style][badge-code]][url-code]

  - [**Issues**][url-issues] and [**Commits**][url-commits] for **commit styles**, the **release workflow**, and get familiar with:
  
    - [![Commit Style][badge-commit]][url-commit]    
    - [![Release Workflow][badge-release]][url-release]
 
## 💡	Discuss The Change

 - **Search** open and closed issues **first before submitting a new one**. Existing issues often contain ***workarounds, resolutions, or progress updates***.

 - If you **couldn't find** the relevant issue, **open a** [**New Issue**][url-new-issue] by choosing the ***appropriate and relevant issue type***.
 
 - **Follow the guide** of the issue type you chose and **describe your contribution in detail** and what change would you like to make.

 - **Wait for feedback before continuing** to the next steps. ***However, if the issue is clear*** *(a tiny bug, a build, or a doc typo, etc)* and ***the fix is simple***, you can ***continue and fix it***.

## 🛠️ Fixing Issues

 - Fork the project and create a branch 

 - Fork the project and **create a branch with your change** using the commitizen naming style: 
 based on semantic release **some-awesome-feature** or **some-issue-fix**.

 - Commit your changes in that branch. Make sure you follow [![StandardJS][badge-code]][url-code] and the **tests** and the **precommit hook** ran without errors:
   
    ```
    npm run check
    ```

 - In **`package.json`**, add yourself to the [**array of contributors**][url-npm-contrib-doc] *(create it if it doesn't exist)*:
 
    ```json   
    "contributors": [
      "Your Name <youremail@email.com> (www.yourwebsite.com)"
    ],  
    ```
 
 - Commit using commitizen.

 - Wait for [**Travis CI**][url-ci] to run all tests **without errors** and give you a [![CI][badge-ci]][url-ci] badge **on your own branch**. ***If Travis CI errors out, fix the issues, then commit and push again until all tests run without errors.***

## 🏁 Create A Pull Request

 - Open a pull request and **reference the initial issue** [**in the pull request message**][url-pull-req-help] 
   *(e.g.: fixes #42)*. Write a **good description and title**, so everybody will know what is fixed/improved.

 - **If it makes sense**, add screenshots, gifs, etc., so it will be easier to see what is going on.

## 👍 Wait For Feedback

Your **contribution will be reviewed** before accepted. ***You may get feedback*** about what should be changed/fixed in your contribution.

## 💕 Thank You!

*...for your* ***time and contribution***. ❤️

  <!--- References ============================================================================ -->

  <!--- Badges -->
  [badge-code]:    https://img.shields.io/badge/style-standard-f1d300.svg?style=flat-square&logo=javascript
  [badge-commit]:  https://img.shields.io/badge/commit-commitizen-fe7d37.svg?style=flat-square&logo=git
  [badge-release]: https://img.shields.io/badge/&#11091;%20release-semantic--release-e10079.svg?style=flat-square
  [badge-ci]:      https://img.shields.io/badge/build-passing-brightgreen

  <!--- URLs -->
  [url-commits]:   https://github.com/richrdkng/github-template/commits
  [url-issues]:    https://github.com/richrdkng/github-template/issues
  [url-new-issue]: https://github.com/richrdkng/github-template/issues/new/choose
  [url-code]:      https://standardjs.com
  [url-commit]:    https://commitizen.github.io/cz-cli
  [url-release]:   https://semantic-release.gitbook.io/semantic-release
  [url-ci]:        https://travis-ci.org/richrdkng/github-template

  [url-bugs]:            https://github.com/richrdkng/github-template/issues
  [url-standard]:        https://standardjs.com
  [url-npm-contrib-doc]: https://docs.npmjs.com/files/package.json#people-fields-author-contributors
  [url-pull-req-help]:   https://blog.github.com/2013-05-14-closing-issues-via-pull-requests
  [url-dev-doc]:         https://github.com/richrdkng/github-template/blob/master/github/DEVELOPMENT.md
