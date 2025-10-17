import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import {
  Users,
  MoreVertical,
  Folder,
  Users as UsersIcon,
  Clock,
} from 'lucide-react';
import DashboardWrapper from '@/components/wrapper';

const sharedBoards = [
  {
    id: 1,
    name: 'Client Project X',
    description: 'Collaborative workspace for client deliverables',
    color: 'from-cyan-500 to-cyan-600',
    owner: 'Sarah Johnson',
    ownerInitials: 'SJ',
    ownerColor: 'bg-cyan-500',
    tasks: 18,
    members: 5,
    sharedDate: '2 days ago',
    role: 'Editor',
  },
  {
    id: 2,
    name: 'Team Retrospective',
    description: 'Sprint planning and team feedback',
    color: 'from-amber-500 to-amber-600',
    owner: 'Mike Chen',
    ownerInitials: 'MC',
    ownerColor: 'bg-amber-500',
    tasks: 9,
    members: 8,
    sharedDate: '1 week ago',
    role: 'Viewer',
  },
  {
    id: 3,
    name: 'Product Roadmap',
    description: 'Q4 2025 product planning and features',
    color: 'from-rose-500 to-rose-600',
    owner: 'Emma Wilson',
    ownerInitials: 'EW',
    ownerColor: 'bg-rose-500',
    tasks: 24,
    members: 6,
    sharedDate: '3 weeks ago',
    role: 'Editor',
  },
];

export default function Shared() {
  return (
    <DashboardWrapper>
      {sharedBoards.length > 0 ? (
        <div className="space-y-4">
          {sharedBoards.map((board) => (
            <Card
              key={board.id}
              className="hover:shadow-lg hover:scale-[1.01] transition-all duration-300 overflow-hidden border-border"
            >
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
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                            board.role === 'Editor'
                              ? 'bg-green-100 text-green-700 ring-1 ring-green-200'
                              : 'bg-primary/10 text-primary ring-1 ring-primary/20'
                          }`}
                        >
                          {board.role}
                        </span>
                      </div>
                      <CardDescription className="mb-4">
                        {board.description}
                      </CardDescription>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Folder className="w-4 h-4" />
                          <span className="font-medium">
                            {board.tasks} tasks
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <UsersIcon className="w-4 h-4" />
                          <span className="font-medium">
                            {board.members} members
                          </span>
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
                          <p className="text-xs text-muted-foreground">
                            Owned by
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {board.owner}
                          </p>
                        </div>
                        <div
                          className={`w-12 h-12 rounded-full ${board.ownerColor} flex items-center justify-center text-white font-semibold shadow-md`}
                        >
                          {board.ownerInitials}
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-accent"
                      >
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
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No Shared Boards
          </h3>
          <p className="text-muted-foreground text-center max-w-md mb-8">
            Boards that others share with you will appear here. Start
            collaborating with your team!
          </p>
          <Button asChild className="shadow-sm">
            <Link to="/">Go to My Boards</Link>
          </Button>
        </div>
      )}
    </DashboardWrapper>
  );
}
