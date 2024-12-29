import { useRoutes } from 'react-router-dom'
import Home from '../home/Home'
import About from '../pages/About'
import Layout from '../layout/Layout'

const Routers = () => {
    return (
        <>
            {
                useRoutes([
                    {
                        path: '/',
                        element: <Layout />,
                        children: [
                            {
                                path: '/',
                                element: <Home />
                            },
                            {
                                path: '/about',
                                element: <About />
                            },
                            {
                                path: '/detail',
                                element: <div className='flex justify-center mt-20 font-bold text-5xl text-blue-500'>detail</div>
                            },
                            {
                                path: '*',
                                element: <div className='flex justify-center mt-20 font-bold text-5xl text-red-500'>404</div>
                            }
                        ]
                    },
                ])
            }
        </>
    )
}

export default Routers