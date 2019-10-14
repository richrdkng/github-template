# :beers: Contributing

**Thank you for considering contributing to this project!**

Before you doing so, **please read the following simple steps** on how to contribute. 
This will **make life easier and help to avoid wasting time** on things, which are not requested.

## :computer:	Development

Check out the short, but concise [**development guide**][url-dev-doc] for tools, structure, and commands.  

## :bulb:	Discuss The Changes First

 - First of all, **open an issue in the repository** [**using the bug tracker**][url-bugs] 
   **and describe the contribution** you would like to make, the bug you found or any other ideas you have.
   This will help to get you started on the right foot.
   
 - **If it makes sense**, add the platform and software information *(e.g.: operating system, Node.js version etc.)* 
   and/or screenshots so we can see what you are seeing.
 
 - It is recommended to **wait for feedback before continuing** to the next steps. However, 
   if the issue is clear *(e.g.: a typo)* and the fix is simple, you can continue and fix it.

## :hammer_and_wrench: Fixing Issues

 - Fork the project in your account and **create a branch with your fix** using 
   the naming style: **some-awesome-feature** or **some-issue-fix**.

 - Commit your changes in that branch. Make sure you follow [**StandardJS**][url-standard] and the **tests** and 
   the **precommit hook** ran without errors:
   
   ```bash
   # Run all tests with style and coverage checks
   npm run test
   ```
   
 - In **package.json**, add yourself to the [**array of contributors**][url-npm-contrib-doc]
   *(if the array doesn't exist, create it)*:
 
   ```json   
   {
      ...
      "contributors": [
         "Your Name <yourmail@email.com> (http://your.website)"
      ],
      ...
   }   
   ```
 
## :checkered_flag: Create A Pull Request

 - Open a pull request and **reference the initial issue** [**in the pull request message**][url-pull-req-help] 
   *(e.g.: fixes #42)*. Write a **good description and title**, so everybody will know what is fixed/improved.

 - **If it makes sense**, add screenshots, gifs, etc., so it will be easier to see what is going on.

## :thumbsup: Wait For Feedback

**Your contributions will be reviewed before accepting them.**
You may get feedback about what should be fixed/changed in your modified code.

## :two_hearts: Thank You!

  <!--- References ============================================================================ -->

  <!--- Badges -->

  <!--- URLs -->
  [url-bugs]:            https://github.com/richrdkng/github-template/issues
  [url-standard]:        https://standardjs.com
  [url-npm-contrib-doc]: https://docs.npmjs.com/files/package.json#people-fields-author-contributors
  [url-pull-req-help]:   https://blog.github.com/2013-05-14-closing-issues-via-pull-requests
  [url-dev-doc]:         https://github.com/richrdkng/github-template/blob/master/github/DEVELOPMENT.md
