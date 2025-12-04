import React, { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Camera, Save, X, Check } from 'lucide-react';
import { categories } from '../contexts/DataContext';

export default function UserProfile() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [pronouns, setPronouns] = useState(user?.pronouns || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>(user?.hobbies || []);
  const [photo, setPhoto] = useState(user?.photo || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setPhoto('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const toggleHobby = (hobby: string) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter(h => h !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  const handleSave = () => {
    updateProfile({
      fullName,
      pronouns: pronouns || undefined,
      phone: phone || undefined,
      hobbies: selectedHobbies,
      photo: photo || undefined,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFullName(user?.fullName || '');
    setPronouns(user?.pronouns || '');
    setPhone(user?.phone || '');
    setSelectedHobbies(user?.hobbies || []);
    setPhoto(user?.photo || '');
    setIsEditing(false);
  };

  if (!user) return null;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12">
            <div className="flex items-center gap-6">
              <div className="relative">
                {photo ? (
                  <img
                    src={photo}
                    alt={fullName}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-white flex items-center justify-center">
                    <span className="text-blue-600">{fullName.charAt(0).toUpperCase()}</span>
                  </div>
                )}
                {isEditing && (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Camera className="w-4 h-4 text-white" />
                  </button>
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-white mb-1">{user.fullName}</h1>
                <p className="text-blue-100">{user.email}</p>
              </div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Profile Form */}
          <div className="p-8">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />

            {isEditing && photo && (
              <div className="mb-6 flex items-center gap-4">
                <p className="text-gray-300">Profile Photo:</p>
                <button
                  onClick={handleDeletePhoto}
                  className="inline-flex items-center gap-2 px-4 py-2 text-red-400 border border-red-800 rounded-lg hover:bg-red-900/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Remove Photo
                </button>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-60"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-gray-500 rounded-lg opacity-60"
                />
                <p className="mt-1 text-gray-500">Email cannot be changed</p>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Pronouns
                </label>
                <input
                  type="text"
                  value={pronouns}
                  onChange={(e) => setPronouns(e.target.value)}
                  disabled={!isEditing}
                  placeholder="e.g., she/her, he/him, they/them"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-60"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={!isEditing}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-60"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Hobbies & Skills
                </label>
                <p className="text-gray-500 mb-3">
                  Select your interests and areas of expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((hobby) => (
                    <button
                      key={hobby}
                      onClick={() => isEditing && toggleHobby(hobby)}
                      disabled={!isEditing}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        selectedHobbies.includes(hobby)
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-blue-600'
                      } ${!isEditing ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
                    >
                      {selectedHobbies.includes(hobby) && (
                        <Check className="w-4 h-4 inline mr-1" />
                      )}
                      {hobby}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleSave}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
