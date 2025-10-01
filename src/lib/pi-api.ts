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

// Get the Supabase URL from the current location or environment
const getSupabaseUrl = () => {
  // In production, this will be the actual Supabase project URL
  // During development, it might be localhost
  return import.meta.env.VITE_SUPABASE_URL || window.location.origin;
};

// Frontend API calls to our backend
export const piAPI = {
  // Verify user authentication with Pi Network
  async verifyUser(accessToken: string): Promise<PiUser> {
    const supabaseUrl = getSupabaseUrl();
    const response = await fetch(`${supabaseUrl}/functions/v1/pi-verify-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accessToken }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to verify user:', errorText);
      throw new Error('Failed to verify user with Pi Network');
    }

    return response.json();
  },

  // Approve payment on Pi Network
  async approvePayment(paymentId: string): Promise<PiPayment> {
    const supabaseUrl = getSupabaseUrl();
    const response = await fetch(`${supabaseUrl}/functions/v1/pi-approve-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentId }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to approve payment:', errorText);
      throw new Error('Failed to approve payment');
    }

    return response.json();
  },

  // Complete payment on Pi Network
  async completePayment(paymentId: string, txid: string): Promise<PiPayment> {
    const supabaseUrl = getSupabaseUrl();
    const response = await fetch(`${supabaseUrl}/functions/v1/pi-complete-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentId, txid }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to complete payment:', errorText);
      throw new Error('Failed to complete payment');
    }

    return response.json();
  },

  // Get payment details
  async getPayment(paymentId: string): Promise<PiPayment> {
    const supabaseUrl = getSupabaseUrl();
    const response = await fetch(`${supabaseUrl}/functions/v1/pi-get-payment/${paymentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to get payment details:', errorText);
      throw new Error('Failed to get payment details');
    }

    return response.json();
  },

  // Cancel an incomplete payment (if needed)
  async cancelPayment(paymentId: string): Promise<PiPayment> {
    const supabaseUrl = getSupabaseUrl();
    const response = await fetch(`${supabaseUrl}/functions/v1/pi-cancel-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentId }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to cancel payment:', errorText);
      throw new Error('Failed to cancel payment');
    }

    return response.json();
  },
};