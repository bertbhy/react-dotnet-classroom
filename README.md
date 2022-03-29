### Internal Team Training Tutorial
1. ReactJS UI design
2. dotnet core web api
3. (Extra) dotnet entity framework core to MSSQL database

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

------------


### 1. Create React App
Open new Terminal <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`(Back Quote)</kbd>
Run this at Terminal in `classroom` folder
```shell
npx create-react-app reactapp --template @chakra-ui/typescript
```
Wait a few minutes to create new React apps with TypeScript and Chakra UI
Your react app is located at  `cd reactapp`

Let&apos;s try `npm start`
You will see the Learn Chakra page at: 
http://localhost:3000/

> <kbd>Ctrl</kbd> + <kbd>C</kbd> in Terminal to stop running

Happy coding!! :tw-1f600:
Get ready to add more great stuff to your first react app
- Pages
- Input Forms
- Web API

#### Folder Setup
Add more new folders for future use, like this:
- classroom
	- reactapp
		- components
		- pages
		- services

#### Pages
```shell
npm install react-router-dom@6
```
In `pages` add files `Home.tsx`  `About.tsx`

```javascript
//pages/Home.tsx
import { Heading } from "@chakra-ui/react"

export default function Home (){
    return (
        <Heading>I'm a Home page</Heading>
    )
}
```
```javascript
//pages/About.tsx
import { Heading } from "@chakra-ui/react"

export default function About (){
    return (
        <Heading>I'm a About page</Heading>
    )
}
```

We will edit `App.tsx` to make setup routing to `/Home ` and `/About`
Open `App.tsx`, we modify the app to our own content
```javascript
//App.tsx
......
//1. Add imports 
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
......
export const App = () => (
  <ChakraProvider theme={theme}>
//2. Replace inside ChakraProvider
		<BrowserRouter>
		  <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		  </Routes>
		</BrowserRouter>
  </ChakraProvider>
)
```

`npm start` to see the result, both links should work
http://localhost:3000/
http://localhost:3000/about

> Of course, we need a Navbar

In `components` add file `Navbar.tsx`

```javascript
//components/Navbar.tsx
import { Link } from "react-router-dom";
import { HStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <HStack>
      <Link to="/">
          Home
      </Link>
      <Link to="/about">
          About
      </Link>
    </HStack>
  );
}
```
```javascript
//App.tsx
......
//1. Add imports 
import Navbar from "./components/Navbar";
......
export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
//2. Place Navbar component here
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
```

> You can feel free customize the pages
> https://chakra-ui.com/docs/components/overview
> Learn more from React Router Tutorial
> https://reactrouter.com/docs/en/v6/getting-started/tutorial

#### Input Forms
> How do users talk to server?
> Input form is the most common method
```shell
npm install react-hook-form yup @hookform/resolvers @types/yup
```
In `components` add file `MyName.tsx`

```javascript
//components/MyName.tsx
import { Button, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

//Define the "shape" of this form
//name is a string
type MyNameInput = {
  name: string;
};

export default function MyName() {
//useForm help us manage to whole form    
  const { register, handleSubmit } = useForm<MyNameInput>();

  const onSubmit = (values: MyNameInput) => {
//Here we talk to server
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>My name is </FormLabel>
      <Input {...register("name")} />
      <Button type="submit" >Say hello</Button>
    </form>
  );
}
```

```javascript
//pages/Home.tsx
//1. Add import
import { Heading, Box } from "@chakra-ui/react";
import MyName from "../components/MyName";
export default function Home() {
  return (
    <Box>
//2. Place Heading and MyName in a Box
      <Heading>I'm a Home page</Heading>
      <MyName />
    </Box>
  );
}

```

------------


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
