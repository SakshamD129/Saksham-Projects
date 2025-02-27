function Header() {
    const hello = {
        border: '2px solid black',
    }
    return (
        <header style={hello}>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}
export default Header