import React, { useEffect, useState } from 'react';

const CustomerList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
       fetch("http://localhost:1000/customers").then(res=>res.json()).then(data=>setData(data)) 
    }, [])
    // console.log(data);
    return (
      <div className="bg-base-200 p-10  ">
        <h3 className="text-3xl my-5 ">Customers List</h3>
        {data.length === 0 ? (
          <p className="text-3xl my-5 text-center">You didt added any items.</p>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- row 1 --> */}
                  {data?.map((user, index) => (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
};

export default CustomerList;