import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";

const deleteSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type DeleteForm = z.infer<typeof deleteSchema>;

export default function DeleteAccount() {
  const { t } = useI18n();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<DeleteForm>({
    resolver: zodResolver(deleteSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: DeleteForm) => {
    setIsPending(true);
    try {
      await apiRequest("POST", "/api/delete-account", data);
      toast({
        title: t("delete.success") || "Account deleted successfully",
      });
      setLocation("/");
    } catch (error: any) {
      toast({
        title: t("delete.error") || "Error deleting account",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pt-20">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-card p-8 rounded-3xl border shadow-xl"
        >
          <h1 className="text-3xl font-bold mb-2 text-center text-primary">
            {t("nav.delete_account") || "Delete Account"}
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            {t("delete.confirm") || "Please enter your credentials to permanently delete your account."}
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.email")}</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} className="rounded-xl h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("password") || "Password"}</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} className="rounded-xl h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="destructive"
                className="w-full h-12 rounded-xl text-lg font-semibold"
                disabled={isPending}
              >
                {isPending ? t("contact.submitting") : (t("nav.delete_account") || "Delete Account")}
              </Button>
            </form>
          </Form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
