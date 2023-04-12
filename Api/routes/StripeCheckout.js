const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_KEY);
require("dotenv").config();
const router = express.Router();
router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.products.map(item => {
    return {
      price_data: {
        currency: "jpy",
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.brand,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price,
      },
      quantity: 1,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}success`,
    cancel_url: `${process.env.CLIENT_URL}cart`,
  });
  res.send({ url: session.url });
});
module.exports = router;
