import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  loadUserAction,
  updateProfileAction,
} from "../Redux/Actions/UserAction";
import MetaData from "../Components/Layout/MetaData";
import {
  AvatarInput,
  Img,
  Input,
  Map,
  OrderBtn,
  ProfileBody,
  ProfileContent,
  ProfRight,
  Right,
} from "../Stylesheets/Profile.styled";

const Profile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const savedUser = user?.savedUser;

  const { error, isUpdated } = useSelector((state) => state.profile);

  const [firstName, setFirstName] = useState(savedUser?.firstname);
  const [lastName, setLastName] = useState(savedUser?.lastname);
  const [email, setEmail] = useState(savedUser?.email);
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(savedUser?.avatar[0]?.url);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfileAction(firstName, lastName, email, avatar));

    if (isUpdated) {
      alert("Details updated successfully");
      dispatch(loadUserAction);
    } else if (error) {
      alert("An error occurred");
      dispatch(clearErrors());
    }
  };

  const updateProfileActionPic = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (savedUser) {
      setFirstName(savedUser?.firstname);
      setLastName(savedUser?.lastname);
      setEmail(savedUser?.email);
      setAvatarPreview(savedUser?.avatar[0]?.url);
    }
  }, [savedUser]);

  return (
    <>
      <MetaData title={'Edit Profile || Pattys E-commerce'}/>
      <ProfileBody>
        <h1>Edit Profile</h1>
        <ProfileContent encType="multipart/form-data" onSubmit={handleSubmit}>
          <Map>
            <Img src={avatarPreview} alt="Avatar" />
            <AvatarInput
              type="file"
              name="avatar"
              accept="image/*"
              onChange={updateProfileActionPic}
            />
          </Map>

          <ProfRight>
            <Right>
              <h4>First Name:</h4>
              <Input
                type="text"
                name="firstname"
                value={firstName}
                onChange={handleFirstName}
              />
            </Right>

            <Right>
              <h4>Last Name:</h4>
              <Input
                type="text"
                name="lastname"
                value={lastName}
                onChange={handleLastName}
              />
            </Right>

            <Right>
              <h4>Email:</h4>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
            </Right>

            <Right style={{textAlign: 'center'}}>
              <OrderBtn type="submit" value="Update Profile" />
            </Right>
          </ProfRight>
        </ProfileContent>
      </ProfileBody>
    </>
  );
};

export default Profile;
