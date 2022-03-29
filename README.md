### Internal Training Guide
1. ReactJS frontend
2. .NET core api backend
3. MSSQL entity framework core
4. Cypress testing 

### Environment Setup
- Install [npm ](https://nodejs.org/en/download/ "npm ")
Edit config file C:\Users\\[user]\\.npmrc
```javascript
    proxy=http://[user]:[pw]@[proxy]:8080/
    https-proxy=http://[user]:[pw]@[proxy]:8080/
    cache=[cache folder]
```
Install global packages
```shell
npm install -g dotenv dotenv-cli react-scripts 
```
- Install [dotnet sdk](https://dotnet.microsoft.com/en-us/download/dotnet/6.0 "dotnet sdk")
- Install [vscode](https://code.visualstudio.com/ "vscode") 
- Download [swagger-codegen-cli](https://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.24/swagger-codegen-cli-2.4.24.jar "swagger-codegen-cli")
    You can save as to this location `C:\Java\swagger-codegen-cli.jar`

### Classroom Project
1. New a folder `classroom`
2. Open with Visual Studio Code

This is beginning of every project.
### Create React App
Open new Terminal <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`(Back Quote)</kbd>
Run this at Terminal in `classroom` folder
```shell
npx create-react-app reactapp --template @chakra-ui/typescript
```
Wait a few minutes to create new React apps with TypeScript and Chakra UI
Your react app is located at  `cd reactapp`

Let&apos;s try `npm start`
You will see the Learn React page at: 
http://localhost:3000/

<kbd>Ctrl</kbd> + <kbd>C</kbd> in Terminal to stop running

### New dotnet Web API
Open new Terminal <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`(Back Quote)</kbd>
Run this at Terminal in `classroom` folder
```shell
dotnet new webapi -n classroom -o dotnet
```
Your web api is located at cd dotnet
```shell
dotnet run
```
```shell
Building...
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: https://localhost:7129
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5086
```
Now visit swagger ui testing website at our localhost:
https://localhost:[port]/swagger/index.html

> But..... for now, react app & web api are not talking to each other




### Folder Setup
This is your folders look like:
- classroom
	- dotnet
	- reactapp
	- iis-dev
	- iis-prod
	- cypress
