import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../../../store/actions";
import { changePassword } from "../../../store/services/authService";
// import { changePasswordAction } from "../../../store/asyncFunctions/auth";
import { WithLoading } from "../../ui-components/with-loading";

export function ChangePasswordPage() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.authReducer.isLoading);
  const token = useSelector((state: any) => state.authReducer.token);

  async function changePasswordOperation() {
    try {
      const result = await changePassword({
        password,
        newPassword,
        newPasswordConfirm,
        token,
      });
      if (result === "ok") {
        dispatch({ type: ACTIONS.CHANGE_PASSWORD.CLEAR });
        navigate("/login");
      }
    } catch (ex) {}
  }

  return (
    <div className="login-form">
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Change Password</h3>
                <WithLoading isLoading={isLoading}>
                  <form className="requires-validation">
                    <div className="col-md-12">
                      <input
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Current Password"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                        }}
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="New Password"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        value={newPasswordConfirm}
                        onChange={(e) => {
                          setNewPasswordConfirm(e.target.value);
                        }}
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Confirm New password"
                        required
                      />
                    </div>
                    <div className="col-md-12 mt-3">
                      <div className="form-button mt-3">
                        <button
                          onClick={changePasswordOperation}
                          id="submit"
                          type="button"
                          className="btn btn-primary"
                        >
                          Change Password
                        </button>
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
  );
}
