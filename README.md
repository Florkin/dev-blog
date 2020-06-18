# dev-blog
Openclassrooms project

Blog system creation,
No CMS, No framework.

# INSTALL PROJECT
-> Clone the repository

-> Execute command: "composer install".
_Install dependencies

-> Go to "front/\_dev" and execute command "npm install", then "npm run build".
_This will build scss and js assets in front/assets

-> Do the same thing in admin/front/\_dev

-> Go to src/ConfigLocal.php.
Fill the file with your database and email config, and rename the file to "Config.php".

_No need for database model, all tables will be created automatically when needed.

Here you go!



