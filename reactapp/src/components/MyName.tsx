import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Hello,
  HelloApi,
  WeatherForecast,
  WeatherForecastApi,
} from "../services/api";
type MyNameInput = {
  name: string;
};
const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
});

export default function MyName() {
  const [name, setName] = useState<string>("");
  const [forcast, setForcast] = useState<WeatherForecast[]>([]);
  const [hello, setHello] = useState<Hello[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyNameInput>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: MyNameInput) => {
    setName(values.name);

    let helloApi = new HelloApi({}, "https://localhost:7257");
    helloApi.apiHelloPost(values).then((h) => {
      helloApi.apiHelloGet().then((list) => {
        setHello(list);
      });
    });

    let forecastApi = new WeatherForecastApi({}, "https://localhost:7257");
    forecastApi.getWeatherForecast({ query: {} }).then((r) => {
      setForcast(r);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel>My name is {name}</FormLabel>
        <Input {...register("name")} />
        <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit">Say hello</Button>
      <HStack>
        <Box w={"30%"}>
          <Heading>Hello</Heading>
          {hello?.map((value) => {
            return (
              <Box>
                <Text>{value.name}</Text>
              </Box>
            );
          })}
        </Box>
        <Box w={"30%"}>
          <Heading>WeatherForecast</Heading>
          {forcast?.map((value) => {
            return (
              <Box>
                <Text>{value.date?.toString()}</Text>
                <Text>{value.summary}</Text>
                <Text>{value.temperatureC}</Text>
              </Box>
            );
          })}
        </Box>
      </HStack>
    </form>
  );
}
