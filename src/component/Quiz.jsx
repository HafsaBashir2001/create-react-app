import React, { useState } from 'react';
import './quiz.css'

export  const SkincareQuiz = () => {
    
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: ''
    });
    // const handleAnswerChange = (question, answer) => {
    //     setAnswers(prevAnswers => ({
    //       ...prevAnswers,
    //       [question]: answer
    //     }));
    //   };
    const [result, setResult] = useState('');
    

    const handleAnswerSelect = (event) => {
        setAnswers({
            ...answers,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

       // Calculate skin type based on user's answers
    const { q1, q2, q3, q4, q5, q6, q7 } = answers;
    const score = {
      oily: 0,
      combination: 0,
      normal: 0,
      dry: 0,
    };
    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7) {
      setResult('Please answer all questions to determine your skin type');
    } else {
      // Add existing code here
  

    if (q1 === 'Enlarged pores, blackheads in the T-zone') {
      score.combination += 1;
    } else if (q1 === 'Nothing bothers me') {
      score.normal += 1;
    } else if (q1 === 'Dryness and flakiness') {
      score.dry += 1;
    } else {
      score.oily += 1;
    }

    if (q2 === 'Yes, very much and all over the face') {
      score.oily += 1;
    } else if (q2 === "I don't see them at all") {
      score.dry += 1;
    } else if (q2 === 'Barely noticeable') {
      score.normal += 1;
    } else {
      score.combination += 1;
    }

    if (q3 === 'Oily shine all over the face appears in just 2-3 hours') {
      score.oily += 1;
    } else if (q3 === 'Everything is very comfortable. The skin is not dry and there is no oily shine') {
      score.normal += 1;
    } else if (q3 === 'Closer to lunch, the skin dries out, there is a feeling of tightness and you want to apply cream') {
      score.dry += 1;
    } else {
      score.combination += 1;
    }

    if (q4 === 'Constantly. There are a lot of them') {
      score.oily += 1;
    } else if (q4 === 'Sometimes they can appear mainly in the T-zone') {
      score.combination += 1;
    } else if (q4 === '1-2 times a month') {
      score.normal += 1;
    } else {
      score.dry += 1;
    }

    if (q5 === 'Not at all') {
      score.dry += 1;
    } else if (q5 === 'No, or if very little') {
      score.normal += 1;
    } else if (q5 === 'Only in the T-zone') {
      score.combination += 1;
    } else {
      score.oily += 1;
    }
    if (q6 === 'The cream is absorbed instantly, as if it had never been applied.') {
        score.dry += 1;
    } else if (q6 === 'Everything is super comfortable') {
        score.normal += 1;
    } else if (q6 === 'The forehead and nose will be very oily, in other areas everything is fine') {
        score.combination += 1;
    } else {
        score.oily += 1;
    }
    if (q7 === 'Frequent peeling and irritation') {
        score.dry += 1;
    } else if (q7 === 'No problems, my skin is glowing') {
        score.normal += 1;
    } else if (q7 === 'Uneven tone, skin dries and shines at the same time') {
        score.combination += 1;
    } else {
        score.oily += 1;
    }
  }
    let skinType = '';
    if (score.oily > 3) {
      skinType = 'oily';
    } else if (score.combination > 3) {
      skinType = 'combination';
    } else if (score.normal > 3) {
      skinType = 'normal';
    } else {
      skinType = 'dry';
    }
    
    setResult(`Your skin type is ${skinType}`);
  

};

    return (
        <>
          <div className="container">
            <h1>Skincare Quiz</h1>
            <form className="quiz-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="q1">Question 1: What is your main skin concern?</label>
                <select id="q1" name="q1" onChange={handleAnswerSelect}>
                  <option value="">Select an option</option>
                  <option value="Enlarged pores, blackheads in the T-zone">Enlarged pores, blackheads in the T-zone</option>
                  <option value="Nothing bothers me">Nothing bothers me</option>
                  <option value="Dryness and flakiness">Dryness and flakiness</option>
                  <option value="Excessive oily shine, pimples, acne">Excessive oily shine, pimples, acne</option>
                </select>
              </div>
              <div>
                <label htmlFor="q2">Question 2: Do you have visible pores?</label>
                <select id="q2" name="q2" onChange={handleAnswerSelect}>
                  <option value="">Select an option</option>
                  <option value="Yes, very much and all over the face">Yes, very much and all over the face</option>
                  <option value="I don't see them at all">I don't see them at all</option>
                  <option value="Barely noticeable">Barely noticeable</option>
                  <option value="Only in the T-zone">Only in the T-zone</option>
                </select>
              </div>
              <div>
                <label htmlFor="q3">Question 3: How does your skin feel a few hours after washing your face?</label>
                <select id="q3" name="q3" onChange={handleAnswerSelect}>
                  <option value="">Select an option</option>
                  <option value="Oily shine all over the face appears in just 2-3 hours">Oily shine all over the face appears in just 2-3 hours</option>
                  <option value="Everything is very comfortable. The skin is not dry and there is no oily shine">Everything is very comfortable. The skin is not dry and there is no oily shine</option>
                  <option value="Closer to lunch, the skin dries out, there is a feeling of tightness and you want to apply cream">Closer to lunch, the skin dries out, there is a feeling of tightness and you want to apply cream</option>
                  <option value="There are oily shine only in some parts">There are oily shine only in some parts</option>
                </select>
              </div>
              <div>
                <label htmlFor="q3">Question 4: How often do you have breakouts?</label>
                <select id="q3" name="q3" onChange={handleAnswerSelect}>
                  <option value="">Select an option</option>
                  <option value="Constantly. There are a lot of them">Constantly. There are a lot of them</option>
                  <option value="Sometimes they can appear mainly in the T-zone">Sometimes they can appear mainly in the T-zone</option>
                  <option value="1-2 times a month">1-2 times a month</option>
                  <option value="Don't bother me">Don't bother me</option>
                </select>
              </div>
              <div>
                <label htmlFor="q3">Question 5 : Are you worried about pores on your face?</label>
                <select id="q3" name="q3" onChange={handleAnswerSelect}>
                  <option value="">Select an option</option>
                  <option value="Yes, very much and all over the face">Yes, very much and all over the face</option>
                  <option value="I don't see them at all">I don't see them at all</option>
                  <option value="Barely noticeable">Barely noticeable</option>
                  <option value="Raging in the t-zone">Raging in the t-zone</option>
                </select>
              </div>
              <div>
                <label htmlFor="q3">Question 6: If you apply a nourishing cream, how will your skin react?</label>
                <select id="q3" name="q3" onChange={handleAnswerSelect}>
                  <option value="">Select an option</option>
                  <option value="The cream is absorbed instantly, as if it had never been applied.">The cream is absorbed instantly, as if it had never been applied.</option>
                  <option value="The skin becomes oily, as if doused with oil">The skin becomes oily, as if doused with oil</option>
                  <option value="Everything is super comfortable">Everything is super comfortable</option>
                  <option value="The forehead and nose will be very oily, in other areas everything is fine">The forehead and nose will be very oily, in other areas everything is fine</option>
                </select>
              </div>
              <div>
                <label htmlFor="q3">Question 7: Are you satisfied with the overall appearance?</label>
                <select id="q3" name="q3" onChange={handleAnswerSelect}>
                  <option value="">Select an option</option>
                  <option value="No problems, my skin is glowing">No problems, my skin is glowing</option>
                  <option value="Lots of blackheads and oily blemishes">Lots of blackheads and oily blemishes</option>
                  <option value="Uneven tone, skin dries and shines at the same time">Uneven tone, skin dries and shines at the same time</option>
                  <option value="Frequent peeling and irritation">Frequent peeling and irritation</option>
                </select>
              </div>
             
              <button type="submit">Submit</button>
            </form>
            {result && <p className="result"> {result}</p>}
          </div>
        </>
      );
    }      