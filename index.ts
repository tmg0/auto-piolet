#! /usr/bin/env node

import g from 'logitech-g29'
import { GlobalKeyboardListener } from 'node-global-key-listener'
import consola from 'consola'

const v = new GlobalKeyboardListener()

enum Keyboard {
  SPACE = 'SPACE'
}

let isRunning = false
let isLock = false

const toggle = () => {
  if (isLock) { return }

  isLock = true
  isRunning = !isRunning
  setTimeout(() => { isLock = false }, 1000)
}

v.addListener(({ name }) => {
  if (name === Keyboard.SPACE) { toggle() }
})

// g.connect()

setInterval(() => {
  if (!isRunning) {
    // g.autoCenterOn()
    // g.forceOff()
    return
  }

  consola.info('Running...')
  // g.forceConstant(-0.5, -180)
  // g.forceConstant(-0.5, 180)
}, 50)
