// index.html에 <script src="https://accounts.google.com/gsi/client" async defer onload="console.log('TODO: add onload function');window.gsiLoaded=true"></script> 필요.

import { suspensifyPromise } from '../lib/suspensifyPromise'

// onLoad시에  window.google 로 설정된다.
function getGsiClient() {
  return new Promise<typeof window.google>((resolve) => {
    if (window.google) {
      resolve(window.google)
    }
  })
}

export const makeGsiClientResource = () => suspensifyPromise(getGsiClient())
