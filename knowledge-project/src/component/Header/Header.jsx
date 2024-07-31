import Link from "../Link/Link";

const Header = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/blog", name: "Blog" },
        { id: 4, path: "/blog/:id", name: "Blog Detail" },
        { id: 5, path: "/contact", name: "Contact" }
      ];
    return (
        <nav>
            <ul className="md:flex">
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Header;