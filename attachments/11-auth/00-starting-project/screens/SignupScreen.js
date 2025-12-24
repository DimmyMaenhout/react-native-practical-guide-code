import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { createUser } from '../util/Auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { AuthContext } from '../store/auth-context';

function SignupScreen({ email, password }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function signupHandler() {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not create user, please your input and try again later.'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user...' />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
