// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

// ============= Your Code Here =============
type LengthOfString<S extends string> = LengthOfStringCore<S>

type LengthOfStringCore<S extends string, C extends readonly 1[] = []> =
S extends `${infer _}${infer Rest}`
  ? LengthOfStringCore<Rest, [...C, 1]>
  : C['length']
