export function NetflixRegisterComponent(){
    return(
        <div className="text-white p-3 text-center">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className="input-group input-group-lg">
                <input type="text" className="form-control " placeholder="Email Address"/>
                <button type="button" className="btn btn-danger">
                    Get Started
                    <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
    )
}