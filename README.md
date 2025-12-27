## Project overview

**trailer-evaluation-website** is a full-stack web project.

I built it using the technologies I learned during secondary education:
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP  
- **Database:** MySQL  

---

## Main flow
From the main page (`index1.html`), you can view trailers for **three movies**.  
To watch a trailer, simply click on a movie poster. The selected trailer plays in the video player.

**Demo (general view):**  
1) General view clip: https://github.com/bouka06/trailer-evaluation-website/blob/1fb7a776ddd949b68332afbdd9b6a1700964d2b9/Screen%20Recording%202025-12-26%20165421.mp4

---

## Evaluation page
The evaluation page allows a user to enter their details and rate a selected film.

- The user must log in using **email** and **password**. These details are verified against the **MySQL database**.  
  - ✅ If the account exists, the user can continue.  
  - ❌ If the details are not found in the database, the evaluation **fails** and is not saved.
- A **randomly generated string** is used as a simple captcha to verify the submission is not from a robot.
- The form includes validation: if any required information is wrong or missing, the related label turns **red**.
- The final evaluation score is calculated from the ratings, and **if the checkbox is ticked, the total result is doubled**.
- When everything is valid, the evaluation is saved to the database:
  - If the same user has **already evaluated the same film**, the existing evaluation is **updated** with the new one.
  - Otherwise, a **new evaluation** is inserted.

**Evaluation page media:**  
2) Evaluation page (error state screenshot): https://github.com/bouka06/trailer-evaluation-website/blob/52793293ee873cb06add8f051b0e64f6a24ede7d/Screenshot%202025-12-26%20174303.png  
3) Update flow (clip showing an evaluation updated): https://github.com/bouka06/trailer-evaluation-website/blob/0619c4e782a66947455668616196595928c462bd/Screen%20Recording%202025-12-26%20175856.mp4  
4) Insert flow (screenshot showing a new evaluation added): https://github.com/bouka06/trailer-evaluation-website/blob/c9300831b987f539bb4f1e5a6ed0bf4d4fe61e17/Screenshot%202025-12-26%20175941.png  

---

## Results page
The results page displays the **mean (average) rating** for each film title, calculated from the evaluations stored in the database.

**Results page screenshot:**  
5) Mean rating per title (results page): https://github.com/bouka06/trailer-evaluation-website/blob/593b338007afef764a52e800c335e049522aab6a/Screenshot%202025-12-27%20114108.png
