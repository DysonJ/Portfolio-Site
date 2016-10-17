



module.exports = (app)=> {
  app.post('/mail/send', (req, res)=>{
    console.log('email send')





    app.mailer.send('email',{
      to:'hello@jondyson.com',
      subject:'Message',
      replyTo:req.body.email,
      body:req.body.text,
      name:req.body.name,
    }, function(err){
      if (err){
        console.log(err)
        res.send('Error sending message')
        return
      }
      res.send('email sent')
    })
  })
}
