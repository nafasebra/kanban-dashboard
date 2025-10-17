import { Button } from '../ui/button';
import { Bell, Settings, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../ui/sheet';
import Sidebar from './sidebar';

function Navbar() {
  return (
    <header className="bg-card border-b border-border px-4 md:px-8 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Mobile Menu - Only visible on small screens */}
        <div className="flex items-center gap-3 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <Sidebar isMobile />
            </SheetContent>
          </Sheet>
          
          <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Kanban
          </h1>
        </div>

        {/* Title - Hidden on mobile */}
        <div className="hidden md:block">
          <h2 className="text-2xl font-bold text-foreground">
            Create New Board
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Set up a new board to organize your tasks
          </p>
        </div>

        {/* Mobile Title - Only visible on small screens */}
        <div className="md:hidden">
          <h2 className="text-base font-bold text-foreground">
            Create Board
          </h2>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent relative"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
          </Button>

          <Button variant="ghost" size="icon" className="hover:bg-accent">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
