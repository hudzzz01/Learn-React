import { Navigate, Outlet } from "react-router-dom";
import { CekTokenApi } from "../../api/api";
import { useEffect, useState } from "react";


function ProtectedRoute(){

    const [validate,SetValidate] = useState(null);

    useEffect(()=>{
        async function cekToken(){

            const data = {
                token : localStorage.token,
            }

            const cekToken = await CekTokenApi(data);

            console.log(cekToken.status)
            
            if(cekToken.status == 'ok'){
                SetValidate(true);
            }else{
                SetValidate(false);
            }
        
        }

        cekToken();
    },[])

    if(validate == null){
        return <div> loading verifikasi </div>
    }

    // console.log(localStorage,validate)

    return validate ? <Outlet/> : <Navigate to="/hahhaa"/>
}

export default ProtectedRoute;