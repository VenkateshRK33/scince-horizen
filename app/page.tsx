import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Bell, Calendar, MessageSquare, Search, Settings, Beaker, Brain, Atom, BookOpen, Trophy, GraduationCap, Star, TrendingUp, Clock, Users, BookMarked, ChevronDown, ArrowRight, User, LogOut } from "lucide-react";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AuthStatus } from "@/components/auth/auth-status";

export default function Home() {
  // Update the subject cards with icons and hover effects
  const subjects = [
    { title: 'Biology', value: '12 Topics', icon: Brain, color: 'emerald' },
    { title: 'Chemistry', value: '15 Topics', icon: Beaker, color: 'blue' },
    { title: 'Physics', value: '10 Topics', icon: Atom, color: 'purple' },
    { title: 'Total Progress', value: '65%', icon: TrendingUp, color: 'yellow' }
  ];

  // Update the featured topics
  const featuredTopics = [
    { 
      title: 'DNA Replication', 
      subject: 'Biology', 
      progress: 80,
      icon: Brain,
      description: 'Explore the molecular mechanisms of DNA replication and cell division'
    },
    { 
      title: 'Periodic Table', 
      subject: 'Chemistry', 
      progress: 75,
      icon: Beaker,
      description: 'Master the elements and their properties in the periodic table'
    },
    { 
      title: 'Quantum Physics', 
      subject: 'Physics', 
      progress: 65,
      icon: Atom,
      description: 'Understanding the fundamental principles of quantum mechanics'
    }
  ];

  // Add these topic arrays before the return statement
  const biologyTopics = [
    { title: 'Cell Biology', desc: 'Structure and function of cells', icon: Brain },
    { title: 'Genetics', desc: 'DNA, inheritance, and evolution', icon: BookMarked },
    { title: 'Human Anatomy', desc: 'Body systems and functions', icon: Users },
    { title: 'Ecology', desc: 'Organisms and their environment', icon: TrendingUp },
  ];

  const chemistryTopics = [
    { title: 'Organic Chemistry', desc: 'Carbon compounds and reactions', icon: Beaker },
    { title: 'Inorganic Chemistry', desc: 'Non-carbon compounds', icon: BookOpen },
    { title: 'Physical Chemistry', desc: 'Energy and matter interactions', icon: Atom },
    { title: 'Analytical Chemistry', desc: 'Chemical analysis methods', icon: TrendingUp },
  ];

  const physicsTopics = [
    { title: 'Mechanics', desc: 'Forces and motion', icon: TrendingUp },
    { title: 'Quantum Physics', desc: 'Atomic and subatomic phenomena', icon: Atom },
    { title: 'Electromagnetism', desc: 'Electricity and magnetism', icon: BookMarked },
    { title: 'Thermodynamics', desc: 'Heat and energy', icon: Beaker },
  ];

  // First, let's define our biology-specific colors
  const bioColors = {
    primary: '#2E7D32',     // Rich forest green
    secondary: '#4CAF50',   // Vibrant green
    accent: '#81C784',      // Light green
    hover: '#1B5E20',       // Dark forest green
    bg: 'rgba(46, 125, 50, 0.1)', // Transparent green
    border: 'rgba(46, 125, 50, 0.2)' // Border green
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1f2d]">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-[#2450A4]/20 bg-[#1a1f2d]/90 backdrop-blur">
        <div className="flex h-16 items-center px-4 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#2450A4]/20">
              <div className="relative">
                <Atom className="h-6 w-6 text-[#4B7BE5] absolute animate-pulse" />
                <Beaker className="h-5 w-5 text-[#4B7BE5]/70" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#e1e5ee] text-lg tracking-tight">ScienceHorizon</span>
              <span className="text-[10px] text-[#8b92a5] -mt-1">Explore. Learn. Discover.</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2 mx-6">
            {[
              { name: 'Biology', topics: biologyTopics, current: true },
              { name: 'Chemistry', topics: chemistryTopics, current: false },
              { name: 'Physics', topics: physicsTopics, current: false },
            ].map((subject) => (
              <DropdownMenu key={subject.name}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className={`text-sm group ${
                      subject.current ? 'bg-[#2450A4]/10 text-[#4B7BE5]' : 'text-[#e1e5ee]'
                    }`}
                  >
                    {subject.name}
                    <ChevronDown className="ml-1 h-4 w-4 text-current opacity-60" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-80 bg-[#232838] border-[#2450A4]/20"
                  align="start"
                >
                  <DropdownMenuLabel className="text-[#4B7BE5]">
                    Popular Topics in {subject.name}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#2450A4]/20" />
                  <DropdownMenuGroup>
                    {subject.topics.map((topic) => (
                      <DropdownMenuItem 
                        key={topic.title}
                        className="group cursor-pointer hover:bg-[#2E7D32]/10"
                      >
                        <div className="flex items-start gap-2 py-2">
                          <topic.icon className="h-5 w-5 text-[#4CAF50] group-hover:text-[#81C784] mt-0.5" />
                          <div>
                            <p className="font-medium text-[#81C784] group-hover:text-[#4CAF50]">
                              {topic.title}
                            </p>
                            <p className="text-xs text-[#8b92a5]">
                              {topic.desc}
                            </p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-[#2450A4]/20" />
                  <DropdownMenuItem className="hover:bg-[#2450A4]/10">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-[#4B7BE5] hover:text-[#5d89e8] hover:bg-transparent"
                    >
                      View All {subject.name} Topics
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            <Button variant="ghost" className="text-sm text-[#e1e5ee]">
              Resources
            </Button>
          </nav>

          {/* Search */}
          <div className="flex-1 flex items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search topics..."
                className="pl-8"
              />
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Calendar className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <AuthStatus />
          </div>
        </div>
      </header>

      {/* Main Content Area - Updated grid */}
      <div className="pt-16 flex min-h-screen">
        {/* Left Sidebar - Course Progress */}
        <div className="w-[250px] fixed top-16 bottom-0 left-0 border-r border-[#2450A4]/20 bg-[#1e2433] overflow-y-auto">
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="font-semibold text-[#e1e5ee]">Learning Progress</h2>
                <Badge variant="secondary">3 Courses</Badge>
              </div>

              {/* Course Progress Cards */}
              <Card className="p-4 bg-[#2450A4]/10 hover:shadow-md transition-shadow mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#8b92a5]">Biology</span>
                  <Badge variant="secondary" className="h-2 w-2 rounded-full p-0 bg-[#2E7D32]" />
                </div>
                <h3 className="font-medium mt-2 text-[#e1e5ee]">Cell Biology & Genetics</h3>
                <Progress 
                  value={80} 
                  className="mt-2 h-1 bg-[#2E7D32]/20"
                  style={{ 
                    "--progress-foreground": "#4CAF50"
                  } as React.CSSProperties} 
                />
              </Card>

              <Card className="p-4 bg-[#2450A4]/10 hover:shadow-md transition-shadow mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#8b92a5]">Chemistry</span>
                  <Badge variant="secondary" className="h-2 w-2 rounded-full p-0" />
                </div>
                <h3 className="font-medium mt-2 text-[#e1e5ee]">Organic Chemistry</h3>
                <Progress value={65} className="mt-2 h-1 bg-[#2450A4]/20" />
              </Card>

              <Card className="p-4 bg-[#2450A4]/10 hover:shadow-md transition-shadow mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#8b92a5]">Physics</span>
                  <Badge variant="secondary" className="h-2 w-2 rounded-full p-0" />
                </div>
                <h3 className="font-medium mt-2 text-[#e1e5ee]">Quantum Mechanics</h3>
                <Progress value={45} className="mt-2 h-1 bg-[#2450A4]/20" />
              </Card>
            </div>
          </ScrollArea>
        </div>

        {/* Center Content - Adjusted margin */}
        <main className="flex-1 ml-[250px]">
          <div className="p-6 max-w-[1200px] mx-auto">
            {/* Subject Overview Cards */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {subjects.map((stat) => (
                <HoverCard key={stat.title}>
                  <HoverCardTrigger>
                    <Card className={`p-4 bg-[#2E7D32]/10 hover:bg-[#2E7D32]/20 
                      transition-all border-l-4 border-[#4CAF50] group cursor-pointer`}>
                      <div className="flex items-center gap-3">
                        <Brain className="h-5 w-5 text-[#4CAF50]" />
                        <h4 className="text-sm font-medium text-[#81C784]">Biology</h4>
                      </div>
                      <p className="text-2xl font-semibold mt-2 text-[#e1e5ee]">{stat.value}</p>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{stat.title}</h4>
                        <p className="text-sm">
                          Explore various topics and interactive lessons in {stat.title.toLowerCase()}.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>

            {/* Featured Topics - Enhanced */}
            <Card className="p-6 mb-8 border-[#2450A4]/20 bg-[#232838]">
              <div className="flex items-center gap-2 mb-6">
                <Star className="h-5 w-5 text-yellow-500" />
                <h3 className="font-semibold text-[#4B7BE5]">Featured Topics</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <TooltipProvider>
                  {featuredTopics.map((topic) => (
                    <Tooltip key={topic.title}>
                      <TooltipTrigger>
                        <Card className="p-4 rounded-lg bg-[#2450A4]/10 hover:bg-[#2450A4]/20 
                          transition-all cursor-pointer group">
                          <div className="flex items-center gap-2 mb-2">
                            <topic.icon className="h-4 w-4 text-[#4B7BE5] group-hover:text-[#5d89e8]" />
                            <h4 className="text-[#e1e5ee] font-medium">{topic.title}</h4>
                          </div>
                          <p className="text-sm text-[#8b92a5]">{topic.subject}</p>
                          <Progress 
                            value={topic.progress} 
                            className="mt-3 h-1"
                            style={{ 
                              "--progress-background": "rgba(36, 80, 164, 0.2)",
                              "--progress-foreground": "#4B7BE5"
                            } as React.CSSProperties} 
                          />
                          <div className="flex items-center gap-2 mt-2">
                            <Clock className="h-3 w-3 text-[#8b92a5]" />
                            <span className="text-xs text-[#8b92a5]">2 hours</span>
                            <Users className="h-3 w-3 text-[#8b92a5] ml-2" />
                            <span className="text-xs text-[#8b92a5]">1.2k enrolled</span>
                          </div>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{topic.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </Card>

            {/* Two Column Layout for Body and Timeline */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Science Topics Overview */}
              <Card className="p-6 border-[#2E7D32]/20 bg-[#232838]">
                <h3 className="font-semibold mb-4 text-[#4CAF50]">Biology Fundamentals</h3>
                <div className="space-y-4">
                  {[
                    'Cell Structure and Function',
                    'Genetics and Inheritance',
                    'Evolution and Natural Selection',
                    'Human Anatomy and Physiology'
                  ].map((topic) => (
                    <div key={topic} className="flex gap-4 items-start border-l-2 border-[#2E7D32] pl-4 
                      hover:bg-[#2E7D32]/5 rounded-r-lg transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-2 -ml-5" />
                      <div className="flex-1">
                        <p className="font-medium text-[#81C784]">{topic}</p>
                        <p className="text-sm text-[#8b92a5] mt-1">
                          Comprehensive study materials and interactive lessons
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Chemistry Section */}
              <Card className="p-6 border-[#2450A4]/20 bg-[#232838]">
                <h3 className="font-semibold mb-4 text-[#4B7BE5]">Chemistry Concepts</h3>
                <div className="space-y-4">
                  {[
                    'Atomic Structure',
                    'Chemical Bonding',
                    'Thermodynamics',
                    'Organic Chemistry'
                  ].map((topic) => (
                    <div key={topic} className="flex gap-4 items-start border-l-2 border-[#2450A4] pl-4">
                      <div className="w-2 h-2 rounded-full bg-[#2450A4] mt-2 -ml-5" />
                      <div className="flex-1">
                        <p className="font-medium text-[#e1e5ee]">{topic}</p>
                        <p className="text-sm text-[#8b92a5] mt-1">
                          In-depth study of chemical principles
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Physics Section */}
            <Card className="p-6 mb-8 border-[#2450A4]/20 bg-[#232838]">
              <h3 className="font-semibold mb-4 text-[#4B7BE5]">Physics Principles</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: 'Classical Mechanics', icon: TrendingUp },
                  { title: 'Electromagnetism', icon: BookMarked },
                  { title: 'Modern Physics', icon: Atom },
                  { title: 'Waves and Optics', icon: BookOpen },
                  { title: 'Thermodynamics', icon: Beaker },
                  { title: 'Nuclear Physics', icon: Brain }
                ].map((topic) => (
                  <div key={topic.title} className="p-4 rounded-lg bg-[#2450A4]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <topic.icon className="h-4 w-4 text-[#4B7BE5]" />
                      <h4 className="text-[#e1e5ee] font-medium">{topic.title}</h4>
                    </div>
                    <Progress 
                      value={70} 
                      className="mt-3 h-1"
                      style={{ 
                        "--progress-background": "rgba(36, 80, 164, 0.2)",
                        "--progress-foreground": "#4B7BE5"
                      } as React.CSSProperties} 
                    />
                  </div>
                ))}
              </div>
            </Card>

            {/* Interactive Learning Modules */}
            <Card className="p-6 mb-8 border-[#2450A4]/20 bg-[#232838]">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-5 w-5 text-[#4B7BE5]" />
                <h3 className="font-semibold text-[#4B7BE5]">Interactive Learning</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: 'Virtual Lab', icon: Beaker, desc: 'Conduct experiments safely online' },
                  { title: '3D Models', icon: Atom, desc: 'Explore molecular structures' },
                  { title: 'Simulations', icon: Brain, desc: 'Interactive physics simulations' },
                  { title: 'Quiz Bank', icon: BookOpen, desc: 'Test your knowledge' },
                  { title: 'Video Library', icon: BookMarked, desc: 'Visual learning resources' },
                  { title: 'Study Groups', icon: Users, desc: 'Collaborative learning' }
                ].map((module) => (
                  <Card key={module.title} className="p-4 bg-[#2450A4]/10 hover:bg-[#2450A4]/20 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <module.icon className="h-4 w-4 text-[#4B7BE5]" />
                      <h4 className="text-[#e1e5ee] font-medium">{module.title}</h4>
                    </div>
                    <p className="text-sm text-[#8b92a5]">{module.desc}</p>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Achievement Tracking */}
            <Card className="p-6 mb-8 border-[#2450A4]/20 bg-[#232838]">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <h3 className="font-semibold text-[#4B7BE5]">Learning Achievements</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Lab Master', progress: 85, desc: 'Completed 15 virtual experiments' },
                  { title: 'Theory Expert', progress: 92, desc: 'Mastered core concepts' },
                  { title: 'Problem Solver', progress: 78, desc: 'Solved 200+ practice problems' },
                  { title: 'Quick Learner', progress: 88, desc: 'Consistent study streak' }
                ].map((achievement) => (
                  <div key={achievement.title} className="p-4 rounded-lg bg-[#2E7D32]/10">
                    <h4 className="text-[#81C784] font-medium mb-1">{achievement.title}</h4>
                    <p className="text-sm text-[#8b92a5] mb-3">{achievement.desc}</p>
                    <Progress 
                      value={achievement.progress} 
                      className="h-1 bg-[#2E7D32]/20"
                      style={{ 
                        "--progress-foreground": "#4CAF50"
                      } as React.CSSProperties} 
                    />
                    <span className="text-xs text-[#81C784] mt-1 block">
                      {achievement.progress}% Complete
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card className="p-6 border-[#2450A4]/20 bg-[#232838]">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-[#4B7BE5]" />
                <h3 className="font-semibold text-[#4B7BE5]">Science Events</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: 'Science Fair', date: 'Mar 15', type: 'Competition' },
                  { title: 'Chemistry Workshop', date: 'Mar 18', type: 'Workshop' },
                  { title: 'Physics Symposium', date: 'Mar 20', type: 'Conference' }
                ].map((event) => (
                  <Card key={event.title} className="p-4 bg-[#2450A4]/10">
                    <Badge className="mb-2 bg-[#2450A4]/20 text-[#4B7BE5]">{event.type}</Badge>
                    <h4 className="text-[#e1e5ee] font-medium mb-1">{event.title}</h4>
                    <div className="flex items-center gap-2 text-[#8b92a5]">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{event.date}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>

      {/* Footer - Adjusted margin */}
      <footer className="relative mt-auto border-t border-[#2450A4]/20 bg-[#1a1f2d]">
        <div className="ml-[250px]"> {/* Only left margin needed now */}
          <div className="max-w-[1200px] mx-auto py-6 px-8">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-[#e1e5ee] font-semibold mb-4">About ScienceHub</h4>
                <p className="text-sm text-[#8b92a5] leading-relaxed">
                  Empowering students with comprehensive science education through interactive learning experiences in Biology, Chemistry, and Physics.
                </p>
              </div>

              {/* Study Resources */}
              <div>
                <h4 className="text-[#e1e5ee] font-semibold mb-4">Study Resources</h4>
                <div className="space-y-2">
                  {[
                    'Video Lectures',
                    'Practice Problems',
                    'Lab Simulations',
                    'Study Guides'
                  ].map((link) => (
                    <Button key={link} variant="link" className="text-[#8b92a5] hover:text-[#4B7BE5] block text-sm p-0">
                      {link}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Science Topics */}
              <div>
                <h4 className="text-[#e1e5ee] font-semibold mb-4">Popular Topics</h4>
                <div className="space-y-2">
                  {[
                    'Molecular Biology',
                    'Quantum Mechanics',
                    'Organic Chemistry',
                    'Scientific Method'
                  ].map((link) => (
                    <Button key={link} variant="link" className="text-[#8b92a5] hover:text-[#4B7BE5] block text-sm p-0">
                      {link}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-[#e1e5ee] font-semibold mb-4">Contact Us</h4>
                <div className="space-y-2 text-sm text-[#8b92a5]">
                  <p>Email: support@sciencehub.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Address: 123 Science Ave</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-[#2450A4]/20 flex justify-between items-center">
              <span className="text-sm text-[#8b92a5]">
                © 2024 ScienceHub. All rights reserved.
              </span>
              <div className="flex items-center gap-4">
                {['twitter', 'linkedin', 'github'].map((social) => (
                  <Button key={social} variant="ghost" size="icon" className="hover:bg-[#2450A4]/10">
                    <Image src={`/${social}.svg`} alt={social} width={16} height={16} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
