// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]

// ============= Your Code Here =============

type Without<T extends readonly unknown[], U> =
  U extends readonly unknown[]
    ? RemoveAll<T, U>
    : Remove<T, U>

type Remove<T extends readonly unknown[], U> =
  T extends [infer First, ...infer Rest]
    ? Equal<First, U> extends true ? Remove<Rest, U> : [First, ...Remove<Rest, U>]
    : []

type RemoveAll<T extends readonly unknown[], U extends readonly unknown[]> =
  U extends [infer First, ...infer Rest]
    ? RemoveAll<Remove<T, First>, Rest>
    : T
