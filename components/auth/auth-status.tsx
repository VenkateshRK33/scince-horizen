'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  User, 
  Settings, 
  LogOut, 
  LogIn,
  UserPlus,
  BookOpen, 
  Heart, 
  History 
} from "lucide-react";

export function AuthStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with your auth state management

  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/login">
          <Button variant="ghost" className="text-[#e1e5ee] hover:bg-[#2450A4]/10">
            Log in
          </Button>
        </Link>
        <Link href="/signup">
          <Button className="bg-[#2450A4] text-white hover:bg-[#2450A4]/90">
            Sign up
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/user-avatar.png" alt="User" />
            <AvatarFallback className="bg-[#2450A4]/10 text-[#4B7BE5]">US</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      {/* Rest of the dropdown content as shown above */}
    </DropdownMenu>
  );
} 