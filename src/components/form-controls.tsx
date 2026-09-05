import type { ComponentProps, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea as BaseTextarea } from "@/components/ui/textarea";
import { Button as BaseButton } from "@/components/ui/button";

type FieldProps = ComponentProps<typeof Input> & {
  label: string;
  icon: LucideIcon;
  error?: string;
};

export function InputField({ label, icon: Icon, error, className, id, ...props }: FieldProps) {
  const fieldId = id || props.name;
  return (
    <div className="space-y-2">
      <Label htmlFor={fieldId} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      <div className="group relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-[#4F8CFF]" />
        <Input
          id={fieldId}
          className={cn(
            "h-12 rounded-xl border-border/80 bg-background/70 pl-10 shadow-sm transition-all placeholder:text-muted-foreground/70 focus-visible:border-[#4F8CFF] focus-visible:ring-4 focus-visible:ring-[#4F8CFF]/15",
            error && "border-destructive focus-visible:ring-destructive/15",
            className,
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

type TextAreaProps = ComponentProps<typeof BaseTextarea> & {
  label: string;
  icon?: LucideIcon;
  error?: string;
};

export function TextArea({ label, icon: Icon, error, className, id, ...props }: TextAreaProps) {
  const fieldId = id || props.name;
  return (
    <div className="space-y-2">
      <Label htmlFor={fieldId} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      <div className="group relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-[#4F8CFF]" />
        )}
        <BaseTextarea
          id={fieldId}
          className={cn(
            "resize-none rounded-xl border-border/80 bg-background/70 py-3 shadow-sm transition-all placeholder:text-muted-foreground/70 focus-visible:border-[#4F8CFF] focus-visible:ring-4 focus-visible:ring-[#4F8CFF]/15",
            Icon && "pl-10",
            error && "border-destructive focus-visible:ring-destructive/15",
            className,
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

export function Button({
  children,
  loading,
  className,
  ...props
}: ComponentProps<typeof BaseButton> & { loading?: boolean; children: ReactNode }) {
  return (
    <BaseButton
      className={cn("btn-primary-glow h-12 rounded-xl px-6 font-semibold", className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </BaseButton>
  );
}
