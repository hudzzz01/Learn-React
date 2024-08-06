import { Link } from "react-router-dom";

function Dashboard(){

    function handleLogout(){
        localStorage.clear()
        console.log(localStorage)
    }

    return(
        <div>
            <p className="text-3xl text-slate-700">Selamat datang</p>
            <Link to="/login" onClick={handleLogout}> Logout </Link>
        </div>
    )
}

export default Dashboard;