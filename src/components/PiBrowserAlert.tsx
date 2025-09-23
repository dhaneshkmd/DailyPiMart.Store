import { AlertTriangle, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { usePiSDK } from '@/hooks/usePiSDK';

export function PiBrowserAlert() {
  const { isReady, isChecking } = usePiSDK();

  // Don't show anything while checking
  if (isChecking) return null;

  // Don't show if Pi SDK is ready
  if (isReady) return null;

  return (
    <Alert className="border-warning bg-warning/10 mb-6">
      <AlertTriangle className="h-4 w-4 text-warning" />
      <AlertDescription className="flex items-center justify-between">
        <span className="text-warning-foreground">
          For the full Pi experience including payments, please open this site in Pi Browser.
        </span>
        <Button
          variant="outline"
          size="sm"
          className="ml-4 border-warning text-warning hover:bg-warning hover:text-warning-foreground"
          onClick={() => window.open('https://pi.app', '_blank')}
        >
          Get Pi Browser
          <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}