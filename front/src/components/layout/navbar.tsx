import React from 'react';
import { Button } from '../ui/button';
import { Bell, Settings } from 'lucide-react';

function Navbar() {
  return (
    <header className="bg-card border-b border-border px-8 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Create New Board
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Set up a new board to organize your tasks
          </p>
        </div>

        <div className="flex items-center gap-3">
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
