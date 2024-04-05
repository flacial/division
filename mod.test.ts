import { assertEquals } from 'std/assert/mod.ts'
import { division } from './mod.ts'

Deno.test('Should divide two numbers', () => {
  assertEquals(division(10, 2), 5)
})

Deno.test('Should divide two numbers with decimal', () => {
  assertEquals(division(10.5, 2), 5.25)
})

Deno.test('Should divide negative numbers', () => {
  assertEquals(division(-10, 2), -5)
})

Deno.test('Should divide negative numbers with decimal', () => {
  assertEquals(division(-10.5, 2), -5.25)
})

Deno.test('Should divide zero', () => {
  assertEquals(division(0, 2), 0)
})

Deno.test('Should divide zero with decimal', () => {
  assertEquals(division(0.5, 2), 0.25)
})

Deno.test('Should divide negative zero', () => {
  assertEquals(division(-0, 2), 0)
})

Deno.test('Should divide negative zero with decimal', () => {
  assertEquals(division(-0.5, 2), -0.25)
})

Deno.test('Should return Infinity when divide by zero', () => {
  assertEquals(division(10, 0), Infinity)
})
