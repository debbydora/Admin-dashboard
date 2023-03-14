import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../lib/firebase";

const UserProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const validate = () => {
    return (
      userInfo.firstName.length &&
      userInfo.lastName.length &&
      userInfo.number.length &&
      userInfo.email.length
    );
  };

  const onSubmitInformation = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        ...userInfo,
        timeStamp: serverTimestamp(),
      });
      setLoading(false);
      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
      });
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const getAllUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      let list = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
        setUserList(list);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const tableHeaders = [
    { field: "firstName", header: "First Name" },
    { field: "lastName", header: "Last Name" },
    { field: "email", header: "Email" },
    { field: "number", header: "Phone Number" },
  ];

  const headers = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "email", label: "Email" },
    { key: "number", label: "Phone Number" },
  ];

  const csvReport = {
    data: userList,
    headers: headers,
    filename: "users.csv",
  };

  return props.render({
    handleUserDetails,
    userInfo,
    validate,
    onSubmitInformation,
    loading,
    getAllUsers,
    userList,
    tableHeaders,
    csvReport,
  });
};

export default UserProvider;
