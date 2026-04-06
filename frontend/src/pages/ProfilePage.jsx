import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Camera } from "lucide-react";
import defaultLogo from "./noUser.png";

const ProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
      <div className="glass backdrop-blur-2xl rounded-3xl shadow-[0_0_30px_rgba(124,58,237,0.4)] border border-white/20 w-full max-w-md p-8 message-fade-in">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white tracking-tight">Profile</h1>
          <p className="text-white/60 mt-1 text-sm">Manage your profile information</p>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 group">
            <img
              src={selectedImage || authUser?.profilePic || defaultLogo}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-transparent bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-transform duration-300 group-hover:scale-105"
            />
            <label
              htmlFor="avatar-upload"
              className={`absolute bottom-1 right-1 btn-gradient text-white p-2 rounded-full cursor-pointer shadow-md transition-transform duration-200 hover:scale-110 ${
                isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
              }`}
            >
              <Camera className="w-5 h-5" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/png, image/jpeg, image/jpg, image/*"
                disabled={isUpdatingProfile}
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <p className="mt-3 text-xs text-white/50 text-center">
            {isUpdatingProfile
              ? "Uploading..."
              : "Tap the camera icon to update your profile picture"}
          </p>
        </div>

        {/* Profile Information (Read-only style) */}
        <div className="space-y-5">
          <div className="flex justify-between items-center border-b border-white/20 pb-2">
            <span className="text-white/60 text-sm">Name:</span>
            <span className="text-white font-medium">{authUser?.fullName || "—"}</span>
          </div>

          <div className="flex justify-between items-center border-b border-white/20 pb-2">
            <span className="text-white/60 text-sm">Email:</span>
            <span className="text-white font-medium">{authUser?.email || "—"}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white/60 text-sm">Member Since:</span>
            <span className="text-purple-400 font-medium">
              {authUser?.createdAt?.slice(0, 10) || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
