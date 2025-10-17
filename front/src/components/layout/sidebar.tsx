import { Button } from '../ui/button';
import { LayoutDashboard, Plus, Users } from 'lucide-react';
import { Link } from 'react-router';

interface SidebarProps {
  isMobile?: boolean;
}

function Sidebar({ isMobile = false }: SidebarProps) {
  return (
    <aside className={`${isMobile ? 'w-full h-full' : 'w-64 hidden md:flex'} bg-card ${!isMobile && 'border-r border-border'} flex flex-col shadow-sm`}>
      <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-primary/10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Kanban Board
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start hover:bg-accent"
          asChild
        >
          <Link to="/">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            My Boards
          </Link>
        </Button>

        <Button variant="default" className="w-full justify-start shadow-sm">
          <Plus className="mr-2 h-4 w-4" />
          Create Board
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start hover:bg-accent"
          asChild
        >
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
  );
}

export default Sidebar;
