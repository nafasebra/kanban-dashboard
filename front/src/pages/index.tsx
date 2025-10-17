import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Bell, Settings, LayoutDashboard, Plus, Users } from 'lucide-react';
import DashboardWrapper from '@/components/wrapper';

export default function Board() {
  return (
    <DashboardWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Board Card 1 */}
        <Card className="cursor-pointer overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 border-border">
          <div className="h-32 bg-gradient-to-br from-primary to-blue-600 relative">
            <div className="absolute inset-0 bg-grid-white/10"></div>
          </div>
          <CardContent className="p-6">
            <CardTitle className="mb-2 text-foreground">
              Project Alpha
            </CardTitle>
            <CardDescription className="mb-4">
              Development tasks for the main project
            </CardDescription>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground font-medium">
                12 tasks
              </span>
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
            <CardTitle className="mb-2 text-foreground">
              Marketing Campaign
            </CardTitle>
            <CardDescription className="mb-4">
              Q4 marketing initiatives and content
            </CardDescription>
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
            <CardTitle className="mb-2 text-foreground">
              Design System
            </CardTitle>
            <CardDescription className="mb-4">
              UI/UX components and guidelines
            </CardDescription>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground font-medium">
                15 tasks
              </span>
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
            <CardTitle className="mb-2 text-foreground">
              Create New Board
            </CardTitle>
            <CardDescription className="text-center">
              Start a new project and organize your tasks
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </DashboardWrapper>
  );
}
