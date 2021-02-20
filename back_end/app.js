const express=require('express')
const bodyParser=require('body-parser')

const MongoClient =require('mongodb').MongoClient
const mongo_url='mongodb://localhost:27017';
const dbname="blog" 
var client =new MongoClient(mongo_url,{useNewUrlParser: true,useUnifiedTopology: true})
var ObjectId = require('mongodb').ObjectId

const app=express()

var cors = require('cors');
const { RSA_NO_PADDING } = require('constants');
app.use(cors())  //允许跨域资源访问



app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('./public'))

client.connect().then(()=>{
    console.log('mongodb connected')
    const db=client.db(dbname)
    const blogs=db.collection('blogs')
    const user =db.collection('user')

    app.get('/blog/:blogid',(req,res)=>{
        console.log(req.params.blogid)
        blogs.findOne({_id:ObjectId(req.params.blogid)}).then((result)=>{
            console.log(result)
            res.json(result)
        })
    })
    
    app.get('/test',(req,res)=>{
        // res.json({text:"test success"})
        res.send({text:'test success'})
        console.log('test success')
    })

    app.post('/newblog',(req,res)=>{        
        console.log(req.body)

        //这个拆分tags的方法蠢爆了，不过好处是他能用。在这做个标记，早期版本先凑合下以后来改
        var tag_string=req.body.tags
        var tag1='' ,tag2='', tag3=''
        var douhao=[null,null]
        for (let i = 0; i < tag_string.length; i++) {
            if(tag_string[i]==','){
                if(douhao[0]==null){
                    douhao[0]=i
                    continue
                }else{
                    douhao[1]=i
                    break
                }
            }
        }
        console.log(douhao)
        if(douhao[0]==null){
            tag1=tag_string
        }
        else{
            if (douhao[1]==null){
                tag1=tag_string.substring(0,douhao[0])
                tag2=tag_string.substring(douhao[0]+1)
            }
            else{
                tag1=tag_string.substring(0,douhao[0])
                tag2=tag_string.substring(douhao[0]+1,douhao[1])
                tag3=tag_string.substring(douhao[1]+1)
            }
        }


        blogs.insertOne({
            title:req.body.title,
            blogtext:req.body.blogtext,
            tags:[
                {text:tag1},{text:tag2},{text:tag3},
            ],
            img_src:'',
        },function(err){
            if(err!=null){res.send(err)}
            else{res.send('发布成功')}
        })

    })
})


console.log('server ready.listening on port 8080.and nodemon is active')

app.listen(8080)
