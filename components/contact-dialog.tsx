"use client";

import { useMutation } from "@tanstack/react-query";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";
import { useContactModal } from "@/stores/contact-modal";

// Envia para Netlify Forms (form estático em public/__forms.html).
async function submitContact(form: FormData) {
  const body = new URLSearchParams();
  form.forEach((value, key) => body.append(key, String(value)));
  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}

export function ContactDialog({ dict }: { dict: Dictionary }) {
  const { open, setOpen } = useContactModal();
  const t = dict.contact;
  const mutation = useMutation({ mutationFn: submitContact });

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) mutation.reset();
      }}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">{t.title}</DialogTitle>
          <DialogDescription>{t.description}</DialogDescription>
        </DialogHeader>

        {mutation.isSuccess ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle2 className="size-10 text-white" />
            <p>{t.success}</p>
          </div>
        ) : (
          <form
            name="contact"
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              mutation.mutate(new FormData(e.currentTarget));
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="locale" value={dict.locale} />
            <p className="hidden">
              <label>
                bot <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
              <div className="grid gap-2">
                <Label htmlFor="contact-name">{t.name}</Label>
                <Input id="contact-name" name="name" required autoComplete="name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-email">{t.email}</Label>
                <Input id="contact-email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-company">{t.company}</Label>
              <Input id="contact-company" name="company" autoComplete="organization" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-message">{t.message}</Label>
              <Textarea id="contact-message" name="message" required rows={5} placeholder={t.messagePlaceholder} />
            </div>

            {mutation.isError && (
              <p className="text-sm text-destructive">
                {t.error}{" "}
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
              </p>
            )}

            <Button
              type="submit"
              disabled={mutation.isPending}
              className="h-11 rounded-full bg-white font-medium text-black hover:bg-neutral-200"
            >
              {mutation.isPending ? t.sending : t.submit}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              {t.orEmail}{" "}
              <a href={`mailto:${site.email}`} className="underline hover:text-foreground">
                {site.email}
              </a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
