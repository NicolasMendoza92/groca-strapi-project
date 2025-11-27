"use client";
import { logoutUserAction } from "@/actions/auth";
import { Button } from "./ui/button";

interface LogoutButtonProps {
  isLogged: boolean
}

export default function LogoutButton({ isLogged }: LogoutButtonProps) {
  
  const handleLogout = async () => {
    await logoutUserAction();
  };

  if (!isLogged) return null

  return <Button variant="destructive" onClick={handleLogout}>Cerrar Sesión</Button>;
}