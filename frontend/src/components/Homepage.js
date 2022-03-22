import axios from "axios"
import React, { useEffect, useState } from "react"

const Homepage = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    axios.get("http://localhost:4000/api/form")
      .then(response => {
        setUsers(response.data.data)
        //console.log(response.data.data);
        //return response.json()
      })      
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
        <div className="flex flex-col">
            <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="w-full">
                <thead className="border-b">
                    <tr>
                    <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                        Subject
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                        Message
                    </th>
                    </tr>
                </thead>
                
                    {/* {users.length > 0 && (  
                        <tr className="border-b" >      
                        {users.map(user => (                            
                                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap" key={user._id}>{user.name}</td>
                                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{user.subject}</td>
                                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">{user.message}</td>
                            
                        ))}  
                        </tr>
                    )}                     */}
                    {users.length > 0 && (
                        <tbody> 
                        {users.map(user => (
                            <tr key={user._id} className="text-left">
                            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{user.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{user.email}</td>
                            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{user.subject}</td>
                            <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">{user.message}</td>
                            </tr>
                        ))}
                        </tbody>
                    )}
                
                </table>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Homepage