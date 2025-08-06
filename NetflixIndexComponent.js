import "./NetflixIndexComponent.css";
import { NetflixRegisterComponent } from "./NetflixRegisterComponent";
import NetflixMainComponent from "./NetflixMainComponent";

export default function NetflixIndexComponent(){
    return(
        <div className="container-fluid">
            <div className="box">
                <section>
                    <NetflixMainComponent />
                </section>
                <NetflixRegisterComponent />
            </div>
        </div>
    )
}