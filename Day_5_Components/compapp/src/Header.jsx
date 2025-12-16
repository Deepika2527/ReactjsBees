import logo from './assets/logo.jpg';
function Header(){
    return(
        <>
        <nav style={{display:'flex', alignItems:'center', gap:'10px', backgroundColor:'lightgrey'}}>
            <img src={logo} alt="" width="80" height="80"/>

            <ul style={{listStyle:'none', display:'flex', gap:'90px'}}>
                <li>Home</li>
                <li>Course</li>
                <li>About us</li>
                <li>Placements</li>
                <li>Internship</li>
                <li>Reviews</li>
            </ul>
        </nav>
        
        
        
        </>
    )
}

export default Header