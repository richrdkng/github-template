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

 - **`*.js`** / **`*.mjs`** / **`*.jsx`** / **`*.ts`** files for **coding style**, **commenting style**, and get familiar with [![Code Style][badge-code]][url-code]

  - [**issues**](https://github.com/richrdkng/github-template/issues) and [**commits**](https://github.com/richrdkng/github-template/commits/master) for **commit styles**, the **release workflow**, and get familiar with [![Commit Style][badge-commit]][url-commit] [![Release Workflow][badge-release]][url-release]
 
## 💡	Discuss The Change

 - **Open an issue** [**using the bug tracker**][url-bugs] 
   **and describe the contribution** you would like to make, the bug you found or any other ideas you have.
   This will help to get you started on the right foot.
   
 - **If it makes sense**, add the platform and software information *(e.g.: operating system, Node.js version etc.)* 
   and/or screenshots so we can see what you are seeing.
 
 - **Wait for feedback before continuing** to the next steps. ***However***, if the issue is clear *(e.g.: a typo)* and the fix is simple, you can continue and fix it.

## 🛠️ Fixing Issues

 - Fork the project and **create a branch with your fix** using 
   the naming style: **some-awesome-feature** or **some-issue-fix**.

 - Commit your changes in that branch. Make sure you follow [**StandardJS**][url-standard] and the **tests** and 
   the **precommit hook** ran without errors:
   
   ```bash
   npm test
   ```

 - In **`package.json`**, add yourself to the [**array of contributors**][url-npm-contrib-doc]:
 
   ```json   
   {
      "contributors": [
         "Your Name <yourmail@email.com> (http://your.website)"
      ],
   }   
   ```
 
## 🏁 Create A Pull Request

 - Open a pull request and **reference the initial issue** [**in the pull request message**][url-pull-req-help] 
   *(e.g.: fixes #42)*. Write a **good description and title**, so everybody will know what is fixed/improved.

 - **If it makes sense**, add screenshots, gifs, etc., so it will be easier to see what is going on.

## 👍 Wait For Feedback

**Your contribution will be reviewed before accepted.**
You *may* get feedback about what should be fixed/changed in your contribution.

## 💕 Thank You!

*...for your* ***time and contribution*** ❤️

  <!--- References ============================================================================ -->

  <!--- Badges -->
  [badge-code]:    https://img.shields.io/badge/style-standard-f1d300.svg?style=flat-square&logo=javascript
  [badge-commit]:  https://img.shields.io/badge/commit-commitizen-fe7d37.svg?style=flat-square&logo=git
  [badge-release]: https://img.shields.io/badge/&#11091;%20release-semantic--release-e10079.svg?style=flat-square

  <!--- URLs -->
  [url-code]:    https://standardjs.com
  [url-commit]:  https://commitizen.github.io/cz-cli
  [url-release]: https://semantic-release.gitbook.io/semantic-release

  [url-bugs]:            https://github.com/richrdkng/github-template/issues
  [url-standard]:        https://standardjs.com
  [url-npm-contrib-doc]: https://docs.npmjs.com/files/package.json#people-fields-author-contributors
  [url-pull-req-help]:   https://blog.github.com/2013-05-14-closing-issues-via-pull-requests
  [url-dev-doc]:         https://github.com/richrdkng/github-template/blob/master/github/DEVELOPMENT.md
