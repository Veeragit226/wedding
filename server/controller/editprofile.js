const Profile = require('../models/profiles')

const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage });
  
  // Create an endpoint to update user profile
  app.post('/api/update-profile', upload.single('image'), async (req, res) => {
    try {
      const {
        name, email, phone, password, gender, city, dob, age, height, weight,
        jobType, companyName, degree, institute, hobbies
      } = req.body;
  
      const image = req.file ? req.file.path : undefined;
  
      const updatedUser = await User.findOneAndUpdate(
        { email }, // Use email as unique identifier
        {
          name, phone, password, gender, city, dob, age, height, weight,
          jobType, companyName, degree, institute, hobbies, image
        },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      res.json({ success: true, message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });
  
  // Set up a route for serving uploaded images
  app.use('/uploads', express.static('uploads'));
