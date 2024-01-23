import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full bg-gray-900 text-white grid grid-cols-3 p-5'>

                    <div className='grid items-center place-items-start'>
                        <Link to='/home' className="text-2xl font-bold hover:text-blue-300 place-items-start">Zabo Games</Link>
                    </div>
                    
                    <div>
                        <form>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
                            <div className="relative">
                                
                                {/* Icone Lupa Pesquisa */}
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> 
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>

                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ache seu jogo preferido..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                    </div>

                    <div className='grid place-items-end items-center'>
                        <Link to='' className="hover:text-blue-300 font-bold">Carrinho</Link>
                    </div>

            </div>
        </>
    )
}

export default Navbar