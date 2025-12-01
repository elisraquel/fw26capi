module.exports=  ((app) => {
    app.post('/noticias/tipo/:tiponoticias', async(req, res) => {
        res.send(req.params.tiponoticias);
    })
})
