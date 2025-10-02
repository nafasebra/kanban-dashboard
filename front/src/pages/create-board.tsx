import { Link } from "react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bell, Settings, LayoutDashboard, Plus, Users } from "lucide-react";

export default function CreateBoard() {
  const [boardName, setBoardName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState("blue");

  const colors = [
    { name: "blue", class: "from-blue-500 to-blue-600" },
    { name: "purple", class: "from-purple-500 to-purple-600" },
    { name: "green", class: "from-green-500 to-green-600" },
    { name: "red", class: "from-red-500 to-red-600" },
    { name: "orange", class: "from-orange-500 to-orange-600" },
    { name: "pink", class: "from-pink-500 to-pink-600" },
    { name: "indigo", class: "from-indigo-500 to-indigo-600" },
    { name: "teal", class: "from-teal-500 to-teal-600" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle board creation logic here
    console.log({ boardName, description, selectedColor });
  };

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

          <Button variant="secondary" className="w-full justify-start">
            <Plus className="mr-2 h-4 w-4" />
            Create Board
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
              <h2 className="text-2xl font-bold text-gray-900">Create New Board</h2>
              <p className="text-sm text-gray-500 mt-1">Set up a new board to organize your tasks</p>
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
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              {/* Preview */}
              <div className={`h-48 bg-gradient-to-br ${colors.find(c => c.name === selectedColor)?.class || colors[0].class}`}>
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <CardTitle className="text-3xl mb-2">
                      {boardName || "Board Name"}
                    </CardTitle>
                    <CardDescription className="text-lg opacity-90">
                      {description || "Board description"}
                    </CardDescription>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div>
                  <label htmlFor="boardName" className="block text-sm font-medium text-gray-700 mb-2">
                    Board Name *
                  </label>
                  <Input
                    id="boardName"
                    value={boardName}
                    onChange={(e) => setBoardName(e.target.value)}
                    placeholder="Enter board name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter board description (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Board Color
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`h-16 rounded-lg bg-gradient-to-br ${color.class} transition-all ${
                          selectedColor === color.name
                            ? "ring-4 ring-offset-2 ring-gray-400 scale-105"
                            : "hover:scale-105"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <Button variant="ghost" asChild>
                    <Link to="/">
                      Cancel
                    </Link>
                  </Button>
                  <Button type="submit">
                    Create Board
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
