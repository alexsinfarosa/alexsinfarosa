import { LoaderFunction } from 'remix'

export const loader: LoaderFunction = ({ request, context }) => {
  return { request, context }
}
export default function Index() {
  // const data = useLoaderData()
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-semibold text-blue-600">Welcome!</h1>
      <p className="mt-2 font-medium text-gray-500">
        Site is under development...😄
      </p>
    </div>
  )
}
