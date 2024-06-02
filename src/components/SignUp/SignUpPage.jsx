import "./SignUp.css";
export default function SignUpPage() {
  return (
    <>
      <div className="wrapper">
        <div className="container-signup">
          <div className="modal">
            <div className="modal__block">
              <a href="#" className="modal__logo">
                <img src="./img/logo.svg" alt="" />
              </a>
              <div className="modal__ttl">
                <h2>Sign up</h2>
              </div>
              <form className="modal__form-login" id="formLogUp" action="#">
                <input
                  className="modal__input first-name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Firstname"
                />
                <input
                  className="modal__input login"
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Email"
                />
                <input
                  className="modal__input password-first"
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Password"
                />
                <button
                  className="modal__btn-signup-ent _hover01"
                  id="SignUpEnter"
                >
                  <a href="../main.html">Join us</a>{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
