// backend/controllers/authController.js

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('540798998843-eqhne287gon8r8tv4297irt1t75kgnu1.apps.googleusercontent.com');  // Your client ID

const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '540798998843-eqhne287gon8r8tv4297irt1t75kgnu1.apps.googleusercontent.com',  // Your client ID
    });

    const payload = ticket.getPayload();
    const { name, email, picture } = payload;
    console.log('user',payload)
    // You can now check if the user exists in your database, create a new user, or do any other logic
    // For example:
    // const user = await User.findOne({ email });
    // if (!user) {
    //   // Create a new user
    // }

    res.json({
      success: true,
      message: 'User authenticated successfully',
      user: {
        name,
        email,
        picture,
      },
    });
  } catch (error) {
    console.error('Error during Google authentication:', error);
    res.status(400).json({
      success: false,
      message: 'Invalid token',
    });
  }
};

module.exports = { googleLogin };
