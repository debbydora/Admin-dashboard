import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../lib/firebase";

const UserProvider = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);

  useEffect(() => {
    getAllData();
  }, []);

  //PAGINATION
  //get currentdata
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = userList.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(userList.length / dataPerPage);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(userList.length / dataPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

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
      toast.success("Detail submission successful", {
        position: toast.POSITION.TOP_CENTER,
      });
      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
      });
    } catch (err) {
      setLoading(false);
      toast.error(err, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error(err);
    }
  };

  const getAllData = async () => {
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

  return {
    handleUserDetails,
    userInfo,
    validate,
    onSubmitInformation,
    loading,
    getAllData,
    userList,
    tableHeaders,
    csvReport,
    currentData,
    totalPages,
    previousPage,
    nextPage,
    currentPage,
  };
};

export default UserProvider;
