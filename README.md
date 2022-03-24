### Internal Training Guide
1. ReactJS frontend
2. .NET core api backend
3. MSSQL entity framework core
4. Cypress testing 

### Environment Setup
- Install [npm ](https://nodejs.org/en/download/ "npm ")
Edit config file C:\Users\[user]\.npmrc
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
    You can save to `C:\Java\swagger-codegen-cli.jar`

### Folder Setup

- classroom
	- dotnet
	- react
	- iis-dev
	- iis-prod
	- cypress

### .NET Web API

Create new api template `name=classroom` output to dotnet folder
```shell
dotnet new webapi -n classroom -o dotnet
```
We can test the api already, cd into dotnet folder
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
https://localhost:7129/swagger/index.html


