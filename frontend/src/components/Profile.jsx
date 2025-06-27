import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../config';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get(ENDPOINTS.PROFILE, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.success) {
          setUserData(response.data.data);
          setEditForm({
            name: response.data.data.name,
            email: response.data.data.email,
          });
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load profile.');
        if (err.response?.status === 401) {
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
    setError('');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setError('');
    setEditForm({
      name: userData.name,
      email: userData.email,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setUpdateLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        ENDPOINTS.UPDATE_PROFILE,
        editForm,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        setUserData(response.data.data);
        setIsEditing(false);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile.');
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <div className="profile-card">
          <h2 className="profile-title">Profile</h2>

          {error && (
            <div className="profile-error">
              {error}
            </div>
          )}

          {userData && !isEditing && (
            <div className="profile-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <div className="form-value">
                  {userData.name}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="form-value">
                  {userData.email}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Role</label>
                <div className="form-value" style={{ textTransform: 'capitalize' }}>
                  {userData.role}
                </div>
              </div>

              <button
                onClick={handleEditClick}
                className="button"
              >
                Edit Profile
              </button>
            </div>
          )}

          {isEditing && (
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Role</label>
                <div className="form-value disabled">
                  {userData.role} (cannot be changed)
                </div>
              </div>

              <div className="button-group">
                <button
                  type="submit"
                  disabled={updateLoading}
                  className="button"
                >
                  {updateLoading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="button button-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile; 