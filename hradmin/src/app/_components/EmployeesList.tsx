import { trpc } from "../utils/trpc";

const EmployeesList = () => {
  const { data: employees } = trpc.employee.getAll.useQuery();

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Employee List</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Manager</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.manager?.firstName}</td>
              <td>{employee.status}</td>
              <td>
                <button className="text-blue-500">Edit</button>
                <button className="text-red-500 ml-2">Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
