import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { getUsers, createUser, updateUser, deleteUser } from "./api/api";

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  const refreshUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await updateUser(editId, formData);
    } else {
      await createUser(formData);
    }

    setFormData({});
    setEditId(null);
    refreshUsers();
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    refreshUsers();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">
          User Management System
        </h1>

        <UserForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          isEditing={!!editId}
        />

        <UserTable
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
