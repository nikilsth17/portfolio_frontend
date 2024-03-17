import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { mainRoute } from './routes/mainRoute'

const router= createBrowserRouter([...mainRoute]);
const queryClient= new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
