
export const Hero = () => {
    return (
        <section
            className="hero d-flex flex-column justify-content-between p-4 position-relative"
            style={{ backgroundImage: "url('images/bg.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}
        >

            <div className="container d-flex d-md-none justify-content-between">
                <button className="border-0 bg-transparent"><img src="/images/icons/arrow.svg" alt="arrow" /></button>
                <button className="border border-white rounded-2 fw-bolder bg-transparent text-white p-2">Join Group</button>
            </div>
            <div className="text-white position-absolute bottom-0 m-5">
                <h1>Computer Engineering</h1>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </section>
    )
}