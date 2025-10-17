import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Bell, Settings, LayoutDashboard, Plus, Users } from "lucide-react";

export default function Board() {
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
          <Button variant="default" className="w-full justify-start shadow-sm">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            My Boards
          </Button>

          <Button variant="ghost" className="w-full justify-start hover:bg-accent" asChild>
            <Link to="/create-board">
              <Plus className="mr-2 h-4 w-4" />
              Create Board
            </Link>
          </Button>

          <Button variant="ghost" className="w-full justify-start hover:bg-accent" asChild>
            <Link to="/shared">
              <Users className="mr-2 h-4 w-4" />
              Shared with Me
            </Link>
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
              <h2 className="text-2xl font-bold text-foreground">My Boards</h2>
              <p className="text-sm text-muted-foreground mt-1">Manage your projects and tasks</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Board Card 1 */}
            <Card className="cursor-pointer overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 border-border">
              <div className="h-32 bg-gradient-to-br from-primary to-blue-600 relative">
                <div className="absolute inset-0 bg-grid-white/10"></div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-foreground">Project Alpha</CardTitle>
                <CardDescription className="mb-4">Development tasks for the main project</CardDescription>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-medium">12 tasks</span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-card shadow-sm"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-card shadow-sm"></div>
                    <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-card shadow-sm"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Board Card 2 */}
            <Card className="cursor-pointer overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 border-border">
              <div className="h-32 bg-gradient-to-br from-purple-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-grid-white/10"></div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-foreground">Marketing Campaign</CardTitle>
                <CardDescription className="mb-4">Q4 marketing initiatives and content</CardDescription>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-medium">8 tasks</span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary border-2 border-card shadow-sm"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-card shadow-sm"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Board Card 3 */}
            <Card className="cursor-pointer overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 border-border">
              <div className="h-32 bg-gradient-to-br from-green-500 to-green-600 relative">
                <div className="absolute inset-0 bg-grid-white/10"></div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-foreground">Design System</CardTitle>
                <CardDescription className="mb-4">UI/UX components and guidelines</CardDescription>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-medium">15 tasks</span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-card shadow-sm"></div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-card shadow-sm"></div>
                    <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-card shadow-sm"></div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-card shadow-sm"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Create New Board Card */}
            <Card className="border-2 border-dashed border-primary/30 hover:border-primary hover:shadow-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
              <CardContent className="h-full flex flex-col items-center justify-center p-6 min-h-[280px]">
                <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <Plus className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="mb-2 text-foreground">Create New Board</CardTitle>
                <CardDescription className="text-center">Start a new project and organize your tasks</CardDescription>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
