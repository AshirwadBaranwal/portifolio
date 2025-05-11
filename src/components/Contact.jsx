"use client";
import { useForm } from "react-hook-form";
import HeaderComp from "./HeaderComp";
import { MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from "sonner";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast("✅ Message sent successfully!");
        reset(); // clear form
      } else {
        toast("❌ Failed to send message: " + result.error);
      }
    } catch (err) {
      toast("❌ Failed to send message.");
      console.error(err);
    }
  };

  return (
    <div className="w-full px-5 md:px-12 pb-15 text-white">
      <HeaderComp text="CONTACT ME" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div className="space-y-6 text-gray-300">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <MdOutlineMail />
              <p className="font-semibold">ashirwadkumar77566work@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlinePhoneInTalk />
              <p>+91 8252261062</p>
            </div>
            <div className="flex items-center gap-4">
              <IoLocationOutline />
              <p>Bettiah, Bihar</p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-300 text-black px-4 py-3 rounded-lg outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-300 text-black px-4 py-3 rounded-lg outline-none"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full bg-gray-300 text-black px-4 py-3 rounded-lg outline-none resize-none"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gray-200 text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition float-right"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
