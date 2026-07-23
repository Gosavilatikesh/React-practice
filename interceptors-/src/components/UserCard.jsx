import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Eye,
  Pencil,
} from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Top Banner */}
      <div className="h-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="-mt-10 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white shadow-lg">
            {user.name.firstname[0].toUpperCase()}
            {user.name.lastname[0].toUpperCase()}
          </div>
        </div>

        {/* User Info */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="mt-1 flex items-center justify-center gap-1 text-sm text-gray-500">
            <User size={14} />
            @{user.username}
          </p>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
            <Mail className="text-blue-500" size={18} />
            <span className="truncate text-sm text-gray-700">
              {user.email}
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
            <Phone className="text-green-500" size={18} />
            <span className="text-sm text-gray-700">
              {user.phone}
            </span>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-3">
            <MapPin
              className="mt-0.5 text-red-500"
              size={18}
            />
            <div className="text-sm text-gray-700">
              <p>
                {user.address.number}, {user.address.street}
              </p>
              <p className="text-gray-500">
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-gray-100 pt-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">
              USER ID
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
              #{user.id}
            </span>
          </div>

          <div className="flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 py-2.5 text-white transition hover:bg-blue-600">
              <Eye size={16} />
              View
            </button>

            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 py-2.5 text-gray-700 transition hover:bg-gray-100">
              <Pencil size={16} />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;