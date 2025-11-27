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
import { type FormState } from "@/validation/auth";
import { useActionState } from "react";
import { actions } from "@/actions";
import { FormError } from "./form-error";

const INITIAL_STATE: FormState = {
  success: false,
  message: undefined,
  strapiErrors: null,
  zodErrors: null,
  data: {
    identifier: "",
    password: "",
  },
};

export function SignInForm() {
  const [formState, formAction] = useActionState(
      actions.auth.loginUserAction,
      INITIAL_STATE
    );
    console.log(formState);
  return (
    <div className="w-full max-w-md">
      <form  action={formAction}>
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Iniciar sesión</CardTitle>
            <CardDescription className="text-center text-sm text-muted-foreground">
              Accede con tu usuario y contraseña
            </CardDescription>
          </CardHeader>

          <CardContent>
              <div className="space-y-2">
                <Label htmlFor="identifier" className="mt-1">Nombre o Email</Label>
                <Input
                  id="identifier"
                  name="identifier"
                  type="text"
                  placeholder="usuario o email"
                  className="mt-1"
                  defaultValue={formState.data?.identifier ?? ""}
                />
                <FormError error={formState.zodErrors?.identifier} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="mt-1">Contraseña</Label>
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
                  Entrar
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
              ¿No tienes cuenta?{" "}
              <Link href="/signup" className="text-primary underline">
                Regístrate
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
