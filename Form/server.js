/**
 * This is a node server file to upload all the files
 * in the server and save the files' names in the
 * databse
 *
 * @author Mahesh Khattri A00432768
 */

/**
 * import all the required modules
 */
 const express = require("express");
 const cors = require("cors");
 const path = require("path");
 const mongoose = require("mongoose");
 const multer = require("multer");
 const axios = require("axios");
 const app = express();
 const PORT = process.env.PORT || 3099;
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 /**
  * declare the directory of the files used by the form
  */
 app.use(express.static(__dirname));
 app.use("/CSS", express.static(__dirname + "/CSS"));
 
 /**
  * import the database credentials in the
  * ./config/keys.MongoURI module
  */
 const db = require("./config/keys").MongoURI;
 mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("MongoDB connected"))
   .catch((err) => console.log(err));
 
 /**
  * multer defines the destination to store the uploaded files into the ugdev
  * server which is UPLOADS directory
  */
 var storeUploads = multer.diskStorage({
   destination: (req, file, cb) => {
     var dest = "UPLOADS";
     cb(null, dest);
   },
   /*
    create a filename to save in the ugdev server 
   */
   filename: (req, file, cb) => {
     let name_of_file =
       file.fieldname + "_" + Date.now() + path.extname(file.originalname);
     cb(null, name_of_file);
   },
 });
 
 /**
  * get all the inputs from the form and store the file types in
  * the predefined storeUploads and set the maxcount of each input
  * to 1
  */
 var file_upload = multer({ storage: storeUploads });
 var fileUpload = file_upload.fields([
   { name: "file1", maxCount: 1 },
   // { name: 'author', maxCount: 1 },
   // { name: 'chapter', maxCount: 1 },
   // { name: 'title', maxCount: 1 },
   // { name: 'story-content', maxCount: 1 },
   { name: "file2", maxCount: 1 },
   { name: "file3", maxCount: 1 },
   { name: "file4", maxCount: 1 },
   // { name: 'opt-1', maxCount: 1 },
   // { name: 'opt-2', maxCount: 1 },
   // { name: 'opt-3', maxCount: 1 },
   { name: "file5", maxCount: 1 },
   { name: "file5", maxCount: 1 },
   { name: "file6", maxCount: 1 },
   { name: "file7", maxCount: 1 },
   { name: "file8", maxCount: 1 },
   // { name: 'story-translation', maxCount: 1 }
 ]);
 var Book = mongoose.model("Book", mongoose.Schema({}), "bookstore");
 
 /**
  * send  the index.html file as response on get request
  */
 app.get("/", (req, res) => {
   res.sendFile('index.html');
 });
 
 /**
  * when the user submits the file, it first uploads the files
  * to the ugdev server and then saves the files' names in the
  * database
  * On success, it send the sucessful message with a link to
  * return to the home menu of the project
  * If found a error, it prints the error in the console
  */
 var allfiles;
 
 app.post("/uploadfile", fileUpload, (req, res) => {
   allfiles = req.files;
   var chapterNum = req.body.chapter;
   var titleName = req.body.title;
   var authorName = req.body.author;
 
   storyContent = req.body.storyContent;
   opt1 = req.body.opt1;
   opt2 = req.body.opt2;
   opt3 = req.body.opt3;
   storyTranslation = req.body.storyTranslation;
   var chapter = {};
   chapter["chapter"] = chapterNum;
   /**
    * if found a existing chapter in the database, push all the uploaded files'
    * names to the book collection
    */
   Book.collection
     .findOneAndUpdate(
       chapter,
       { $push: { pages: { filenames: makeFileNames() } } },
       { updateExiting: true }
     )
     .then((data) => {
       console.log(data);
       /**
        * if the chapter doesn't exist, create a new chapter and then push all the files'
        * names to the recently created chapter
        */
       if (data.value == null) {
         Book.collection
           .insertOne({
             chapter: chapterNum,
             author: authorName,
             title: titleName,
             pages: [],
           })
           .then(() => {
             console.log("inserted new chapters");
             Book.collection
               .findOneAndUpdate(
                 chapter,
                 { $push: { pages: { filenames: makeFileNames() } } },
                 { updateExiting: true }
               )
               .then((data) => {
                 console.log(data);
               });
           });
       }
     })
     .then(() =>
             res.send(`<p><h1>Congratulation! Files Uploaded Successfully</h1></p>
       <button onclick="location.href='http://ugdev.cs.smu.ca/~group17'" ><h3>Lets go back to the home menu</h3></button>
       `)
      // res.sendFile(__dirname +'/in.html')
     )
     .catch((err) => {
       console.error(err);
     });
 });
 
 /**
  *
  */
 app.get("/get", async (req, res) => {
  const records = await Book.find({});
  res.send(records)
 });
 
 /**
  * make a files array to store all the files' names
  *
  * @returns files
  */
 function makeFileNames() {
   let files = [];
   let fileName = "file";
   for (let i = 0; i < 8; i++) {
     fileName += i + 1;
     files[i] = allfiles[fileName][0].filename;
     fileName = "file";
   }
   files.push(storyContent, opt1, opt2, opt3, storyTranslation);
   console.log(files);
   return files;
 }
 
 app.listen(PORT, () => {
   console.log("Nodesjs server running on PORT: " + PORT);
 });
 