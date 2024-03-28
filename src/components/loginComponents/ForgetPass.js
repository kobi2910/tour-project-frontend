import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../index";

function ForgetPass() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const sendEmail = async () => {
      try {
        const res = await axios.post(BaseUrl + "account/reset_password/", {
          email,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    sendEmail();
  });

  return (
    <div>
      <h1>Forget Password</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgetPass;
