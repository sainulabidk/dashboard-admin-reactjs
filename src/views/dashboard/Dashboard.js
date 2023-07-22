import React, { useState } from 'react';
import { Grid, Box, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import ReactQuill from 'react-quill'; // Import the react-quill component
import 'react-quill/dist/quill.snow.css'; // Import the react-quill CSS for styling

// Rest of your imports...

const Dashboard = () => {
  // Your existing state and event handlers...

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '', // Adding a new state for the textarea
  });

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here, if needed.
    console.log(formData);
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image',
  ];

  // Example table data (replace this with your actual data)
  const tableData = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 35, occupation: 'Designer' },
    // Add more rows as needed...
  ];

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
    

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                value={formData.firstName}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={formData.lastName}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Adress"
                label="Adress"
                variant="outlined"
                fullWidth
                value={formData.Adress}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Place"
                label="Place"
                variant="outlined"
                fullWidth
                value={formData.Place}
                onChange={handleFormChange}
              />
            </Grid>

            <Grid item xs={12}>
              {/* Adding the react-quill rich text editor */}
              <ReactQuill
      
                value={formData.message}
                onChange={(value) => setFormData({ ...formData, message: value })}
                modules={modules}
                formats={formats}
                style={{height:90}}
              />
            </Grid>

            <Grid item xs={12}>
              {/* Add the image upload component here */}
              {/* Replace "YourImageUploadComponent" with your actual component */}
              <TextField
              style={{marginTop:28}}
                name="upload-photo"
                type="file"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>FullName</TableCell>
                  <TableCell>Adress</TableCell>
                  <TableCell>Place</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>File</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.occupation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
