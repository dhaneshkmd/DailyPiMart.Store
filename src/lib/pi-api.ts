// Pi Network API client
const PI_API_BASE = 'https://api.minepi.com/v2';

export interface PiUser {
  uid: string;
  username?: string;
  credentials: {
    scopes: string[];
    valid_until: {
      timestamp: number;
      iso8601: string;
    };
  };
}

export interface PiPayment {
  identifier: string;
  user_uid: string;
  amount: number;
  memo: string;
  metadata: Record<string, any>;
  from_address: string;
  to_address: string;
  direction: 'user_to_app' | 'app_to_user';
  created_at: string;
  network: 'Pi Network' | 'Pi Testnet';
  status: {
    developer_approved: boolean;
    transaction_verified: boolean;
    developer_completed: boolean;
    cancelled: boolean;
    user_cancelled: boolean;
  };
  transaction: {
    txid: string;
    verified: boolean;
    _link: string;
  } | null;
}

// Frontend API calls to our backend
export const piAPI = {
  // Verify user authentication with Pi Network
  async verifyUser(accessToken: string): Promise<PiUser> {
    const response = await fetch('/api/pi/verify-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accessToken }),
    });

    if (!response.ok) {
      throw new Error('Failed to verify user with Pi Network');
    }

    return response.json();
  },

  // Approve payment on Pi Network
  async approvePayment(paymentId: string): Promise<PiPayment> {
    const response = await fetch('/api/pi/approve-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentId }),
    });

    if (!response.ok) {
      throw new Error('Failed to approve payment');
    }

    return response.json();
  },

  // Complete payment on Pi Network
  async completePayment(paymentId: string, txid: string): Promise<PiPayment> {
    const response = await fetch('/api/pi/complete-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentId, txid }),
    });

    if (!response.ok) {
      throw new Error('Failed to complete payment');
    }

    return response.json();
  },

  // Get payment details
  async getPayment(paymentId: string): Promise<PiPayment> {
    const response = await fetch(`/api/pi/payments/${paymentId}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to get payment details');
    }

    return response.json();
  },
};