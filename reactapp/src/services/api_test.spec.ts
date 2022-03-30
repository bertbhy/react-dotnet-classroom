/**
 * classroom
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("HelloApi", () => {
  let instance: api.HelloApi
  beforeEach(function() {
    instance = new api.HelloApi(config)
  });

  test("apiHelloGet", () => {
    return expect(instance.apiHelloGet({})).resolves.toBe(null)
  })
  test("apiHelloIdDelete", () => {
    const id: number = 56
    return expect(instance.apiHelloIdDelete(id, {})).resolves.toBe(null)
  })
  test("apiHelloIdGet", () => {
    const id: number = 56
    return expect(instance.apiHelloIdGet(id, {})).resolves.toBe(null)
  })
  test("apiHelloIdPut", () => {
    const id: number = 56
    const body: api.Hello = undefined
    return expect(instance.apiHelloIdPut(id, body, {})).resolves.toBe(null)
  })
  test("apiHelloPost", () => {
    const body: api.Hello = undefined
    return expect(instance.apiHelloPost(body, {})).resolves.toBe(null)
  })
})

describe("WeatherForecastApi", () => {
  let instance: api.WeatherForecastApi
  beforeEach(function() {
    instance = new api.WeatherForecastApi(config)
  });

  test("getWeatherForecast", () => {
    return expect(instance.getWeatherForecast({})).resolves.toBe(null)
  })
})
