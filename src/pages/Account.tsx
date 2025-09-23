import { Navigate } from 'react-router-dom';
import { User, Wallet, Shield, Settings, LogOut, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PiBrowserAlert } from '@/components/PiBrowserAlert';
import { usePiSDK } from '@/hooks/usePiSDK';
import { useToast } from '@/hooks/use-toast';

export default function Account() {
  const { isAuthenticated, user, logout } = usePiSDK();
  const { toast } = useToast();
  const [copiedUid, setCopiedUid] = useState(false);

  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  const copyUid = async () => {
    try {
      await navigator.clipboard.writeText(user.uid);
      setCopiedUid(true);
      toast({
        title: "Copied!",
        description: "Pi User ID copied to clipboard",
      });
      setTimeout(() => setCopiedUid(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PiBrowserAlert />

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
          <p className="text-muted-foreground">
            Manage your Pi Network account and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="pi-card">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-pi rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <CardTitle>{user.username}</CardTitle>
                <Badge className="pi-badge mx-auto">
                  Pi Network User
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Pi User ID</label>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="flex-1 px-2 py-1 bg-muted rounded text-sm font-mono truncate">
                      {user.uid}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyUid}
                      className="flex-shrink-0"
                    >
                      {copiedUid ? (
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-success" />
                    <span className="text-success">Verified Pi User</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Wallet className="h-4 w-4 text-primary" />
                    <span>Payment Ready</span>
                  </div>
                </div>

                <Separator />

                <Button
                  variant="destructive"
                  size="sm"
                  className="w-full"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Account Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Information */}
            <Card className="pi-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Account Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Username</label>
                    <p className="mt-1 font-medium">{user.username}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Account Type</label>
                    <p className="mt-1 font-medium">Pi Network User</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                    <p className="mt-1 font-medium">December 2024</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Status</label>
                    <Badge className="mt-1 bg-success/10 text-success border-success/20">
                      Active
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wallet Information */}
            <Card className="pi-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="mr-2 h-5 w-5" />
                  Pi Wallet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-pi rounded-lg text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm opacity-90">Pi Network Wallet</span>
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">π</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold mb-1">Connected</p>
                  <p className="text-sm opacity-75">Ready for payments</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-success/5 border border-success/20 rounded-md">
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="font-medium text-sm">Payment Enabled</span>
                    </div>
                    <p className="text-xs text-success/80 mt-1">
                      You can make purchases with Pi
                    </p>
                  </div>
                  
                  <div className="p-3 bg-info/5 border border-info/20 rounded-md">
                    <div className="flex items-center gap-2 text-info">
                      <Shield className="h-4 w-4" />
                      <span className="font-medium text-sm">Secure Connection</span>
                    </div>
                    <p className="text-xs text-info/80 mt-1">
                      Protected by blockchain security
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="pi-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Two-Factor Authentication</p>
                      <p className="text-xs text-muted-foreground">
                        Managed by Pi Network
                      </p>
                    </div>
                    <Badge className="bg-success/10 text-success border-success/20">
                      Enabled
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Data Encryption</p>
                      <p className="text-xs text-muted-foreground">
                        End-to-end encrypted
                      </p>
                    </div>
                    <Badge className="bg-success/10 text-success border-success/20">
                      Active
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Payment Security</p>
                      <p className="text-xs text-muted-foreground">
                        Blockchain verified
                      </p>
                    </div>
                    <Badge className="bg-success/10 text-success border-success/20">
                      Protected
                    </Badge>
                  </div>
                </div>

                <div className="p-3 bg-primary/5 border border-primary/20 rounded-md">
                  <p className="text-sm text-primary">
                    💡 Your account security is managed by Pi Network's advanced blockchain technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}