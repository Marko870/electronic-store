import { useState } from "react";
import supportImg from "../assets/electronic-store-support-team.png";
const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // مؤقتاً، بس console.log;
    console.log("Form submitted:", form);
    alert("تم إرسال رسالتك بنجاح ✅ (لما نوصل backend رح نخزنها)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
      <main className="flex items-center justify-center capitalize max-md:flex-col">
          <div className="">
              <img src={supportImg} alt="" />
              <div className="p-3">
                 <div>
                  <h3 className="text-gray-400">have any questions?</h3>
                  <h2 className="text-2xl font-semibold">contact us</h2>
                 </div>
                  <hr />
          <div>
                  <h3 className="text-gray-400">customer service</h3>
                  <h2 className="text-2xl">+963 938-293-8203</h2>
          </div>
                  <hr />
          <div>
              <h3 className="text-gray-400">exper advice</h3>
              <h2 className="text-2xl">+963 922-382-8203</h2>
          </div>
                  
              </div>
          </div>
        <div className="max-w-lg p-6 mt-10 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-center">اتصل بنا</h2>
          <p className="mb-6 text-center text-gray-600">
            عندك سؤال أو استفسار؟ اترك رسالتك وسنرد عليك في أقرب وقت.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="الاسم"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="البريد الإلكتروني"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="اكتب رسالتك هنا..."
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              إرسال
            </button>
          </form>
        </div>
      </main>
  );
}

export default ContactUs;