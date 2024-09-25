export default function Banner() {
  return (
    <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
            <div class="hero bg-base-200 min-h-fit">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="./src/book-images/book-img1.jpg" class="w-60 h-80 max-h-xs rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold text-center">Unlock a World of
                            Stories – Find Your Next Favorite Book at BookHouse</h1>
                        <button class="btn btn-sm btn-glass btn-outline">Buy Book</button>
                    </div>
                </div>
            </div>
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" class="btn btn-circle">❮</a>
                <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
        <div class="hero bg-base-200 min-h-fit">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="./src/book-images/book-img2.jpg" class="w-60 h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold text-center">Unlock a World of
                            Stories – Find Your Next Favorite Book at BookHouse</h1>
                        <button class="btn btn-sm btn-glass btn-outline">Buy Book</button>
                    </div>
                </div>
            </div>
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
        <div class="hero bg-base-200 min-h-fit">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="./src/book-images/book-img3.jpg" class="w-60 h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold text-center">Unlock a World of
                            Stories – Find Your Next Favorite Book at BookHouse</h1>
                        <button class="btn btn-sm btn-glass btn-outline">Buy Book</button>
                    </div>
                </div>
            </div>
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
        <div class="hero bg-base-200 min-h-fit">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="./src/book-images/book-img4.png" class="w-60 h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold text-center">Unlock a World of
                            Stories – Find Your Next Favorite Book at BookHouse</h1>
                        <button class="btn btn-sm btn-glass btn-outline">Buy Book</button>
                    </div>
                </div>
            </div>
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
  )
}
