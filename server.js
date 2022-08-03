const express=require("express");
const path=require("path");
const cors=require("cors");
const app=express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer=require('multer');

app.set('views', path.join(__dirname, 'views'));

app.use('/assets',express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '/public')));


//Create connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'job_db'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

//multer
var imagename='';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public');
    },
    filename: (req, file, cb) => {
        console.log(file);

   imagename=Date.now() + path.extname(file.originalname)+'';
        cb(null, imagename);
    }
});
const fileFilter = (req, file, cb) => {
    if (true || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

//route for applicants page/////////////////////////

app.get('/showapplicants',(req, res) => {
  let sql = "select * from product,applied,register where product.product_id=applied.customer_id and applied.customer_name=register.username";
  // let sql="select * from product"
  console.log(sql);
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
     res.json(results);
    //  console.log(data);
    console.log(results);
     console.log("hello");

   
  });
});
/////route for invitation
app.post('/invitation',(req, res) => {
  let sql = "insert into invited set ?";
  // let sql="select * from product"
  let data = {job_id: req.body.job_id, customer_name: req.body.customer_name};

  console.log(sql);
  let query = conn.query(sql,data, (err, results) => {
    if(err) throw err;
     res.json(results);
    //  console.log(data);
    console.log(results);
     console.log("hello");

   
  });
});


//route for homepage
app.get('/showproduct',(req, res) => {
  let sql = "SELECT * FROM product";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
     res.json(results);
    //  console.log(data);
   
  });
});

//route for homepage
app.get('/showcart',(req, res) => {
  console.log("jas")
  let sql = "SELECT product.product_id,product_name,product_price,cart.qty,product.product_image FROM product,cart where product.product_id=cart.product_id";
  
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results)
     res.json(results);
   
  });
});

//route for homepage
app.post('/showstatus',(req, res) => {
  console.log("jas")
  let u = req.body.customer_name;
  console.log(u);
  let sql = "select * from invited where customer_name='"+u+"'";
  
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results)
     res.json(results);
   
  });
});


app.get('/productadd',(req, res) => {
     res.render("product_a");
  });


//route for insert data
app.post('/saveproduct',upload.single('file'),(req, res) => {
  let data = {job_name: req.body.job_name, job_req: req.body.job_req, job_exp:req.body.job_exp, job_loc:req.body.job_loc};
console.log(data);
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    
    let q = conn.query("select * from product", (err, results) => {
      if(err) throw err;
      res.json(results);
    });



  });
});

//route for register
app.post('/register',upload.single('file'),(req, res) => {
  let data = {username: req.body.username, password: req.body.password, firstName:req.body.firstName, lastName:req.body.lastName, contact:req.body.contact, email:req.body.email,type:'customer',image_name:imagename};
console.log(data);
  let sql = "INSERT INTO register SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    
    // let q = conn.query("select * from product", (err, results) => {
    //   if(err) throw err;
    //   res.json(results);
    // }
    // );



  });
});




 

 //route for delete
app.get('/productdelete/:id',function(req,res) {	
	const id=req.params.id;
	console.log(id);
 let sql = "DELETE FROM product WHERE product_id="+id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/showproduct');
  });
});


app.get('/productedit/:id',function(req,res) {	
	const id=req.params.id;
	console.log(id);
 let sql = "select *  FROM product WHERE product_id="+id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.json(results);
  });
});

app.post('/productaddcart',function(req,res) {	
    let data = { customer_id: req.body.id, customer_name: req.body.name}
    console.log(data);
    let sql = "INSERT INTO applied SET ?";

    let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    console.log("done");
    res.json(results);
      });


});

app.post('/invitation',function(req,res) {	
  let data = { job_id: req.body.id, customer_name: req.body.name}
  console.log(data);
  let sql = "INSERT INTO invited SET ?";

  let query = conn.query(sql, data,(err, results) => {
  if(err) throw err;
  console.log("done");
  res.json(results);
    });


});

//route for update data
app.post('/update',(req, res) => {
  let sql = "UPDATE product SET  job_name='"+req.body.name+"', job_req='"+req.body.req+"' , job_exp='"+req.body.exp+"', job_loc='"+req.body.loc+"' WHERE product_id="+req.body.id;
 console.log(sql);
 let query = conn.query(sql, (err, results) => {
    if(err) throw err;
     res.redirect('/showproduct');
  });
});

//route for update data
app.post('/updatecart',(req, res) => {

if(req.body.qty >0)
 { let sql = "UPDATE cart SET qty="+req.body.qty +" WHERE product_id="+req.body.id;
 console.log(sql);
 let query = conn.query(sql, (err, results) => {
  if(err) throw err;
  res.json({"data":"ok report"});
});
 }
 else
 {
  let sql = "DELETE FROM cart WHERE product_id="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;

    res.redirect("/showcart");

  });

 }
 
});

app.post('/login',(req, res) => {
  let sql = "select * from register where username='"+req.body.username+"' and password='"+req.body.password+"'";
 console.log(sql);
 let query = conn.query(sql, (err, results) => {
    if(err) throw err;
     res.json(results);
  });
});


// async and await associated to promise for synchronous process

app.post('/payment',async (req, res) => {


  //console.log(req.body.products);
let data1 = {customer_name: req.body.cname, amount:req.body.amount};

 let sql = "INSERT INTO bill SET ?";
// await db.query(queryString).catch(err => {throw err}); 
let promise = new Promise((resolve, reject) => {

  conn.query(sql,data1, async (err, resultSet) => { 
    if (err) reject(err); 
    resolve(resultSet);
  });
  
});
let result = await promise;
console.log(result);
console.log("hello");

console.log("done promise");
   let data = {customer_name: req.body.cname, cardno: req.body.cardno,amount:req.body.amount};
console.log(data);
   sql = "INSERT INTO payment SET ?";
   query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    
  
  });

var billno=10;
let s = "select max(billno) 'billno' FROM bill ";
let promise1 = new Promise((resolve, reject) => {


   query =  conn.query(s, async (err, results) => {
    if(err) throw err;
     resolve(results);
      
     //console.log("billno="+billno)
  });
});
let myresult = await promise1;
billno = myresult[0].billno;
let o = JSON.parse(req.body.products);

console.log("biilno="+billno)

console.log(o);
for(x in o)
  {

console.log(o[x]);
  let sql = "INSERT INTO bill_items values("+billno+","+o[x].product_id+","+o[x].qty+","+o[x].product_price+") ";
 console.log(sql);
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    
   });

 }




});



//route for homepage
app.post('/bill',(req, res) => {
  console.log("generating bill")
  let cname = req.body.cname;
  console.log(cname);
  let sql = "select bill.billno,customer_name,amount,product.product_id,product_name,purchase_qty,bill_items.product_price from bill,bill_items,product where bill.billno = bill_items.billno and bill_items.product_id=product.product_id and customer_name='raman'";
  
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results)
     res.json(results);
   
  });
});






app.listen(4200,()=>{
    console.log(`express server running on 4200`);
});
