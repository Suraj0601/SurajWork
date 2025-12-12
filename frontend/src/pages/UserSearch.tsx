import { useChat } from "../context/ChatContext";

interface UserSearchProps {
    showUserSearch: boolean;
    setShowUserSearch: (e: boolean) => void;
}

export default function UserSearch({showUserSearch, setShowUserSearch}: UserSearchProps) {

    const { users, setLeftPaneSearch, leftPaneSearch, startConversationWith } = useChat();

  return (
    <>
      {/* User search / start chat modal */}
      {showUserSearch ? (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="font-semibold">Start new conversation</div>
              <button
                onClick={() => setShowUserSearch(false)}
                className="text-gray-500"
              >
                Close
              </button>
            </div>
            <div className="p-3">
              <input
                placeholder="Search users"
                className="w-full px-3 py-2 rounded-md border mb-3"
                onChange={(e) => setLeftPaneSearch(e.target.value)}
              />
              <div className="space-y-2 max-h-64 overflow-auto">
                {users
                  .filter(
                    (u) =>
                      u.id !== "me" &&
                      u.name
                        .toLowerCase()
                        .includes(leftPaneSearch.toLowerCase())
                  )
                  .map((u) => (
                    <div
                      key={u.id}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                            u.online
                              ? "bg-green-400 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {u.avatar}
                        </div>
                        <div>
                          <div className="font-semibold">{u.name}</div>
                          <div className="text-xs text-gray-500">
                            {u.online
                              ? "online"
                              : `last seen ${u.lastSeen || "some time"}`}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => startConversationWith(u.id)}
                          className="px-3 py-1 rounded-md bg-green-500 text-white"
                        >
                          Chat
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
