
export default function Navbar() {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="dropdown">
          <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a id="menuItem">About</a></li>
            <li><a id="menuItem2">Blog</a></li>
            <li><a id="menuItem3">FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-start">
          <img src="./src/logo/logo1.png" alt="Logo" className="w-20 h-16"/>
            <span className="text-2xl font-bold">BookHouse</span>

          </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a id="menuItem">About</a></li>
            <li><a id="menuItem2">Blog</a></li>
            <li><a id="menuItem3">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end">
        <button className="btn btn-sm btn-glass btn-outline">Buy Book</button> &nbsp; &nbsp;
        <button className="btn btn-sm btn-glass btn-outline">Sign In</button>
        </div>
      </div>
    </header>
  )
}

