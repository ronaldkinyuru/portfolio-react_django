import { Card } from '@mui/material';
import Doctor from '../../assets/doc.jpg';

const WelcomeBack = () => {
  return (
    <Card style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '45vw', height: '32vh', backgroundColor: '#db3957', borderRadius: '15px', padding: '1vw' }}>
      <div style={{ flex: 1 }}>
        <h4>Welcome Back,</h4>
        <h2>Dr. Sammy Maina</h2>
        <h3>You have 10 appointments today!!!</h3>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Doctor} alt='account owner photo' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
      </div>
    </Card>
  );
}

export default WelcomeBack;
