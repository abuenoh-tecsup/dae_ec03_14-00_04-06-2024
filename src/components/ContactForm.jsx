import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    toast.success("Mensaje enviado correctamente!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          {...register("name", { required: "Nombre es requerido" })}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          {...register("email", {
            required: "Email es requerido",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Mensaje
        </label>
        <textarea
          id="message"
          rows="4"
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
          {...register("message", { required: "Mensaje es requerido" })}
        ></textarea>
        {errors.message && (
          <div className="invalid-feedback">{errors.message.message}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}
