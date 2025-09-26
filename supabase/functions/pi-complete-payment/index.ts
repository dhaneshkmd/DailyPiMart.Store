import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { paymentId, txid } = await req.json()
    
    if (!paymentId || !txid) {
      return new Response(
        JSON.stringify({ error: 'Payment ID and transaction ID are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Get the Pi Server API Key from environment
    const piServerKey = Deno.env.get('PI_SERVER_API_KEY')
    if (!piServerKey) {
      console.error('PI_SERVER_API_KEY not configured')
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Complete the payment with Pi Network
    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${piServerKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ txid }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Pi API error:', response.status, errorText)
      
      return new Response(
        JSON.stringify({ 
          error: 'Failed to complete payment with Pi Network',
          details: errorText 
        }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const paymentData = await response.json()
    
    return new Response(
      JSON.stringify(paymentData),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error completing Pi payment:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})