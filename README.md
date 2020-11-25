# talks
Repository of public talks


Creating a new Presentation:
  - Create a new branch, make a copy of `template`, and `cd` there
  - git submodule current version of reveal.js
    ```
    $ git submodule add https://github.com/EiffL/reveal.js.git
    $ cd reveal.js
    $ git submodule update --init --recursive
    ```
  - copy `package.json` and `gulpfile.js` from  the `reveal.js` folder to the talk directory
  - Update/install npm modules to make sure it  works with this version:
    ```
    $ npm install
    ```
  - Start the server:
    ```
    $ npm start
    ```
