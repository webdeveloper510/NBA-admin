import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import { getadmindata } from "../../Api";
import { toast } from "react-toastify";
const Dashboard = () => {
  const [admindata, setadmindata] = useState([]);

  useEffect(() => {
    const loadAdminData = async () => {
      console.log("hello")
      const token = localStorage.getItem("accessToken");
      try {
        const response = await getadmindata(token);
        console.log("🚀 ~ API Responsekkk:", response.data);
        setadmindata(response.data);
      } catch (error) {
        console.error("Error fetching getadmindata:", error);
      }
    };

    loadAdminData();
  }, []);



  return (
    <div className="w-10/12 mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Added Records</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th className="border border-gray-300 p-2">Sr No</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">External URL</th>
              <th className="border border-gray-300 p-2">Media</th>
            </tr>
          </thead>
          <tbody>
            {admindata.map((venue, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{venue.title}</td>
                <td className="border border-gray-300 p-2">{venue.description}</td>
                <td className="border border-gray-300 p-2">
                  {venue.price || "N/A"}
                </td>
                <td className="border border-gray-300 p-2">
                  {venue.uploaded_at ? (
                    <a
                      href={venue.uploaded_at}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Visit
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {venue.file_url ? (
                    <img src={venue.file_url} alt="Media" className="w-20 h-auto mx-auto" />
                  ) : (
                    "No Media"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
