import './globals.css'

import { RouterProvider, createRouter } from '@tanstack/react-router'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Toaster } from './components/ui/toaster'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
      <Toaster />
    </StrictMode>
  )
}
