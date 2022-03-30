### Internal Training
- [Environment Setup](#environment-setup)
- [Classroom Project](#classroom-project)
- [Level 1: Create React App](#level-1--create-react-app)
  * [Folder Setup](#folder-setup)
  * [Pages](#pages)
  * [Input Forms](#input-forms)
  * [State](#state)
  * [Validation](#validation)
- [Level 2: Web Interface](#level-2--web-interface)
  * [New dotnet core API](#new-dotnet-core-api)
  * [Swagger Code Gen](#swagger-code-gen)
  * [Exercise: display api data](#exercise--display-api-data)
- [Level 3: Database Interface](#level-3--database-interface)
  * [Swagger Code Gen, again](#swagger-code-gen--again)
  * [Exercise: Say Hello to server](#exercise--say-hello-to-server)

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


### Classroom Project
1. New a folder `classroom`
2. Open with Visual Studio Code

This is beginning of every project.

------------


### Level 1: Create React App
Open new Terminal <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`(Back Quote)</kbd>
Run this at Terminal in `classroom` folder
```shell
npx create-react-app reactapp --template @chakra-ui/typescript
npm install react-scripts@4.0.3
```
Wait a few minutes to create new React apps with TypeScript and Chakra UI
Your react app is located at  `cd reactapp`

Let&apos;s try `npm start`
You will see the Learn Chakra page at: 
http://localhost:3000/

> <kbd>Ctrl</kbd> + <kbd>C</kbd> in Terminal to stop running

Happy coding!!
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

We will edit `App.tsx` to make routing to `/Home ` and `/About`
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
{/* 2. Replace inside ChakraProvider */}
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
{/* 2. Place Navbar component here */}
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

https://chakra-ui.com/docs/components/overview

> Learn more from React Router Tutorial

https://reactrouter.com/docs/en/v6/getting-started/tutorial

#### Input Forms
> How do users talk to server?


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
{/* 2. Place Heading and MyName in a Box */}
      <Heading>I'm a Home page</Heading>
      <MyName />
    </Box>
  );
}

```

#### State
The `state` is where you store property values that belongs to the component.
When `state` changes, the component re-renders.

Go back to `MyName.tsx`, we learn about how to update state

```javascript
//components/MyName.tsx
import { Button, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
//1. Add imports
import { useState } from "react"

type MyNameInput = {
  name: string;
};

export default function MyName() {
//2. Add state to this component
  const [name, setName] = useState<string>("");
  const { register, handleSubmit } = useForm<MyNameInput>();

  const onSubmit = (values: MyNameInput) => {
//3. Set state value during submit
    setName(values.name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
{/* 4. Display state value */}
      <FormLabel>My name is {name}</FormLabel>
      <Input {...register("name")} />
      <Button type="submit" >Say hello</Button>
    </form>
  );
}
```

#### Validation

> An input form is not complete without validation


```javascript
//components/MyName.tsx
import { Button, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react"
//1. Add imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";

type MyNameInput = {
  name: string;
};

//2. Add validation shape
//For example: name is required and 3-20 letters only 
const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required()
});

export default function MyName() {
  const [name, setName] = useState<string>("");
//3. Hook validation to useForm
  const { register, handleSubmit,
    formState: { errors }
  } = useForm<MyNameInput>({
    mode: "onSubmit",
    resolver: yupResolver(schema)
  });

  const onSubmit = (values: MyNameInput) => {
    setName(values.name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
{/* 4. Display validation message */}
      <FormControl isInvalid={!!errors.name}>
        <FormLabel>My name is {name}</FormLabel>
        <Input {...register("name")} />
        <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit" >Say hello</Button>
    </form>
  );
}
```

> That&apos;s it for now. We learn how to setup the server side in the next section 

------------
### Level 2: Web Interface

> The simpliest way to explain our architecture

|  Browser |   | Server   |  | Database|
| ------------ | ------------ | ------------ | ------------ |
| ReactJS  |  <-Web API->   | Dotnet  | <-EF->  | SQL   |



#### New dotnet core API
Open new Terminal <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\`(Back Quote)</kbd>
Run this at Terminal in `classroom` folder
```shell
dotnet new webapi -n classroom -o dotnet
```
Your web api is located at `cd dotnet`
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

`GetWeatherForecast` will give you some weather information
```json
  {
    "date": "2022-03-30T14:29:39.4185879+08:00",
    "temperatureC": 32,
    "temperatureF": 89,
    "summary": "Warm"
  },
```
Open Program.cs, add a line to allow cross origin for testing
```csharp
//Add this line before app.UseAuthorization();
app.UseCors(b => b.AllowAnyHeader().AllowAnyMethod().AllowCredentials().SetIsOriginAllowed(_ => true));
app.UseAuthorization();
```

> But..... for now, react app & web api are not talking to each other

#### Swagger Code Gen
- Download [swagger-codegen-cli](https://mvnrepository.com/artifact/io.swagger.codegen.v3/swagger-codegen-cli "swagger-codegen-cli")
    You can save as to this location `C:\Java\swagger-codegen-cli.jar`
- ```shell
npm install isomorphic-fetch
```
- /reactapp/src/services/
	- typescript-fetch (Download from [swagger-codegen-generators](https://github.com/swagger-api/swagger-codegen-generators/tree/master/src/main/resources/handlebars "swagger-codegen-generators"))
	- swagger.json (Download from https://localhost:7129/swagger/v1/swagger.json)

> You can modify template files inside typescript-fetch

Here is the script to use Swagger Code Gen
```shell
java -jar C:/java/swagger-codegen-cli.jar generate -i ./src/services/swagger.json -o ./src/services -t ./src/services/typescript-fetch -l typescript-fetch -DsupportsES6=true
```
- /reactapp/src/services/
	- api.ts is created by Swagger. Run code gen **everytime** your web api is updated.

> Nexct, we can show weather information in MyName

```javascript
//MyName.tsx
......
//1. Add imports
import { WeatherForecastApi } from "../services/api"
......
  const onSubmit = (values: MyNameInput) => {
    setName(values.name);
//2. Calling web api  
    let api = new WeatherForecastApi({}, "https://localhost:7257")
    api.getWeatherForecast().then(w => {
//3. We will do something with the data
      console.log(w);
    })
  };
......
```
> Look at <kbd>F12</kbd> console in Chrome to view ` console.log(w);` result

#### Exercise: display api data

> Modify MyName.tsx to show weather forcast below Say hello

```javascript
  const [forcast, setForcast] = useState<WeatherForecast[]>();
```
```javascript
  setForcast(r);
```
```javascript
      {forcast?.map(value => {
        return (
        <Box>
          <Text>{value.date?.toString()}</Text>
          <Text>{value.summary}</Text>
          <Text>{value.temperatureC}</Text>
        </Box>
        )})
      }
```

### Level 3: Database Interface

> Roundtrip from React to SQL

|  Browser |   | Server   |  | Database|
| ------------ | ------------ | ------------ | ------------ |
| ReactJS  |  <-Web API->   | Dotnet  | <-EF->  | SQL   |

- You need 
	- `dotnet tool install --global dotnet-ef`
	- `dotnet tool install -g dotnet-aspnet-codegenerator`
	
```shell
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.InMemory
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
```
```csharp
//Program.cs
global using Microsoft.EntityFrameworkCore;
......
var builder = WebApplication.CreateBuilder(args);
// Add database service after builder.
builder.Services.AddDbContext<classroom.HelloContext>(w => w.UseInMemoryDatabase("hello"));
......
```
```csharp
//HelloContext.cs
namespace classroom
{
    public class HelloContext : DbContext
    {
        public HelloContext(DbContextOptions<HelloContext> options)
            : base(options) { }

        public DbSet<Hello> Hellos { get; set; }
    }

    public class Hello
    {
        public int Id { get; set; }
        public string? Name { get; set; }
    }
}
```
> It is time to code-gen our first api controller

```shell
dotnet-aspnet-codegenerator controller -name HelloController -async -api -m Hello -dc HelloContext -outDir Controllers
```

`dotnet run`  and take a look at https://localhost:7257/swagger/index.html
We have a brand new Hello interface ` Get / Post / Put / Delete`

> Keep it running, we are going to update the React part

#### Swagger Code Gen, again
- /reactapp/src/services/
	- swagger.json (Download from https://localhost:7129/swagger/v1/swagger.json)

```shell
java -jar C:/java/swagger-codegen-cli.jar generate -i ./src/services/swagger.json -o ./src/services -t ./src/services/typescript-fetch -l typescript-fetch -DsupportsES6=true
```

#### Exercise: Say Hello to server
Modify `MyName.tsx` to complete following requirement
1. onSubmit will `post` your name 
2. `get` all the names from api 
3. Display a list of `Hello[ ]`




