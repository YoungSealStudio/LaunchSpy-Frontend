/**
 * React18 Suspense for Promise
 * https://maxkim-j.github.io/posts/suspense-argibraic-effect/
 */
export function suspensifyPromise<T>(promise: Promise<T>) {
  type State =
    | {
        _t: 'pending'
      }
    | {
        _t: 'rejected'
        result: Error
      }
    | {
        _t: 'resolved'
        result: T
      }

  let state: State = {
    _t: 'pending',
  }

  const suspender = promise.then(
    (r) => {
      state = {
        _t: 'resolved',
        result: r,
      }
    },
    (e) => {
      state = {
        _t: 'rejected',
        result: e,
      }
    }
  )

  return {
    read() {
      switch (state._t) {
        case 'pending':
          throw suspender
        case 'rejected':
          throw state.result
        case 'resolved':
          return state.result
      }
    },
  }
}
