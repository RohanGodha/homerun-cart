import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "../product/ProductCard";

export default function ProductGrid({ products }) {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
     <Grid
  container
  spacing={2}
  justifyContent="center"
  sx={{ display: "flex", flexWrap: "wrap" }}
>
  {products.map((p) => (
    <Grid item key={p.id} sx={{ flex: "0 1 220px" }}>
      <ProductCard product={p} />
    </Grid>
  ))}
</Grid>
    </Container>
  );
}



// import React from "react";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import ProductCard from "../product/ProductCard";

// export default function ProductGrid({ products }) {
//   return (
//     <Container sx={{ py: 4 }}>
//       <Grid container spacing={3}>
//         {products.map((p) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
//             <ProductCard product={p} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }