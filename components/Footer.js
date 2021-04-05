
export const Footer = () => {
    return (
        <footer className="py-16 px-8 lg:px-16 bg-gray-900 text-white">
            <div className="flex flex-col lg:flex-row mx-auto max-w-screen-xl justify-between">

                <div className="py-8 mx-4">
                    <img className="h-7" src="/logo-footer.png" alt="logo" />
                    <ul>
                        <li className="mt-3"><a className="flex" href="mailto:contacto@alkemy.org"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>contacto@alkemy.org </a></li>
                        <li className="mt-3"><a className="flex" href="tel:+541125936669"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg> +541125936669</a></li>
                    </ul>
                </div>
                <div className="py-8 mx-4">
                    <h4 className="text-lg font-semibold">Alkemy</h4>
                    <ul><li className="mt-3"><a href="">Empresas</a></li></ul>

                </div>
                <div className="py-8 mx-4">
                    <h4 className="text-lg font-semibold">Recursos</h4>
                    <ul>
                        <li className="mt-3"><a href="">Preguntas Frecuentes </a></li>
                        <li className="mt-3"><a href="">Contacto</a></li>
                    </ul>
                </div>
                <div className="py-8 mx-4">
                    <h4 className="text-lg font-semibold">Seguinos</h4>
                    <ul>
                        <li className="mt-3"><a href="https://www.facebook.com/Alkemy-109343017384167/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li className="mt-3"><a href="https://www.linkedin.com/company/alkemy2020/about/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                        <li className="mt-3"><a href="https://instagram.com/alkemy__?igshid=1ttbwhhfr3b8z" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}