import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="container flex flex-col h-screen">
      <div className="p-2 flex gap-2">
        <Link className="[&.active]:font-bold" to="/">
          Home
        </Link>{' '}
        <Link className="[&.active]:font-bold" to="/about">
          About
        </Link>
        <Link className="[&.active]:font-bold" to="/login">
          Login
        </Link>
      </div>
      <hr />
      <div className="flex-1">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
})
