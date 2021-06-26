const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PostModel = require('./models/Posts')

mongoose.connect("mongodb+srv://admin:abunasimlomani@cluster0.qijdl.mongodb.net/retroBlogDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
)

app.use(cors());
app.use(express.json());


app.post('/addpost', async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const banner = req.body.banner;
    const author = req.body.author;
    const tags = req.body.tags;

    console.log(title, description, banner, author, tags)
    const post = new PostModel({ title: title, description: description, banner: banner, author: author, tags: tags, date: new Date()})
    await post.save();
    res.send("Success Inserted")
})

app.get('/posts', async (req, res) => {
    PostModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result)
        }
    })
})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await PostModel.findByIdAndRemove(id).exec()
    res.send("Item Deleted")
})

app.listen(4000, () => {
    console.log("connected")
})