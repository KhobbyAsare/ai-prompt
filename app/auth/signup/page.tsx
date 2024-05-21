import React from "react";
import "./style.css";
import Link from "next/link";

const Signup = () => {
  return (
    <section className="w-full ">
      <div className="md:w-[80%] w-[90%] mx-auto pt-[4rem]">
        <div className="w-[40%]">
          <h2 className="font-bold text-[38px] text-[#006b80]">Sign Up</h2>
          <p>
            Create a new account to be able to access all your prompt, in order
            to create, edite and delete.
          </p>
          <form>
            <div>
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">
                Password <span className="text-red-500">*</span>
              </label>
              <input type="password" name="password" id="password" />
            </div>
            <div>
              <label htmlFor="confirmPassword">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
            </div>
            <div className="btn">
              <button>Submit</button>
            </div>
            <div>
              <p>
                {" "}
                Have an account{" "}
                <Link
                  href="/auth/login"
                  className="text-[14px] text-[#006b80] underline"
                >
                  Sign-In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
