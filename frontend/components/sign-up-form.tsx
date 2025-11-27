"use client";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { actions } from "@/actions";
import { useActionState } from "react";
import { type FormState } from "@/validation/auth";
import { FormError } from "./form-error";

const INITIAL_STATE: FormState = {
  success: false,
  message: undefined,
  strapiErrors: null,
  zodErrors: null,
  data: {
    username: "",
    email: "",
    password: "",
  },
};

export function SignUpForm() {
  const [formState, formAction] = useActionState(
    actions.auth.registerUserAction,
    INITIAL_STATE
  );
  console.log(formState);

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Crea tu cuenta</CardTitle>
            <CardDescription className="text-center text-sm text-muted-foreground">
              Registrate y comienza la aventra
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="username" className="mt-1">
                Usuario
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="nombre de usuario"
                className="mt-1"
                defaultValue={formState.data?.username ?? ""}
              />
              <FormError error={formState.zodErrors?.username} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="mt-1">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="test@email.com"
                className="mt-1"
                defaultValue={formState.data?.email ?? ""}
              />
              <FormError error={formState.zodErrors?.email} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="mt-1">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="mt-1"
                defaultValue={formState.data?.password ?? ""}
              />
              <FormError error={formState.zodErrors?.password} />
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full">
                Registrarse
              </Button>
              {formState.strapiErrors && (
                <p className="text-red-500 text-xs italic mt-1 py-2">
                  {formState.strapiErrors.message}
                </p>
              )}
            </div>
          </CardContent>

          <CardFooter className="px-6 pb-6 pt-0">
            <p className="text-center text-sm text-muted-foreground">
              ¿Ya tienes cuenta?{" "}
              <Link href="/signin" className="text-primary underline">
                Inicia sesión
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
