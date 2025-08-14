import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { useCart } from "../../context/CartContext";
import useMaxQuantity from "../../hooks/useMaxQuantity";
import QuantityControls from "./QuantityControls";
import CementModel from "./CementModel";
import Typography from "@mui/material/Typography";

export default function ProductCard({ product }) {
  const { items, setQuantity, MAX_QTY } = useCart();
  const qty = items[product.id] || 0;
  const { isMax, message } = useMaxQuantity(qty);

  const handleAdd = () => setQuantity(product.id, 1);
  const inc = (by = 1) => {
    const target = Math.min(qty + by, MAX_QTY);
    setQuantity(product.id, target);
  };
  const dec = (by = 1) => {
    const target = qty - by;
    setQuantity(product.id, target <= 0 ? 0 : target);
  };

  return (
    <Card elevation={2} sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {product.use3D && /\.(glb|gltf)$/i.test(product.image) ? (
        <Box sx={{ height: 200 }}>
          <CementModel modelPath={product.image} />
        </Box>
      ) : (
        <Box sx={{ p: '0.5rem' }}>
          <CardMedia
            component="img"
            maxHeight="300px"
            width="auto"
            image={
              product.image && !product.image.endsWith(".pdf")
                ? product.image
                : "https://via.placeholder.com/400x260?text=Product"
            }
            alt={product.name}
          />
        </Box>
      )}
  
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          {product.name}
        </Typography>
        <Box mt={1}>
          <Typography component="span" variant="h6" fontWeight={700}>
            ₹{product.price}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: "line-through", ml: 1 }}
          >
            ₹{product.mrp}
          </Typography>
        </Box>
      </CardContent>
  
      <CardActions sx={{ p: 2 }}>
        <Box width="100%">
          {qty === 0 ? (
            <Button variant="contained" fullWidth color="primary" onClick={handleAdd}>
              ADD
            </Button>
          ) : (
            <QuantityControls
              qty={qty}
              onInc={() => inc(1)}
              onDec={() => dec(1)}
              onIncBy5={() => inc(5)}
              onDecBy5={() => dec(5)}
              maxReached={isMax}
            />
          )}
  
          {isMax && (
            <Alert severity="error" sx={{ mt: 1, fontSize: "0.85rem" }}>
              {message}
            </Alert>
          )}
        </Box>
      </CardActions>
    </Card>
  );
  
}
