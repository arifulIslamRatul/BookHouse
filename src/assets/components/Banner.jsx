export default function Banner() {
  return (
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <div className="hero bg-base-200 bg-[url('/src/book-images/banner2.jpg')] min-h-fit bg-opacity-70">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="./src/book-images/book-img1.jpg" className="w-60 h-80 max-h-xs rounded-lg shadow-2xl" />
                    <div className="container mx-auto items-center">
                        <h1 className="text-4xl font-bold text-center">Unlock a World of
                            Stories – Find Your Next Favorite Book at BookHouse</h1>
                        <button className="btn btn-sm btn-glass btn-outline">Buy Book</button>         
                    </div>
                </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="hero bg-base-200 bg-[url('/src/book-images/banner2.jpg')] min-h-fit bg-opacity-70">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="./src/book-images/book-img2.jpg" className="w-60 h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold text-center">Unlock a World of
                            Stories – Find Your Next Favorite Book at BookHouse</h1>
                        <button className="btn btn-sm btn-glass btn-outline">Buy Book</button>
                    </div>
                </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="hero bg-base-200 bg-[url('/src/book-images/banner2.jpg')] min-h-fit bg-opacity-70">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="./src/book-images/book-img3.jpg" className="w-60 h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold text-center">Unlock a World of
                            Stories – Find Your Next Favorite Book at BookHouse</h1>
                        <button className="btn btn-sm btn-glass btn-outline">Buy Book</button>
                    </div>
                </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="hero bg-base-200 bg-[url('/src/book-images/banner2.jpg')] min-h-fit bg-opacity-70">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="./src/book-images/book-img4.png" className="w-60 h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold text-center">Unlock a World of
                            Stories – Find Your Next Favorite Book at BookHouse</h1>
                        <button className="btn btn-sm btn-glass btn-outline">Buy Book</button>
                    </div>
                </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
  )
}
