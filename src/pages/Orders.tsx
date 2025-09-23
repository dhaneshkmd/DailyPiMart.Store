import { Navigate } from 'react-router-dom';
import { Package, Calendar, CreditCard, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PiBrowserAlert } from '@/components/PiBrowserAlert';
import { usePiSDK } from '@/hooks/usePiSDK';

// Mock orders data - in a real app, this would come from your API
const mockOrders = [
  {
    id: 'DPM-1703123456789',
    status: 'completed' as const,
    amountPi: 45.99,
    itemCount: 2,
    txid: '0x1234567890abcdef',
    createdAt: '2024-12-21T10:30:00Z',
    items: [
      { title: 'Premium Coffee Beans - 1kg', quantity: 1, price: 24.99 },
      { title: 'Organic Chocolate', quantity: 1, price: 20.99 },
    ]
  },
  {
    id: 'DPM-1703109876543',
    status: 'pending' as const,
    amountPi: 129.99,
    itemCount: 1,
    createdAt: '2024-12-20T15:45:00Z',
    items: [
      { title: 'Smart Home Hub', quantity: 1, price: 129.99 },
    ]
  },
  {
    id: 'DPM-1703096543210',
    status: 'cancelled' as const,
    amountPi: 79.99,
    itemCount: 1,
    createdAt: '2024-12-19T09:15:00Z',
    items: [
      { title: 'Premium Yoga Mat', quantity: 1, price: 79.99 },
    ]
  },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'completed':
      return {
        icon: CheckCircle,
        color: 'text-success',
        bg: 'bg-success/10',
        border: 'border-success/20',
        label: 'Completed'
      };
    case 'pending':
      return {
        icon: Clock,
        color: 'text-warning',
        bg: 'bg-warning/10',
        border: 'border-warning/20',
        label: 'Processing'
      };
    case 'cancelled':
      return {
        icon: XCircle,
        color: 'text-destructive',
        bg: 'bg-destructive/10',
        border: 'border-destructive/20',
        label: 'Cancelled'
      };
    default:
      return {
        icon: Clock,
        color: 'text-muted-foreground',
        bg: 'bg-muted/10',
        border: 'border-muted/20',
        label: 'Unknown'
      };
  }
};

export default function Orders() {
  const { isAuthenticated, user } = usePiSDK();

  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PiBrowserAlert />

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Orders</h1>
          <p className="text-muted-foreground">
            Track and manage your Pi marketplace orders
          </p>
        </div>

        {mockOrders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">No orders yet</h2>
            <p className="text-muted-foreground mb-8">
              Start shopping to see your orders here
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {mockOrders.map((order) => {
              const statusConfig = getStatusConfig(order.status);
              const StatusIcon = statusConfig.icon;

              return (
                <Card key={order.id} className="pi-card">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(order.createdAt).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Package className="h-4 w-4" />
                            {order.itemCount} {order.itemCount === 1 ? 'item' : 'items'}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-baseline gap-1">
                            <span className="text-lg font-bold text-primary">
                              {order.amountPi.toFixed(2)}
                            </span>
                            <span className="text-sm text-muted-foreground">π</span>
                          </div>
                          {order.txid && (
                            <div className="text-xs text-muted-foreground">
                              TX: {order.txid.substring(0, 8)}...
                            </div>
                          )}
                        </div>
                        
                        <Badge
                          className={`${statusConfig.bg} ${statusConfig.border} ${statusConfig.color} border`}
                        >
                          <StatusIcon className="mr-1 h-3 w-3" />
                          {statusConfig.label}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Items Ordered:</h4>
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm p-2 bg-accent/30 rounded">
                          <span>
                            {item.quantity}x {item.title}
                          </span>
                          <span className="font-medium">
                            {item.price.toFixed(2)}π
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Transaction Details */}
                    {order.status === 'completed' && order.txid && (
                      <div className="p-3 bg-success/5 border border-success/20 rounded-md">
                        <div className="flex items-center gap-2 text-success text-sm">
                          <CreditCard className="h-4 w-4" />
                          <span className="font-medium">Payment Confirmed</span>
                        </div>
                        <p className="text-xs text-success/80 mt-1">
                          Transaction ID: {order.txid}
                        </p>
                      </div>
                    )}

                    {order.status === 'pending' && (
                      <div className="p-3 bg-warning/5 border border-warning/20 rounded-md">
                        <div className="flex items-center gap-2 text-warning text-sm">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">Processing Payment</span>
                        </div>
                        <p className="text-xs text-warning/80 mt-1">
                          Your order is being processed. You'll receive a confirmation soon.
                        </p>
                      </div>
                    )}

                    {order.status === 'cancelled' && (
                      <div className="p-3 bg-destructive/5 border border-destructive/20 rounded-md">
                        <div className="flex items-center gap-2 text-destructive text-sm">
                          <XCircle className="h-4 w-4" />
                          <span className="font-medium">Order Cancelled</span>
                        </div>
                        <p className="text-xs text-destructive/80 mt-1">
                          This order was cancelled. If you have questions, contact support.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}