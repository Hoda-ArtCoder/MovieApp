import { Height } from "@mui/icons-material";
import axiosInstance from "../../apis/config";
import { Box, Typography ,Grid2, CardMedia } from "@mui/material";






const ProductionCompanies = ({ companies }) => {
    return (
      <Box sx={{ marginTop: 2 }}>

        <Grid2 container spacing={4}>
          {companies?.map((company) => (
            <Grid2 item  key={company.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {company.logo_path ? (
                  <CardMedia
                    component="img"
                    image={`${axiosInstance.defaults.posterURL}${company.logo_path}`}
                    alt={company.name}
                    sx={{ maxWidth: 100, maxHeight: "auto", marginBottom: 1 }}
                  />
                ) : (
                    <Typography variant="body2">{company.name}</Typography>
                )}
               
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    );
  };
  
  export default ProductionCompanies