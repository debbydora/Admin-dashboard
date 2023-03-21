import Button from "../components/Button";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import UserProvider from "../providers/dataProvider";

import { CSVLink } from "react-csv";
import Image from "next/image";

const Dashboard = () => {
  return (
    <UserProvider
      render={({
        userList,
        tableHeaders,
        csvReport,
        currentData,
        totalPages,
        previousPage,
        nextPage,
        currentPage,
      }) => {
        return (
          <Layout>
            <div className="bg-purple-100 h-auto pt-8 px-4 pb-8">
              <div className="flex flex-col gap-4 lg:flex-row justify-between mb-8 ">
                <Card
                  title="Registered users"
                  info={userList?.length}
                  icon="/users.svg"
                />
                <Card
                  title="Total phone numbers"
                  info={userList?.length}
                  icon="/numbers.svg"
                />
                <Card
                  title="Total emails"
                  info={userList?.length}
                  icon="/numbers.svg"
                />
                <Card title="Total" info={userList?.length} icon="/users.svg" />
              </div>
              <div className="w-full hidden lg:flex mb-8 justify-between">
                <div className="bg-white border border-lightViolet rounded-md">
                  <Image
                    src="/chart.svg"
                    alt="chart"
                    width={705}
                    height={763}
                    priority
                  />
                </div>
                <div className="bg-white border border-lightViolet rounded-md">
                  <Image
                    src="/map.svg"
                    alt="map"
                    width={356}
                    height={356}
                    priority
                  />
                </div>
              </div>
              {currentData.length > 0 ? (
                <>
                  <Table columns={tableHeaders} data={currentData} />
                  <div className="flex items-center justify-between overflow-x-auto  px-6 py-6 border bg-white border-b border-lightViolet dark:bg-gray-900 dark:border-gray-700">
                    <CSVLink {...csvReport}>
                      <Button
                        type="button"
                        title="Export as csv"
                        className=" py-2 px-4 text-purple-500 border border-lightViolet shadow-md rounded-md bg-white font-normal"
                      />
                    </CSVLink>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPrev={previousPage}
                      onNext={nextPage}
                    />
                  </div>
                </>
              ) : (
                <div>
                  <p>No data yet</p>
                </div>
              )}
            </div>
          </Layout>
        );
      }}
    />
  );
};

export default Dashboard;
