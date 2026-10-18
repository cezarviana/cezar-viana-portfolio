import 'typewriter-effect'

declare module 'typewriter-effect' {
  interface Options {
    autoStart: boolean,
    loop: boolean,
    pauseFor?: number
  }
}
