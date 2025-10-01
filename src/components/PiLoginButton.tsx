import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { usePiSDK } from '@/hooks/usePiSDK';
import { useToast } from '@/hooks/use-toast';
import { Loader2, LogIn } from 'lucide-react';

interface PiLoginButtonProps {
  onSuccess?: () => void;
  className?: string;
}

export function PiLoginButton({ onSuccess, className }: PiLoginButtonProps) {
  const { isReady, isAuthenticating, authenticate, isLoadingSession } = usePiSDK();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!isReady) {
      toast({
        title: "Pi Browser Required",
        description: "Please open this app in Pi Browser to sign in with Pi.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const user = await authenticate();
      toast({
        title: "Welcome to Daily Pi Mart!",
        description: `Signed in as ${user.username}`,
      });
      onSuccess?.();
    } catch (error) {
      toast({
        title: "Sign In Failed",
        description: "Unable to sign in with Pi. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = !isReady || isAuthenticating || isLoading || isLoadingSession;

  return (
    <Button
      onClick={handleLogin}
      disabled={isDisabled}
      className={className}
      variant="default"
    >
      {(isAuthenticating || isLoading) ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing in...
        </>
      ) : (
        <>
          <LogIn className="mr-2 h-4 w-4" />
          Sign in with Pi
        </>
      )}
    </Button>
  );
}