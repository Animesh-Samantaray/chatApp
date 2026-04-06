import React, { useEffect, useState } from "react";
import noUser from "../pages/noUser.png";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./SidebarSkeleton";
import { Users } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-72 bg-black/30 backdrop-filter backdrop-blur-lg border-r border-white/20 flex flex-col transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-white/20">
        <Users className="w-5 h-5 text-white/70" />
        <span className="font-semibold text-white hidden lg:block">
          Contacts
        </span>
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto py-3 space-y-2 px-2">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`w-full px-3 py-2 flex items-center gap-3 rounded-md transition-all duration-200 hover:bg-white/10 ${
              selectedUser?._id === user._id
                ? "bg-gradient-to-r from-purple-600/50 to-blue-600/50 ring-1 ring-white/30"
                : ""
            }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={user.profilePic || noUser}
                alt={user.fullName}
                className="w-10 h-10 object-cover rounded-full border border-white/30 hover:scale-110 transition-transform"
              />
              {onlineUsers.includes(user._id) && (
                <span className="online-indicator" />
              )}
            </div>

            <div className="flex-col min-w-0 hidden lg:flex">
              <div className="font-medium text-white truncate">
                {user.fullName}
              </div>
              <div
                className={`text-sm ${
                  onlineUsers.includes(user._id)
                    ? "text-green-400"
                    : "text-white/50"
                }`}
              >
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-white/50 py-5 text-sm">
            No Users
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
