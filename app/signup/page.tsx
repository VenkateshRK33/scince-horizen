"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Atom, Beaker } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from 'react';

const particles = [
  { top: "20%", right: "10%", delay: "0s" },
  { top: "50%", right: "5%", delay: "0.5s" },
  { top: "80%", right: "15%", delay: "1s" }
];

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#1a1f2d]">
      {/* Left Side - Science Theme Illustration */}
      <div className="w-1/2 bg-[#232838] p-8 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4B7BE5] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#2E7D32] rounded-full filter blur-3xl animate-pulse delay-700" />
        </div>

        <div 
          className="relative w-[400px] h-[400px] animate-fade-in-scale"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#2E7D32] rounded-lg opacity-90" />
          <div className="absolute top-10 left-20 w-32 h-32 bg-[#2450A4] rounded-lg opacity-90" />
          <div className="absolute top-20 left-40 w-32 h-32 bg-[#4B7BE5] rounded-lg opacity-90" />
          <div className="absolute bottom-0 left-10 w-40 h-40 bg-[#81C784] rounded-full flex items-center justify-center opacity-90">
            <div className="animate-pulse">
              <Atom className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-1/2 p-8 flex items-center justify-center">
        <Card className="w-full max-w-md bg-[#232838] border-[#2450A4]/20">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#2450A4]/20">
                  <div className="relative">
                    <Atom className="h-8 w-8 text-[#4B7BE5] absolute animate-pulse" />
                    <Beaker className="h-6 w-6 text-[#4B7BE5]/70" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#e1e5ee] text-lg tracking-tight">
                    ScienceHorizon
                  </span>
                  <span className="text-[10px] text-[#8b92a5] -mt-1">
                    Explore. Learn. Discover.
                  </span>
                </div>
              </Link>
            </div>
            <CardTitle className="text-2xl font-semibold text-center text-[#e1e5ee]">
              Create an account
            </CardTitle>
            <CardDescription className="text-[#8b92a5] text-center">
              Start your scientific journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#e1e5ee]">First name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-[#1a1f2d] border-[#2450A4]/20 text-[#e1e5ee] placeholder:text-[#8b92a5]
                      focus:ring-2 focus:ring-[#4B7BE5] focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#e1e5ee]">Last name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-[#1a1f2d] border-[#2450A4]/20 text-[#e1e5ee] placeholder:text-[#8b92a5]
                      focus:ring-2 focus:ring-[#4B7BE5] focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#e1e5ee]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#1a1f2d] border-[#2450A4]/20 text-[#e1e5ee] placeholder:text-[#8b92a5]
                    focus:ring-2 focus:ring-[#4B7BE5] focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#e1e5ee]">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="bg-[#1a1f2d] border-[#2450A4]/20 text-[#e1e5ee] placeholder:text-[#8b92a5]
                      focus:ring-2 focus:ring-[#4B7BE5] focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b92a5] hover:text-[#e1e5ee] transition-colors"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <Button 
                className="w-full bg-[#4B7BE5] hover:bg-[#2450A4] text-white transition-colors"
              >
                Create account
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-[#2450A4]/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#232838] px-2 text-[#8b92a5]">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full border-[#2450A4]/20 text-[#e1e5ee] hover:bg-[#2450A4]/10 transition-colors"
            >
              <Image
                src="/google.svg"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign up with Google
            </Button>
          </CardContent>
          <CardFooter>
            <div className="text-center w-full text-sm text-[#8b92a5]">
              Already have an account?{" "}
              <Link 
                href="/login" 
                className="text-[#4B7BE5] hover:text-[#2450A4] hover:underline transition-colors"
              >
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 