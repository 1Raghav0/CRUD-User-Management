import { userSchema } from "../config/userSchema";
import { Pencil, Trash2 } from "lucide-react";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow mt-8 overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {userSchema.map((f) => (
              <th key={f.name} className="p-3 text-left text-sm font-semibold">
                {f.label}
              </th>
            ))}
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={userSchema.length + 1} className="text-center py-6">
                No users found
              </td>
            </tr>
          )}

          {users.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-50">
              {userSchema.map((f) => (
                <td key={f.name} className="p-3 text-sm">
                  {user[f.name]}
                </td>
              ))}

              <td className="p-3">
                <div className="flex justify-center gap-4">
                  {/* Edit */}
                  <button
                    onClick={() => onEdit(user)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <Pencil size={18} />
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
