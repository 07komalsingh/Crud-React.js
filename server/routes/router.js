const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");

router.post("/create", (req, res) => {
  console.log(req.body);

  const { name, email, age, mobile, work, add, desc } = req.body;

  if (!name || !email || !age || !mobile || !work || !add || !desc) {
    res.status(422).json("plz fill all data");
  }

  try {
    conn.query("SELECT * FROM USERS WHERE email = ?", email, (err, result) => {
      if (result.length) {
        return res.status(422).json("This  data already exists");
      } else {
        conn.query(
          "INSERT INTO users SET ?",
          { name, email, age, mobile, work, add, desc },
          (err, result) => {
            if (err) {
              console.log("err" + err);
            } else {
              return res.status(201).json(req.body);
            }
          }
        );
      }
    });
  } catch (error) {
    return res.status(422).json("error");
  }
});

router.get("/getusers", (req, res) => {
  conn.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.status(422).json("nodata available");
    } else {
      return res.status(201).json(result);
    }
  });
});

//user delete api
// router.delete("/deleteuser/:id", (req, res) => {

//   const {id} = req.params;
//   conn.query("DELETE * FROM users WHERE id = ?",id, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(404).json("nodata available");
//     } else {
//       res.status(201).json(result);
//     }
//   });
// });

router.delete("/deleteuser/:id", (req, res) => {
  const { id } = req.params;
  
  conn.query("DELETE FROM users WHERE id = ?", [id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(404).json("No data available");
    } else {
      res.status(201).json(result);
    }
  });
});

//get single user
router.get("/induser/:id", (req, res) => {

  const {id} = req.params;
  conn.query("SELECT * FROM users WHERE id = ?",id, (err, result) => {
    if (err) {
      res.status(422).json("nodata available");
    } else {
      res.status(201).json(result);
    }
  });
});

//UPDATE USER API

router.patch("/updateuser/:id", (req, res) => {

  const {id} = req.params;
  const data = req.body;
  conn.query("UPDATE users SET ? WHERE id = ?", [data,id], (err, result) => {
    if (err) {
      res.status(422).json({message:"error"});
    } else {
      res.status(201).json(result);
    }
  });
});


module.exports = router;


///hello


