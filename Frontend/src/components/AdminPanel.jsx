import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loanRequests, setLoanRequests] = useState([]);

  useEffect(() => {
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com", cnic: "12345" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", cnic: "67890" },
    ]);

    setLoanRequests([
      { id: 1, category: "Wedding", amount: 50000, user: "John Doe" },
      {
        id: 2,
        category: "Home Construction",
        amount: 200000,
        user: "Jane Smith",
      },
    ]);
  }, []);

  const handleAcceptLoan = (loanId) => {
    setLoanRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === loanId ? { ...request, status: "Accepted" } : request
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 p-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
        Admin Panel
      </h1>

      {/* Users Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">CNIC</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="even:bg-gray-100">
                  <td className="py-3 px-6 text-center">{user.name}</td>
                  <td className="py-3 px-6 text-center">{user.email}</td>
                  <td className="py-3 px-6 text-center">{user.cnic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Loan Requests Section */}
      <section>
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">
          Loan Requests
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Amount</th>
                <th className="py-3 px-6">User</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {loanRequests.map((loanRequest) => (
                <tr key={loanRequest.id} className="even:bg-gray-100">
                  <td className="py-3 px-6 text-center">
                    {loanRequest.category}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {loanRequest.amount}
                  </td>
                  <td className="py-3 px-6 text-center">{loanRequest.user}</td>
                  <td className="py-3 px-6 text-center">
                    {loanRequest.status !== "Accepted" ? (
                      <button
                        onClick={() => handleAcceptLoan(loanRequest.id)}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                      >
                        Accept
                      </button>
                    ) : (
                      <span className="text-green-600 font-semibold">
                        Accepted
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-10 text-center">
        <Link to="/dashboard">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
