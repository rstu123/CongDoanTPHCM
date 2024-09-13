import React, { useState } from "react";
import Hero from '@/components/home/hero';
import UserNavbar from './userNavbar';
import Footer from '@/layouts/footer';
import { Box, Button, Avatar, Grid, Paper, Typography, Input, TextField, IconButton, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert'; // Import Alert for the success message
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link'; // Import Next.js Link

const UserPage: React.FC = () => {
  const [avatar, setAvatar] = useState<string>('/avatar.jpg');
  const [username, setUsername] = useState<string>('Nguyen Van A');
  const [email, setEmail] = useState<string>('example@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState<string>('0901234567');
  const [password, setPassword] = useState<string>('password123');
  
  // Temporary states for the form inputs
  const [tempUsername, setTempUsername] = useState<string>(username);
  const [tempEmail, setTempEmail] = useState<string>(email);
  const [tempPhoneNumber, setTempPhoneNumber] = useState<string>(phoneNumber);
  const [tempPassword, setTempPassword] = useState<string>(password);
  
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          setAvatar(e.target.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmitChanges = () => {
    // Apply the changes from temp states to the actual profile states
    setUsername(tempUsername);
    setEmail(tempEmail);
    setPhoneNumber(tempPhoneNumber);
    setPassword(tempPassword);

    // Show success message
    setShowSuccessMessage(true);

    // Optional: You could add an API call here to save the changes in a database.
  };

  const handleCloseSnackbar = () => {
    setShowSuccessMessage(false); // Close the success message
  };

  return (
    <>
      <Hero />
      <UserNavbar />

      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        {/* Greeting */}
        <Typography variant="h4" gutterBottom>
          Xin chào {username}
        </Typography>

        <Grid container spacing={4} style={{ maxWidth: '1000px' }}>
          {/* Left Side: Avatar and Change Button */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
              <Avatar alt="User Avatar" src={avatar} style={{ width: '150px', height: '150px', marginBottom: '10px' }} />
              <label htmlFor="avatar-upload">
                <Input
                  id="avatar-upload"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleAvatarChange}
                />
                <Button variant="outlined" color="primary" component="span">
                  Thay đổi ảnh
                </Button>
              </label>
            </Box>
          </Grid>

          {/* Right Side: User Input Fields */}
          <Grid item xs={12} sm={8}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <TextField
                label="Họ và Tên"
                fullWidth
                value={tempUsername} // Use temporary state
                onChange={(e) => setTempUsername(e.target.value)} // Set temp state
                style={{ marginBottom: '20px' }}
              />
              <TextField
                label="Email"
                fullWidth
                value={tempEmail} // Use temporary state
                onChange={(e) => setTempEmail(e.target.value)} // Set temp state
                style={{ marginBottom: '20px' }}
              />
              <TextField
                label="Số điện thoại"
                fullWidth
                value={tempPhoneNumber} // Use temporary state
                onChange={(e) => setTempPhoneNumber(e.target.value)} // Set temp state
                style={{ marginBottom: '20px' }}
              />
              <TextField
                label="Mật khẩu"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                value={tempPassword} // Use temporary state
                onChange={(e) => setTempPassword(e.target.value)} // Set temp state
                style={{ marginBottom: '20px' }}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={toggleShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )
                }}
              />

              {/* Submit Changes Button */}
              <Button variant="contained" color="primary" fullWidth onClick={handleSubmitChanges}>
                Submit Changes
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Buttons below inputs, arranged in 2x2 rectangle */};
        <Grid container spacing={2} style={{ marginTop: '40px', maxWidth: '800px', marginBottom: '40px'}}>
          <Grid item xs={12} sm={6}>
            <Link href="/profile/file-submission" passHref>
              <Button variant="contained" fullWidth style={{ height: '100px' }}>
                Nộp tài liệu
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link href="/profile/annual-evaluation" passHref>
              <Button variant="contained" fullWidth style={{ height: '100px' }}>
                Đánh giá thường niên
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link href="/profile/events" passHref>
              <Button variant="contained" fullWidth style={{ height: '100px' }}>
                Sự kiện
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link href="/profile/calendar" passHref>
              <Button variant="contained" fullWidth style={{ height: '100px' }}>
                Lịch
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled">
          Thay đổi thông tin thành công
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
};

export default UserPage;
