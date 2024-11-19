import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Newusers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID",align: "center",headerAlign: "center"  },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      align: "center" ,headerAlign: "center"
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      align: "center" ,headerAlign: "center"
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center" ,headerAlign: "center"
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      align: "center",headerAlign: "center" 
    },
  ];

  return (
    <Box m="10px">
      <Header title="NEW REQUIEST" subtitle="List of New Members Requiest " />
      <Box
        m="10px 0 0 0"
        height="65vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
        }}
      >
         
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
      <Box display="flex" justifyContent="end" mt="10px">
              <Button type="submit" color="secondary" variant="contained">
                Accept
              </Button>
            </Box>
   </Box>
  );
};

export default Newusers;
