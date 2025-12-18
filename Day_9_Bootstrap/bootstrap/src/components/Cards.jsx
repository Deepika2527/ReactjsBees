import phone from '../assets/images/phone.jpg';
function Cards() {
    return (
        <>
            <h3 className="text-center">Products section</h3>

            <div className="container border border-info">

                <div className="row">
                    {/* card1 */}
                    <div className="col-md-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img src={phone} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Prodcut Detail</p>
                                <p></p>
                                <a href="#" className="btn btn-primary">Add to card</a>
                            </div>
                        </div>


                    </div>

                    {/* card 2 */}

                    <div className="col-md-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img src={phone} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Prodcut Detail</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>


                    </div>
                    {/* card 3 */}
                    <div className="col-md-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img src={phone} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Prodcut Detail</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>


                    </div>
                    {/* card 4 */}
                    <div className="col-md-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img src={phone} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Prodcut Detail</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>


                    </div>
                    {/* card 5 */}
                    <div className="col-md-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img src={phone}className="card-img-top" alt="mobile" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Prodcut Detail</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>


                    </div>
                    {/* card 6 */}
                    <div className="col-md-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img src={phone} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Prodcut Detail</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>


                    </div>
                    {/* card 7 */}
                    <div className="col-md-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img src={phone} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Prodcut Detail</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>


                    </div>
                    {/* card 8*/}
                    <div className="col-md-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img src={phone}className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Prodcut Detail</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>


                    </div>
                    {/* card 9 */}
                    <div className="col-md-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img src={phone}className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Prodcut Detail</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>


                    </div>



                </div>
            </div>



        </>
    )
}

export default Cards