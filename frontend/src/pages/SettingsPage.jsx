import React from 'react'

const SettingsPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
      <div className="glass backdrop-blur-2xl rounded-3xl shadow-[0_0_30px_rgba(124,58,237,0.4)] border border-white/20 w-full max-w-md p-8 message-fade-in">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white tracking-tight">Settings</h1>
          <p className="text-white/60 mt-1 text-sm">Manage your application settings</p>
        </div>

        {/* Settings Content */}
        <div className="space-y-6">
          <div className="text-center text-white/70">
            <p className="text-lg">Settings page coming soon!</p>
            <p className="text-sm mt-2">We're working on bringing you more customization options.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
