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
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col shadow-sm">
        <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-primary/10">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Kanban Board
          </h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start hover:bg-accent" asChild>
            <Link to="/">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              My Boards
            </Link>
          </Button>

          <Button variant="ghost" className="w-full justify-start hover:bg-accent" asChild>
            <Link to="/create-board">
              <Plus className="mr-2 h-4 w-4" />
              Create Board
            </Link>
          </Button>

          <Button variant="default" className="w-full justify-start shadow-sm">
            <Users className="mr-2 h-4 w-4" />
            Shared with Me
          </Button>
        </nav>
        
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-accent transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-semibold shadow-md">
              JD
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border px-8 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Shared with Me</h2>
              <p className="text-sm text-muted-foreground mt-1">Boards that others have shared with you</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-accent relative">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
              </Button>

              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-8 scrollbar-thin">
          {sharedBoards.length > 0 ? (
            <div className="space-y-4">
              {sharedBoards.map((board) => (
                <Card key={board.id} className="hover:shadow-lg hover:scale-[1.01] transition-all duration-300 overflow-hidden border-border">
                  <div className="flex">
                    {/* Color Bar */}
                    <div className={`w-1.5 bg-gradient-to-b ${board.color}`}></div>

                    {/* Content */}
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl text-foreground">
                              {board.name}
                            </CardTitle>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                              board.role === "Editor"
                                ? "bg-green-100 text-green-700 ring-1 ring-green-200"
                                : "bg-primary/10 text-primary ring-1 ring-primary/20"
                            }`}>
                              {board.role}
                            </span>
                          </div>
                          <CardDescription className="mb-4">{board.description}</CardDescription>

                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Folder className="w-4 h-4" />
                              <span className="font-medium">{board.tasks} tasks</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <UsersIcon className="w-4 h-4" />
                              <span className="font-medium">{board.members} members</span>
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
                              <p className="text-sm font-medium text-foreground">{board.owner}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-full ${board.ownerColor} flex items-center justify-center text-white font-semibold shadow-md`}>
                              {board.ownerInitials}
                            </div>
                          </div>

                          <Button variant="ghost" size="icon" className="hover:bg-accent">
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
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No Shared Boards</h3>
              <p className="text-muted-foreground text-center max-w-md mb-8">
                Boards that others share with you will appear here. Start collaborating with your team!
              </p>
              <Button asChild className="shadow-sm">
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
