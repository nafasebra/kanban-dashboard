import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Bell, Settings, LayoutDashboard, Plus, Users } from "lucide-react";

export default function Board() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Kanban Board</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Button variant="secondary" className="w-full justify-start">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            My Boards
          </Button>

          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/create-board">
              <Plus className="mr-2 h-4 w-4" />
              Create Board
            </Link>
          </Button>

          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/shared">
              <Users className="mr-2 h-4 w-4" />
              Shared with Me
            </Link>
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
              <h2 className="text-2xl font-bold text-gray-900">My Boards</h2>
              <p className="text-sm text-gray-500 mt-1">Manage your projects and tasks</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Board Card 1 */}
            <Card className="cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Project Alpha</CardTitle>
                <CardDescription className="mb-4">Development tasks for the main project</CardDescription>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">12 tasks</span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Board Card 2 */}
            <Card className="cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-32 bg-gradient-to-br from-purple-500 to-purple-600"></div>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Marketing Campaign</CardTitle>
                <CardDescription className="mb-4">Q4 marketing initiatives and content</CardDescription>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">8 tasks</span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Board Card 3 */}
            <Card className="cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-32 bg-gradient-to-br from-green-500 to-green-600"></div>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Design System</CardTitle>
                <CardDescription className="mb-4">UI/UX components and guidelines</CardDescription>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">15 tasks</span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-white"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Create New Board Card */}
            <Card className="border-2 border-dashed hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
              <CardContent className="h-full flex flex-col items-center justify-center p-6 min-h-[280px]">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <Plus className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="mb-2">Create New Board</CardTitle>
                <CardDescription className="text-center">Start a new project and organize your tasks</CardDescription>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
