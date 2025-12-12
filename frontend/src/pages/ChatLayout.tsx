import { useState } from "react";
import Conversations from "./Conversation";
import { useChat } from "../context/ChatContext";
import UserSearch from "./UserSearch";
import ChatArea from "./ChatArea";

export default function ChatLayout() {
  const { user, logout } = useChat();

  const [showUserSearch, setShowUserSearch] = useState(false);
  if (!user) {
    return <>User not found</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Conversations
        activeConvId={""}
        setShowUserSearch={setShowUserSearch}
        logout={logout}
      />

      <UserSearch
        showUserSearch={showUserSearch} 
        setShowUserSearch={setShowUserSearch}
       />

       <ChatArea />
    </div>
  );
}
