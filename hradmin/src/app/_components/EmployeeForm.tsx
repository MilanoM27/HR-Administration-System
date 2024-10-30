import { z } from "zod";

const employeeSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  managerId: z.number().optional(),
  status: z.enum(["Active", "Inactive"]),
});
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeSchema } from "../utils/validationSchemas";

const EmployeeForm = ({ onSubmit, employee }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues: employee || {},
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="mb-4">
        <label>First Name</label>
        <input {...register("firstName")} className="border p-2 w-full" />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      <div className="mb-4">
        <label>Last Name</label>
        <input {...register("lastName")} className="border p-2 w-full" />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>
      <div className="mb-4">
        <label>Email</label>
        <input {...register("email")} type="email" className="border p-2 w-full" />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="mb-4">
        <label>Phone</label>
        <input {...register("phone")} className="border p-2 w-full" />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <div className="mb-4">
        <label>Status</label>
        <select {...register("status")} className="border p-2 w-full">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;
