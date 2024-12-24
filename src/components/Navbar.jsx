

export const Navbar = ({handleShow}) => {
    return (
        <nav className="d-none d-md-flex justify-content-around p-3">
            <img src="/images/atg.svg" alt="ATG logo" />
            <div className="d-flex">
                <button className="border-0 custom-search-btn"><img src="/images/icons/search.svg" alt="search" /></button>
                <input className="bg-light-gray border-0 outline-none custom-search" placeholder="Search for your favorite groups in ATG"/>
            </div>
            <button className="border-0 bg-transparent text-dark fw-semibold" onClick={handleShow}>Create account. <span className="text-royal-blue">It's free! </span><img src="images/icons/down.svg" alt="down" /></button>
        </nav>
    )
}