import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Form = ({setLoginUser}) => {
  const history = useNavigate();

  const [user,setUser] = useState({
        name:"",
        email: "",
        subject: "",
        message:""
    })

    const sendQuery = event => {
        event.preventDefault();

        if(!user.name || !user.email || !user.subject || !user.message){
            alert("All fields are required");
            return null;
        }
        
        // code to trigger Sending email
        axios.post('http://localhost:4000/api/form', {...user})
        .then(res =>{
            setUser({name: '', email:'', subject:'', message:''})
            alert('Message sent successfully')
        }).
        catch(()=>{
            alert('Ooops! Something went wrong')
        })
        
      };
    
      const onInputChange = event => {
        const { name, value } = event.target;
    
        setUser({
          ...user,
          [name]: value
        });
      };

  return (
    <>
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            Send Your Query
        </div>
        <div className="mt-3">
            <form action="#" autoComplete="off">
                <div className="flex flex-col mb-2">
                    <div className="relative flex ">                    
                        <input 
                        type="text" 
                        id="query-name" 
                        name="name" value={user.name}  
                        placeholder="Your Name" 
                        onChange={onInputChange}
                        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>
                <div className="flex flex-col mb-2">
                    <div className="relative flex ">                        
                        <input 
                        type="email" 
                        id="query-email" 
                        name="email" 
                        value={user.email}  
                        placeholder="Your Email" 
                        onChange={onInputChange}
                        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>
                <div className="flex flex-col mb-2">
                    <div className="relative flex ">                        
                        <input 
                        type="subject" 
                        id="query-subject" 
                        name="subject" 
                        value={user.subject}  
                        placeholder="Your Subject" 
                        onChange={onInputChange}
                        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>
                <div className="flex flex-col mb-6">
                    <div className="relative flex ">                        
                        {/* <input type="email" id="query-email" name="email" value={user.email}  placeholder="Your Email" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" /> */}

                        <textarea 
                        id="query-matter" 
                        name="message" 
                        value={user.message} 
                        placeholder="Your Query Message" 
                        onChange={onInputChange}
                        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"></textarea>
                    </div>
                </div>
                <div className="flex w-full">
                    <button 
                    type="submit" 
                    onClick={sendQuery} 
                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-purple-600 shadow-md hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 " >
                        Send Query
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
  );
}

export default Form;