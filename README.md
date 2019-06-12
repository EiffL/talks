# talks
Repository of public talks


Creating a new Presentation:
  - Create a new branch, make a copy of `template`
  - git submodule current version of reveal.js
    ```
    $ git submodule add https://github.com/EiffL/reveal.js.git
    ```
  - Update/install npm modules to make sure it  works with this version:
    ```
    $ npm install
    ```
  - Start the server:
    ```
    $ npm start
    ```
