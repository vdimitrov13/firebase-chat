// import { firestore } from "firebase";
// import { useCollectionData } from "react-firebase-hooks/firestore/dist/firestore";
// import { ChatMessage } from "./ChatMessage";
// import React from 'react';

// function ChatRoom() {
//     const message = firestore.collection('messages');
//     const query = message.orderBy('createdAt').limit(15);

//     const [messages] = useCollectionData(query, {idField: 'id'});

//     return (
//         <>
//             <div>
//                 {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
//             </div>

//             <div>
                
//             </div>
//         </>
//     )
// }

// export { ChatRoom };