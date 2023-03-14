const Table = ({ data = null, columns = null }) => {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };

  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg rounded-lg ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns &&
              columns.map((head) => (
                <th
                  key={head.header}
                  className="px-6 py-3 text-base font-medium"
                  scope="col"
                >
                  {getCaps(head.header, head.field)}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, index) => (
              <tr
                className="bg-white border-b border-lightViolet dark:bg-gray-900 dark:border-gray-700"
                key={index}
              >
                {columns.map((col, index) => (
                  <td key={index} className="px-6 py-6 text-gray-400 text-base">
                    {row[col.field]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
