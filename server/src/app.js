const express = require('express');
const mongoose = require('mongoose');
const productData = require('./models/userData');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://0.0.0.0:27017/productdata')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.log(err);
});


app.get('/getusers', (req, res) => {
    productData.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err))

});



// productData.create([
//     {
//         name: 'Men Printed Round Neck Pure Cotton White T-Shirt',
//         description: "This T-shirt is designed with an oversized and boxy fit, offering both comfort and contemporary fashion. It's tailored for individuals who appreciate spacious clothing without sacrificing style. The relaxed, roomy silhouette ensures unrestricted movement and a trendy, wearable feel. Whether you're lounging at home or heading out, this T-shirt combines the comfort of oversized clothing while maintaining a modern sense of fashion.",
//         price: 550,
//         image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/j/n/s-t-26-1st-bukkl-original-imagq9gtdzs5gy6n.jpeg?q=70',
//         category: 'Men',
//         categories: 'Tshirts',
//         stock: 100,
//     },
//     {
//         name: 'Men Printed Round Neck Pure Cotton White T-Shirt',
//         description: "This T-shirt is designed with an oversized and boxy fit, offering both comfort and contemporary fashion. It's tailored for individuals who appreciate spacious clothing without sacrificing style. The relaxed, roomy silhouette ensures unrestricted movement and a trendy, wearable feel. Whether you're lounging at home or heading out, this T-shirt combines the comfort of oversized clothing while maintaining a modern sense of fashion.",
//         price: 550,
//         image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/x/9/q/l-hs3-whitep-prnt-lauren-adams-original-imagnb39wxhda5hf.jpeg?q=70',
//         category: 'Men',
//         categories: 'Tshirts',
//         stock: 100,
//     },
//     {
//         name: 'Men Printed Round Neck Pure Cotton White T-Shirt',
//         description: "This T-shirt is designed with an oversized and boxy fit, offering both comfort and contemporary fashion. It's tailored for individuals who appreciate spacious clothing without sacrificing style. The relaxed, roomy silhouette ensures unrestricted movement and a trendy, wearable feel. Whether you're lounging at home or heading out, this T-shirt combines the comfort of oversized clothing while maintaining a modern sense of fashion.",
//         price: 550,
//         image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/y/c/-original-imaghhu3z3ykgyzk.jpeg?q=70',
//         category: 'Men',
//         categories: 'Tshirts',
//         stock: 100,
//     },
//     {
//         name: 'Men Printed Round Neck Pure Cotton White T-Shirt',
//         description: "This T-shirt is designed with an oversized and boxy fit, offering both comfort and contemporary fashion. It's tailored for individuals who appreciate spacious clothing without sacrificing style. The relaxed, roomy silhouette ensures unrestricted movement and a trendy, wearable feel. Whether you're lounging at home or heading out, this T-shirt combines the comfort of oversized clothing while maintaining a modern sense of fashion.",
//         price: 550,
//         image: 'https://rukminim2.flixcart.com/image/612/612/jsc3ssw0/t-shirt/u/d/z/xl-2475722-roadster-original-imafdwq3hxhdhmvm.jpeg?q=70',
//         category: 'Men',
//         categories: 'Tshirts',
//         stock: 100,
//     },
//     {
//         name: 'Men Embellished Cotton Rayon A-line Kurta',
//         description: "This T-shirt is designed with an oversized and boxy fit, offering both comfort and contemporary fashion. It's tailored for individuals who appreciate spacious clothing without sacrificing style. The relaxed, roomy silhouette ensures unrestricted movement and a trendy, wearable feel. Whether you're lounging at home or heading out, this T-shirt combines the comfort of oversized clothing while maintaining a modern sense of fashion.",
//         price: 950,
//         image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/s/h/p/xl-vmmk255ma-vm-original-imagtev2cfzq5yhk.jpeg?q=70',
//         category: 'Men',
//         categories: 'kurtas',
//         stock: 100,
//     },
//     {
//         name: 'Men Embellished Cotton Rayon A-line Kurta',
//         description: "This T-shirt is designed with an oversized and boxy fit, offering both comfort and contemporary fashion. It's tailored for individuals who appreciate spacious clothing without sacrificing style. The relaxed, roomy silhouette ensures unrestricted movement and a trendy, wearable feel. Whether you're lounging at home or heading out, this T-shirt combines the comfort of oversized clothing while maintaining a modern sense of fashion.",
//         price: 950,
//         image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/u/u/8/xl-vlsd-a0ltph-unifav-original-imaghmvqg3tm6daf.jpeg?q=70',
//         category: 'Men',
//         categories: 'kurtas',
//         stock: 100,
//     },
//     {
//         name: 'Men Embellished Cotton Rayon A-line Kurta',
//         description: "This T-shirt is designed with an oversized and boxy fit, offering both comfort and contemporary fashion. It's tailored for individuals who appreciate spacious clothing without sacrificing style. The relaxed, roomy silhouette ensures unrestricted movement and a trendy, wearable feel. Whether you're lounging at home or heading out, this T-shirt combines the comfort of oversized clothing while maintaining a modern sense of fashion.",
//         price: 950,
//         image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/e/r/x/m-sky-kurta-lilen-spoque-original-imagtrfsrddfh4yj.jpeg?q=70',
//         category: 'Men',
//         categories: 'kurtas',
//         stock: 100,
//     },
//     {
//         name: 'Men Regular Mid Rise Black Jeans',
//         description: "This T-shirt is designed with an oversized and boxy fit, offering both comfort and contemporary fashion. It's tailored for individuals who appreciate spacious clothing without sacrificing style. The relaxed, roomy silhouette ensures unrestricted movement and a trendy, wearable feel. Whether you're lounging at home or heading out, this T-shirt combines the comfort of oversized clothing while maintaining a modern sense of fashion.",
//         price: 1550,
//         image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/6/6/g/32-aldnvslfa23233-allen-solly-original-imagugtyhtzs3zg4.jpeg?q=70',
//         categories: 'jeans',
//         category: 'Men',
//         stock: 100,
//     },
//     {
//         name: 'Men Regular Mid Rise Black Jeans',
//         description: "This T-shirt is designed with an oversized and boxy fit, offering both comfort and contemporary fashion. It's tailored for individuals who appreciate spacious clothing without sacrificing style. The relaxed, roomy silhouette ensures unrestricted movement and a trendy, wearable feel. Whether you're lounging at home or heading out, this T-shirt combines the comfort of oversized clothing while maintaining a modern sense of fashion.",
//         price: 1550,
//         image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/6/z/y/32-mss22mjn332-metronaut-original-imagq44qgdydepkh.jpeg?q=70',
//         categories: 'jeans',
//         category: 'Men',
//         stock: 100,
//     },
//     {
//         name: 'Men Regular Mid Rise Black Jeans',
//         description: "This T-shirt is designed with an oversized and boxy fit, offering both comfort and contemporary fashion. It's tailored for individuals who appreciate spacious clothing without sacrificing style. The relaxed, roomy silhouette ensures unrestricted movement and a trendy, wearable feel. Whether you're lounging at home or heading out, this T-shirt combines the comfort of oversized clothing while maintaining a modern sense of fashion.",
//         price: 1550,
//         image: 'https://rukminim2.flixcart.com/image/612/612/kpcy5jk0/jean/m/6/b/36-13490636-mast-harbour-original-imag3hucbspwcmp4.jpeg?q=70',
//         categories: 'jeans',
//         category: 'Men',
//         stock: 100,
//     },
// ])


app.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
})