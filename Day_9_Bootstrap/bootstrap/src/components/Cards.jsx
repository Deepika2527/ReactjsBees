import phone from '../assets/images/phone.jpg';
import laptop from '../assets/images/laptop.jpg';
import headphones from '../assets/images/headphones.jpg';
import smartwatch from '../assets/images/smartwatch.jpg';
import airdopes from '../assets/images/airdopes.jpg';
import camera from '../assets/images/camera.jpg';

function Cards() {

    function handleAddToCart(productName) {
        alert(`${productName} added to cart`);
    }

    return (
        <>
            <h3 className="text-center mb-4">Products Section</h3>

            <div className="container border border-info p-3">
                <div className="row">

                    {/* Phone */}
                    <div className="col-md-4 mb-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img
                                src={phone}
                                className="card-img-top img-fluid"
                                alt="Phone"
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Smart Phone</h5>
                                <p className="card-text">
                                    Powerful performance, long-lasting battery,
                                    and high-quality camera for daily use.
                                </p>

                                <h6>
                                    ₹ <del>70,000</del>{" "}
                                    <span className="text-success fw-bold">60,000</span>
                                </h6>

                                <div className="text-center mt-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleAddToCart("Smart Phone")}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Airdopes */}
                    <div className="col-md-4 mb-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img
                                src={airdopes}
                                className="card-img-top img-fluid"
                                alt="Airdopes"
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Airdopes</h5>
                                <p className="card-text">
                                    Wireless earbuds with deep bass,
                                    noise isolation, and fast charging.
                                </p>

                                <h6>
                                    ₹ <del>6,000</del>{" "}
                                    <span className="text-success fw-bold">4,500</span>
                                </h6>

                                <div className="text-center mt-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleAddToCart("Airdopes")}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Camera */}
                    <div className="col-md-4 mb-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img
                                src={camera}
                                className="card-img-top img-fluid"
                                alt="Camera"
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Camera</h5>
                                <p className="card-text">
                                    High-resolution camera with optical zoom,
                                    perfect for photography lovers.
                                </p>

                                <h6>
                                    ₹ <del>55,000</del>{" "}
                                    <span className="text-success fw-bold">48,000</span>
                                </h6>

                                <div className="text-center mt-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleAddToCart("Camera")}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Laptop */}
                    <div className="col-md-4 mb-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img
                                src={laptop}
                                className="card-img-top img-fluid"
                                alt="Laptop"
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Laptop</h5>
                                <p className="card-text">
                                    Fast processor, ample storage,
                                    and ideal for work and learning.
                                </p>

                                <h6>
                                    ₹ <del>85,000</del>{" "}
                                    <span className="text-success fw-bold">75,000</span>
                                </h6>

                                <div className="text-center mt-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleAddToCart("Laptop")}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Smartwatch */}
                    <div className="col-md-4 mb-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img
                                src={smartwatch}
                                className="card-img-top img-fluid"
                                alt="Smartwatch"
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Smartwatch</h5>
                                <p className="card-text">
                                    Track fitness, monitor health,
                                    and stay connected on the go.
                                </p>

                                <h6>
                                    ₹ <del>12,000</del>{" "}
                                    <span className="text-success fw-bold">9,500</span>
                                </h6>

                                <div className="text-center mt-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleAddToCart("Smartwatch")}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Headphones */}
                    <div className="col-md-4 mb-4">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <img
                                src={headphones}
                                className="card-img-top img-fluid"
                                alt="Headphones"
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Headphones</h5>
                                <p className="card-text">
                                    Comfortable design with clear sound,
                                    perfect for music and calls.
                                </p>

                                <h6>
                                    ₹ <del>5,000</del>{" "}
                                    <span className="text-success fw-bold">3,800</span>
                                </h6>

                                <div className="text-center mt-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleAddToCart("Headphones")}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Cards;
    