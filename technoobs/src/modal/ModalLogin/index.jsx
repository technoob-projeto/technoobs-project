import { useState } from "react"
import { Container } from "./styles"

export const ModalLogin = ({closeModal, modalLogin}) => {

    return(
        <Container>
            <div className={`${modalLogin} div__principal`}>
                <div>
                    <button onClick={closeModal} className="remove__modal">x</button>
                    <h2>LOGIN</h2>
                    <section className="inputs">
                        <label>Username</label>
                        <input />
                        <label>Password</label>
                        <input />
                    </section>
                    <section className="checkboxs">
                        <span>
                            <input type="checkbox" />
                            <label>LOGIN AS DEV</label>
                        </span>
                        <span>
                            <input type="checkbox" />
                            <label>LOGIN AS COMPANY</label>
                        </span>
                    </section>
                    <button>Login</button>

                </div>
            </div>
        </Container>
    )
}