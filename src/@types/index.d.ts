import * as React from 'react'

declare global {
  namespace JSX {
      interface IntrinisicElements {
          'about-me': { me: string }
      }
  }
}