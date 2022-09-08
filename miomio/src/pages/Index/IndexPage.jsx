import './IndexPage.css';

export default function IndexPage()
{
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <span className='logo'>MioMio</span>
                    <a href="#" className="cart-button">Carrito</a>
                </div>
            </nav>

            <main>

                <div className="search-box-wrapper">
                    <input type="text" placeholder='Tu busqueda...' className="search-box" />
                </div>

                <div className="list-wrapper">
                    <section className="list">
                        <a href='#' className="list-item">
                            <img src="Fotos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg" />
                            <div className="list-item-box">
                                <span>Hola</span>
                            </div>
                        </a>

                        <a href='#' className="list-item">
                            <img src="Fotos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg" />
                            <div className="list-item-box">
                                <span>Hola</span>
                            </div>
                        </a>

                        <a href='#' className="list-item">
                            <img src="Fotos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg" />
                            <div className="list-item-box">
                                <span>Hola</span>
                            </div>
                        </a>
                    </section>

                </div>

            </main>
        </div>
    );
}