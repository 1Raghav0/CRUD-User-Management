import { userSchema } from "../config/userSchema";

const UserForm = ({ formData, setFormData, onSubmit, isEditing }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">
        {isEditing ? "Update User" : "Add New User"}
      </h2>

      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
        {userSchema.map((field) => (
          <div key={field.name}>
            <label className="text-sm font-medium">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        <button
          className="md:col-span-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          {isEditing ? "Update User" : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
