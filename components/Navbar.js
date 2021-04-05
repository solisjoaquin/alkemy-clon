export const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-16 lg:mx-8">
            <div className="flex-shrink-0"><a href="/"><img className="h-7 ml-8" src="/logo-header.png" alt="logo" /></a></div>
            <div className="mx-4 flex items-center">
                <a href="/">Home</a>
                <div className="rounded-lg bg-blue-700 px-4 mx-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-cyan-500"><a href="/">Aplica</a></div>
            </div>
        </div>
    )
}