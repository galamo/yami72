import { useState } from "react"
import { useSelector } from "react-redux"
import { loginAction } from "../../../store/asyncFunctions/auth"
import { WithLoading } from "../../ui-components/with-loading"



export function LoginPage() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const isLoading = useSelector((state: any) => state.authReducer.isLoading)

    async function login() {
        loginAction({ userName, password })
    }

    return (
        <div className="login-form">
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Login</h3>
                                <p>Fill in the data below.</p>
                                <WithLoading isLoading={isLoading}>
                                    <form className="requires-validation">
                                        <div className="col-md-12">
                                            <input value={userName} onChange={(e) => { setUserName(e.target.value) }} className="form-control" type="text" name="name" placeholder="Full Name" required />
                                            <div className="valid-feedback">Username field is valid!</div>
                                            <div className="invalid-feedback">Username field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" type="password" name="password" placeholder="Password" required />
                                            <div className="valid-feedback">Password field is valid!</div>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="form-button mt-3">
                                                <button onClick={login} id="submit" type="button" className="btn btn-primary">Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </WithLoading>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}