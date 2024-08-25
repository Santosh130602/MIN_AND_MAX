// import React, { useState } from 'react';
// import axios from 'axios';

// const Chatbot = () => {
//   const [visible, setVisible] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const toggleChatbot = () => {
//     setVisible(!visible);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === '') return;

//     const newMessage = { text: input, isUser: true };
//     setMessages([...messages, newMessage]);

//     try {
//       const response = await axios.post('http://localhost:4000/api/dialogflow', { message: input });
//       const botMessage = { text: response.data.reply, isUser: false };
//       setMessages([...messages, newMessage, botMessage]);
//     } catch (error) {
//       console.error('Error communicating with backend:', error);
//     }

//     setInput('');
//   };

//   return (
//     <div className="fixed bottom-5 right-5">
//       <button
//         onClick={toggleChatbot}
//         className="bg-blue-500 text-white p-2 rounded-full shadow-lg focus:outline-none"
//       >
//         {visible ? 'Close ' : 'Chat'}
//       </button>
//       {visible && (
//         <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-96 p-4 flex flex-col">
//           <div className="flex-grow overflow-y-auto">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`mb-2 p-2 rounded-lg ${
//                   msg.isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>
//           <div className="mt-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//               className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Type your message..."
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-blue-500 text-white p-2 rounded-lg w-full mt-2"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;