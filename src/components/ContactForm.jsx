import { useForm } from "react-hook-form";
import { CiChat1 } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";


export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        backgroundColor: "#1a1a1a",
        padding: "30px",
        borderRadius: "10px",
        color: "#fff",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "start",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "flex-start",
        }} className="pb-4 text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-900 bg-clip-text text-transparent"
      >
      <span className="text-cyan-400">
         <CiChat1 />
      </span>
 Send us a Message
      </h2>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 300px" }}>
          <label className="flex mb-1 text-sm font-medium">Full Name</label>
          <input
            {...register("fullName", { required: true })}
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2a2a2a",
              border: "1px solid #444",
              borderRadius: "5px",
              color: "#fff",
              outline: "none",
            }}
          />
          {errors.fullName && (
            <span style={{ color: "#ff4444", fontSize: "12px" }}>This field is required</span>
          )}
        </div>

        <div style={{ flex: "1 1 300px" }}>
          <label className="mb-1 text-sm font-medium flex">Email Address</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="you@example.com"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2a2a2a",
              border: "1px solid #444",
              borderRadius: "5px",
              color: "#fff",
              outline: "none",
            }}
          />
          {errors.email && (
            <span style={{ color: "#ff4444", fontSize: "12px" }}>This field is required</span>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label className="mb-1 text-sm font-medium flex">Company (Optional)</label>
        <input
          {...register("company")}
          placeholder="Your Company Name"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2a2a2a",
            border: "1px solid #444",
            borderRadius: "5px",
            color: "#fff",
            outline: "none",
          }}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <label className="mb-1 text-sm font-medium flex">Message</label>
        <textarea
          {...register("message", { required: true })}
          placeholder="Tell us about your project..."
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2a2a2a",
            border: "1px solid #444",
            borderRadius: "5px",
            color: "#fff",
            outline: "none",
            minHeight: "120px",
          }}
        />
        {errors.message && (
          <span style={{ color: "#ff4444", fontSize: "12px" }}>This field is required</span>
        )}
      </div>

      <button
        type="submit"
       
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(161, 46, 255, 0.5)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(161, 46, 255, 0.3)";
        }} className="py-2 px-4  transform hover:scale-105  rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600  text-white font-semibold shadow-md transition-all duration-300"
      >
        Send Message <IoMdSend className="inline-block ml-2" />
      </button>
    </form>
  );
}
