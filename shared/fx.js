import { json2csv } from "json-2-csv";

export function downloadJsonAsCsv(jsonData, filename, options) {
  const opts = Object.assign({ keys }, options);

  json2csv(
    jsonData,
    (err, csv) => {
      if (err) {
        console.log("Error converting data to CSV format!", err);

        return;
      }

      const url = window.URL.createObjectURL(new Blob([csv]));

      const link = document.createElement("a");
      link.classList.add("display-none");
      link.href = url;
      link.setAttribute("download", `${filename}.csv`);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    },
    opts
  );
}
