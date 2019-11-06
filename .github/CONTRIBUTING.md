<h1 align="center">
  🍻 Contributing
</h1>

<p align="center">
  <b>Thank you for considering contributing to this project!</b>
</p>

<br/>

Before you doing so, **please read the following simple steps** on how to contribute. This will **make life easier and help to avoid wasting time** on things, which are not requested. ⏳

<br/>

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

<br/>

## 💡	Discuss The Change

 - **Search** open and closed issues **first before submitting a new one**. Existing issues often contain ***workarounds, resolutions, or progress updates***.

 - If you **couldn't find** the relevant issue, **open a** [**New Issue**][url-new-issue] by choosing the ***appropriate and relevant issue type***.
 
 - **Follow the guide** of the issue type you chose and **describe your contribution in detail** and what change would you like to make.

 - **Wait for feedback before continuing** to the next steps. ***However, if the issue is clear*** *(a tiny bug, a build, or a doc typo, etc)* and ***the fix is simple***, you can ***continue and fix it***.

<br/>

## 🛠️ Fixing Issues

 - [**Fork**][url-help-fork] **the project**, then:
 
   - **Clone your own** fork:

     ```bash
     git clone https://github.com/<your-username>/github-template.git
     ```

   - Navigate into the project's directory, **configure the remote**, then **install the dependencies**:

     ```bash
     git remote add upstream https://github.com/richrdkng/github-template.git
     npm install
     ```     

   - If you cloned a while ago, **get the latest changes** from upstream, then **update the dependencies**:

     ```bash
     git checkout master && git pull upstream master
     rm -rf node_modules && npm install
     ``` 
 
 - **Create a new branch** for your change using [**commitizen-style**][url-commit-style] naming convention **in `dash-case`**:

   - Use **this general template** for your branch names, notice `<scope>` is optional ***(omit ONLY, when you're working on a larger, or multifaceted change with several scopes)***:

     ```bash
     git checkout -b <type>-<scope?>-<subject>
     ```

   - General examples:

     ```bash
     # bugfix:
     git checkout -b fix-scope-short-imperative-tense-title

     # feature:
     git checkout -b feat-scope-short-imperative-tense-title

     # feature without scope (omitted):
     git checkout -b feat-short-imperative-tense-title

     # doc change:
     git checkout -b docs-scope-short-imperative-tense-title
     ```

   - Specific examples:

     ```bash
     # bugfix:
     git checkout -b fix-homepage-fix-hero-typos     

     # feature:
     git checkout -b feat-backend-add-image-resizing

     # feature without scope (omitted):
     git checkout -b feat-add-initial-image-upload

     # test:
     git checkout -b test-validation-add-middle-name-tests
     
     # test without scope (omitted):
     git checkout -b test-add-initial-form-tests
     ```
 
 - **Commit your changes** in that branch **in logical chunks**:
 
   - Please adhere to these git commit message guidelines or your code is unlikely be merged into the main project. Use Git's interactive rebase feature to tidy up your commits before making them public.

   - For **intermediate/small changes** ***(when you're not done yet with the particular fix/feature/etc, but you need to commit some changes)***, adhere to commitizen-style type-subject-body guidelines:  

      ```
      add initial dirs and files

      Add an initial .gitattributes file with initial, default content.
      Also add lib/ and src/ dirs with .gitkeep files.
      ```

   - For the **main change** ***(when you're done with your fix/feature/etc change)***:

   - Commit your changes in that branch. Make sure you follow [![StandardJS][badge-code]][url-code] and the **tests** and the **precommit hook** ran without errors:
     
      ```bash
      npm run check
      ```
   - Commit using commitizen.

   - Wait for [**Travis CI**][url-ci] to run all tests **without errors** and give you a [![CI][badge-ci]][url-ci] badge **on your own branch**. ***If Travis CI errors out, fix the issues, then commit and push again until all tests run without errors.***

 - **Ensure consistency and quality** throughout all changes:

   - x

 - In **`package.json`**, add yourself to the [**array of contributors**][url-npm-contrib-doc] *(create it if it doesn't exist)*:
 
    ```json   
    "contributors": [
      "Your Name <youremail@email.com> (www.yourwebsite.com)"
    ],  
    ```
 
 - **Merge** ***(or rebase)*** **the upstream branch** into your branch locally:

    ```bash
    git pull [--rebase] upstream master
    ```

 - **Push your branch** up to **your fork**:

    ```bash
    git push origin <your-branch-name>
    ```

<br/>

## 🏁 Submit A Pull Request

 - Open a pull request and **reference the initial issue** [**in the pull request message**][url-pull-req-help] 
   *(e.g.: fixes #42)*. Write a **good description and title**, so everybody will know what is fixed/improved.

 - **If it makes sense**, add screenshots, gifs, etc., so it will be easier to see what is going on.

<br/>

## 👍 Wait For Feedback

Your **contribution will be reviewed** before accepted. ***You may get feedback*** about what should be changed/fixed in your contribution.

<br/>
<br/>

<h1 align="center">
  💕 Thank You!
</h1>

<p align="center">
  <i>...for your</i> <b><i>time and contribution</i></b>. ❤️
</p>

  <!--- References ============================================================================ -->

  <!--- Badges -->
  [badge-code]:    https://img.shields.io/badge/style-standard-f1d300.svg?style=flat-square&logo=javascript
  [badge-commit]:  https://img.shields.io/badge/commit-commitizen-fe7d37.svg?style=flat-square&logo=git
  [badge-release]: https://img.shields.io/badge/&#11091;%20release-semantic--release-e10079.svg?style=flat-square
  [badge-ci]:      https://img.shields.io/badge/build-passing-brightgreen

  <!--- URLs -->
  [url-commits]:      https://github.com/richrdkng/github-template/commits
  [url-issues]:       https://github.com/richrdkng/github-template/issues
  [url-new-issue]:    https://github.com/richrdkng/github-template/issues/new/choose
  [url-commit-style]: https://github.com/semantic-release/semantic-release/blob/master/CONTRIBUTING.md#commit-message-guidelines
  
  [url-code]:      https://standardjs.com
  [url-commit]:    https://commitizen.github.io/cz-cli
  [url-release]:   https://semantic-release.gitbook.io/semantic-release
  [url-ci]:        https://travis-ci.org/richrdkng/github-template

  [url-help-fork]: https://help.github.com/en/github/getting-started-with-github/fork-a-repo

  [url-bugs]:            https://github.com/richrdkng/github-template/issues
  [url-standard]:        https://standardjs.com
  [url-npm-contrib-doc]: https://docs.npmjs.com/files/package.json#people-fields-author-contributors
  [url-pull-req-help]:   https://blog.github.com/2013-05-14-closing-issues-via-pull-requests
  [url-dev-doc]:         https://github.com/richrdkng/github-template/blob/master/github/DEVELOPMENT.md
