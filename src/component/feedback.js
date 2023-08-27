import React, { useState } from 'react';
import giff from './moving.gif';
import { Rating } from '@mui/material';
import { Star } from '@mui/icons-material';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [review, setReview] = useState('');
  const [sentiment, setSentiment] = useState(0); // Initialize sentiment as 0

  const handleSentimentChange = (event, newValue) => {
    // Map star ratings to corresponding sentiment descriptions
    const sentimentMap = {
      1: 'Bad',
      2: 'Good',
      3: 'Working Great',
      4: 'Extraordinary Good',
      5: 'Amazing',
    };

    // Update sentiment and review based on star rating
    setSentiment(newValue);
    setReview(sentimentMap[newValue]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      gender,
      review,
      sentiment,
    };

    try {
      const response = await fetch('/api/submitFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Display a success message to the user
        alert('Feedback submitted successfully!');
      } else {
        // Display an error message
        alert('Error submitting feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

    return (
        <div>
            <img
  src={giff}
  alt="Hello Future GIF"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  }}
/>
            <h2 style={{color: 'white'}}>Submit Feedback</h2>
            <form style={{background:'transparent', color:'black'}} onSubmit={handleSubmit}>
                <label style={{color:'white'}} >
                    Name:
                    <input style={{color:'black'}}  type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label style={{color:'white'}}>
                    Email:
                    <input style={{color:'black'}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label style={{ color: 'white', marginBottom: '10px' }}>
            Gender:
            <select
              style={{ color: 'black', width: 'auto', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option style={{ color: 'black' }} value="male">
                Male
              </option>
              <option style={{ color: 'black' }} value="female">
                Female
              </option>
              <option style={{ color: 'black' }} value="other">
                Other
              </option>
            </select>
          </label>

                <br />
                <label style={{color:'white'}}>
                    Review:
                    <textarea style={{color:'black', width:'500px', height:'100px'}} value={review} onChange={(e) => setReview(e.target.value)} />
                </label>
                <label style={{ color: 'white', marginBottom: '10px' }}>
          Sentiment:
          <Rating
            name="sentiment-rating"
            value={sentiment}
            onChange={handleSentimentChange}
            emptyIcon={<Star style={{ color: 'white' }} fontSize="inherit" />}
            icon={<Star style={{ color: 'gold' }} fontSize="inherit" />}
            hoverIcon={<Star style={{ color: 'gold' }} fontSize="inherit" />}
            style={{ color: 'white' }}
          />
        </label>

                <br />
                <button type="submit">Submit Feedback</button>
                

            </form>
        </div>
    );
}

export default FeedbackForm;