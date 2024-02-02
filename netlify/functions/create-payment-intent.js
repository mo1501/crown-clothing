import dotenv from "dotenv/config";
import stripePackage from "stripe";
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);
console.log("Stripe-key", process.env.STRIPE_SECRET_KEY);




export async function handler(event) {
    try {
        const { amount } = JSON.parse(event.body);
        console.log("Payment-intent-amount", amount);
        console.log("Stripe-key", process.env.STRIPE_SECRET_KEY);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch (error) {
        console.log({ error });

        return {
            statusCode: 400,

            body: JSON.stringify({ error }),
        };
    }
}