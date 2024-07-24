import React,{useState} from 'react'
import axios from 'axios';

function ServicePaymentManagement() {
    const [selectedService, setSelectedService] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:3000/servicepayment', { selectedService, price });
        // Reset form fields on successful submission
        setSelectedService('');
        setPrice('');
      } catch (error) {
        setError(error.response.data.message);
      }
    };
  
    return (
      <div>
        <h2>Service Payment Form</h2>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Selected Service:</label>
            <input type="text" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} />
          </div>
          <div>
            <label>Price:</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    );
  }
  

export default ServicePaymentManagement

