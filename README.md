# homerun-cart
Submission For Homerun Cart Assignment

# HomeRun — Add to Cart Demo

React + MUI + react-three-fiber demo replicating HomeRun’s Add -> Quantity inline behavior.

## Features
- Product grid (static JSON)
- Add button transforms to quantity controls (`<<`, `-`, `Qty`, `+`, `>>`)
- Per-product isolated quantity synced to global CartContext
- Max quantity (20) enforcement + inline error message
- Cart badge updates in real-time
- Lightweight 3D cement bag representation using react-three-fiber (no external models needed)
- LocalStorage persistence

## Run locally
```bash
npm install
npm run dev
# open http://localhost:5173
