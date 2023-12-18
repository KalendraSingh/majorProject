import "./index.css"

const Header = ()=>{
    return(
        <>
        <div className="header-bg">
            <nav>
                <h1 className="header-logo">tikcle</h1>
            </nav>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Plans
                </li>
                <li className="signup-button-bg">
                    <button className="signup-button">
                        SignUp
                    </button>
                </li>
            </ul>
        </div>
        </>
    )
}
export default Header