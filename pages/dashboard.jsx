import Button from "../components/Button";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import UserProvider from "../providers/userProvider";
import { CSVLink } from "react-csv";

const Dashboard = () => {
  return (
    <UserProvider
      render={({ userList, tableHeaders, csvReport }) => {
        return (
          <Layout>
            <div className="bg-purple-100 h-auto pt-8 px-4 pb-8">
              <div className="flex flex-col gap-4 lg:flex-row justify-between mb-16">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              {userList.length > 0 ? (
                <>
                  <Table columns={tableHeaders} data={userList} />
                  <div className="flex items-center justify-between overflow-x-auto  px-6 py-6 border bg-white border-b border-lightViolet dark:bg-gray-900 dark:border-gray-700">
                    <CSVLink {...csvReport}>
                      <Button
                        type="button"
                        title="Export as csv"
                        className=" py-2 px-4 text-purple-500 border border-lightViolet shadow-md rounded-md bg-white font-normal"
                      />
                    </CSVLink>
                    <Pagination currentPage={1} totalPages={2} />
                  </div>
                </>
              ) : (
                <Loader />
              )}
            </div>
          </Layout>
        );
      }}
    />
  );
};

export default Dashboard;
