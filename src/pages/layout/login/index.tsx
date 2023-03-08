import {useNavigate ,Link} from 'react-router-dom'
import './index.css'
function Login(){
    let go =useNavigate()
    const goHome=():void=>{
        go('/home')
    }
    return <div>
        {/* <button onClick={goHome}>home</button> */}
        <Link to='/home'>home</Link>
    </div>
}
export default Login