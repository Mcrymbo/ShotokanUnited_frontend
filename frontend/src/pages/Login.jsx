import Header from "../components/Header"
import Login from '../components/Login'

export default function LoginPage(){
    return(
        <div className="flex flex-col min-h-screen">
            <div className="mx-auto">
                <Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                    />
                <Login />
            </div>
            
        </div>
    )
}