import { Link } from 'react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Bell, Settings, LayoutDashboard, Plus, Users } from 'lucide-react';
import Sidebar from '@/components/layout/sidebar';
import Navbar from '@/components/layout/navbar';
import DashboardWrapper from '@/components/wrapper';

export default function CreateBoard() {
  const [boardName, setBoardName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedColor, setSelectedColor] = useState('blue');

  const colors = [
    { name: 'blue', class: 'from-blue-500 to-blue-600' },
    { name: 'purple', class: 'from-purple-500 to-purple-600' },
    { name: 'green', class: 'from-green-500 to-green-600' },
    { name: 'red', class: 'from-red-500 to-red-600' },
    { name: 'orange', class: 'from-orange-500 to-orange-600' },
    { name: 'pink', class: 'from-pink-500 to-pink-600' },
    { name: 'indigo', class: 'from-indigo-500 to-indigo-600' },
    { name: 'teal', class: 'from-teal-500 to-teal-600' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle board creation logic here
    console.log({ boardName, description, selectedColor });
  };

  return (
    <DashboardWrapper>
      <div className="max-w-3xl mx-auto">
        <Card className="overflow-hidden shadow-lg border-border">
          {/* Preview */}
          <div
            className={`h-48 bg-gradient-to-br ${colors.find((c) => c.name === selectedColor)?.class || colors[0].class} relative`}
          >
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="h-full flex items-center justify-center relative z-10">
              <div className="text-center text-white">
                <CardTitle className="text-3xl mb-2 drop-shadow-lg">
                  {boardName || 'Board Name'}
                </CardTitle>
                <CardDescription className="text-lg text-white/90 drop-shadow">
                  {description || 'Board description'}
                </CardDescription>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-card">
            <div>
              <label
                htmlFor="boardName"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Board Name *
              </label>
              <Input
                id="boardName"
                value={boardName}
                onChange={(e) => setBoardName(e.target.value)}
                placeholder="Enter board name"
                className="border-border focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Description
              </label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter board description (optional)"
                className="border-border focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Board Color
              </label>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    className={`h-16 rounded-lg bg-gradient-to-br ${color.class} transition-all shadow-sm ${
                      selectedColor === color.name
                        ? 'ring-4 ring-offset-2 ring-primary scale-105 shadow-lg'
                        : 'hover:scale-105 hover:shadow-md'
                    }`}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <Button variant="ghost" asChild className="hover:bg-accent">
                <Link to="/">Cancel</Link>
              </Button>
              <Button type="submit" className="shadow-sm">
                Create Board
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </DashboardWrapper>
  );
}
