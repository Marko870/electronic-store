
// const SignUp = () => {
//   return (
//     <div>
//       SignUp
//     </div>
//   )
// }

// export default SignUp;

import { useState } from "react";
import { useSignupMutation } from "../features/services/ecommerceApi.js";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [signup, { isLoading, isSuccess, error }] = useSignupMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await signup(formData).unwrap();
      alert("✅ تم التسجيل بنجاح");
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">create account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="****"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isLoading ? " register loding..." : "register"}
          </button>
        </form>

        {isSuccess && (
          <p className="text-green-600 text-center mt-3"> rigester succed  🎉</p>
        )}
        {error && (
          <p className="text-red-600 text-center mt-3">
            error : {error.data?.message || "فشل التسجيل"}
          </p>
        )}
      </div>
    </div>
  );
}





export default SignUp;