import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [traindetails, setTraindetails] = useState([]);
  const [error,setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/train/getall");
      setTraindetails(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    <table class="styled-table">
    <thead>
        <tr>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Train Number</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
    {
      traindetails.map(
        (train)=>{
          return
          ( <tr>
            <td>{train.trainName}</td>
            <td>{train.trainNumber}</td>
            <td>{train.departureTime}</td>
            <td>{train.price}</td>
        </tr>
        );
        }
      )
    }
      
    </tbody>
</table>
    </div>
  );
}
