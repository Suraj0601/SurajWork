export default function Login() {
    return <>
        <form>

            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email Address" />
            </div>

            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label remember-label" htmlFor="rememberMe">
                        Remember me
                    </label>
                </div>

                <small>
                    <a href="#" className="text-small">Forgot Password?</a>
                </small>
            </div>

            <button className="btn btn-custom w-100 mt-2">Login</button>

        </form></>
}