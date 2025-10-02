import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Bell, Settings, LayoutDashboard, Plus, Users, MoreVertical, Folder, Users as UsersIcon, Clock } from "lucide-react";

export default function Shared() {
  const sharedBoards = [
    {
      id: 1,
      name: "Client Project X",
      description: "Collaborative workspace for client deliverables",
      color: "from-cyan-500 to-cyan-600",
      owner: "Sarah Johnson",
      ownerInitials: "SJ",
      ownerColor: "bg-cyan-500",
      tasks: 18,
      members: 5,
      sharedDate: "2 days ago",
      role: "Editor",
    },
    {
      id: 2,
      name: "Team Retrospective",
      description: "Sprint planning and team feedback",
      color: "from-amber-500 to-amber-600",
      owner: "Mike Chen",
      ownerInitials: "MC",
      ownerColor: "bg-amber-500",
      tasks: 9,
      members: 8,
      sharedDate: "1 week ago",
      role: "Viewer",
    },
    {
      id: 3,
      name: "Product Roadmap",
      description: "Q4 2025 product planning and features",
      color: "from-rose-500 to-rose-600",
      owner: "Emma Wilson",
      ownerInitials: "EW",
      ownerColor: "bg-rose-500",
      tasks: 24,
      members: 6,
      sharedDate: "3 weeks ago",
      role: "Editor",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Kanban Board</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              My Boards
            </Link>
          </Button>

          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/create-board">
              <Plus className="mr-2 h-4 w-4" />
              Create Board
            </Link>
          </Button>

          <Button variant="secondary" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Shared with Me
          </Button>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Shared with Me</h2>
              <p className="text-sm text-gray-500 mt-1">Boards that others have shared with you</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-8">
          {sharedBoards.length > 0 ? (
            <div className="space-y-4">
              {sharedBoards.map((board) => (
                <Card key={board.id} className="hover:shadow-md transition-shadow overflow-hidden">
                  <div className="flex">
                    {/* Color Bar */}
                    <div className={`w-2 bg-gradient-to-b ${board.color}`}></div>

                    {/* Content */}
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl">
                              {board.name}
                            </CardTitle>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              board.role === "Editor"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}>
                              {board.role}
                            </span>
                          </div>
                          <CardDescription className="mb-4">{board.description}</CardDescription>

                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Folder className="w-4 h-4" />
                              {board.tasks} tasks
                            </div>

                            <div className="flex items-center gap-2">
                              <UsersIcon className="w-4 h-4" />
                              {board.members} members
                            </div>

                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              Shared {board.sharedDate}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 ml-6">
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground">Owned by</p>
                              <p className="text-sm font-medium">{board.owner}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-full ${board.ownerColor} flex items-center justify-center text-white font-semibold`}>
                              {board.ownerInitials}
                            </div>
                          </div>

                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-16">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Shared Boards</h3>
              <p className="text-gray-500 text-center max-w-md mb-8">
                Boards that others share with you will appear here. Start collaborating with your team!
              </p>
              <Button asChild>
                <Link to="/">
                  Go to My Boards
                </Link>
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
