
import { Link, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';

interface NavbarProps {
  showAuthButtons?: boolean;
}

export function Navbar({ showAuthButtons = true }: NavbarProps) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-sm pt-[env(safe-area-inset-top)]">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <Avatar className="h-9 w-9 rounded-xl border border-border/50 bg-muted/20">
              <AvatarImage src="/logo.png" alt="Logo" className="object-cover p-1.5 opacity-80" />
              <AvatarFallback className="rounded-xl bg-muted/20 text-muted-foreground text-xs">SH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <span className="text-base font-bold leading-none tracking-tight">
                上海中考择校
              </span>
              <span className="text-[11px] text-muted-foreground leading-none">
                智能择校，精准规划
              </span>
            </div>
          </Link>
        </div>
        {showAuthButtons && (
          <div className="flex items-center gap-2">
            {!isLoginPage && (
              <Button
                variant="ghost"
                size="sm"
                asChild
              >
                <Link to="/login">
                  登录
                </Link>
              </Button>
            )}
            {!isRegisterPage && (
              <Button
                size="sm"
                asChild
              >
                <Link to="/register">
                  注册
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
