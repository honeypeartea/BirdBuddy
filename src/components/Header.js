function Header({ dispatch }) {
    return (
        <header onClick={() => dispatch({ type: "restart" })} className="app-header">
            <h1>BirdBuddy</h1>
        </header>
    );
}

export default Header;
