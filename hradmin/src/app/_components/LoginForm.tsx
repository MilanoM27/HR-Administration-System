import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <input
        {...register("username")}
        placeholder="Username"
        className="border p-2 mb-4 rounded"
      />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="border p-2 mb-4 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
