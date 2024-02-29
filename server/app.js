const express = require('express');
const mongoose = require('mongoose');
const productData = require('./src/models/userData');
const cors = require('cors');
const dotenv = require('dotenv')

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.log(err);
    });


app.get('/' , (req, res) => {
    res.send("Hello World")
})

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
//         name: 'Woven Banarasi Jacquard Saree  (Green)',
//         description: "The Samah salwar suit material is made from a premium cotton blend fabric. This high-quality fabric offers a perfect balance of softness, breathability, and durability, ensuring comfort throughout the day. The blend further enhances the fabric properties, making it suitable for various weather conditions and maintaining the vibrancy of the prints even after multiple washes. The comfort and luxury of this fabric come together to help you create your personalised and stylish ensemble with exquisite unstitched suit material.",
//         price: 1950,
//         image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sari/u/u/c/free-drja-174-ananya-unstitched-original-imagxm25hhgdkvhh.jpeg?q=70&crop=false',
//         categories: 'saree',
//         category: 'Women',
//         stock: 100,
//     },
//     {
//         name: 'Unstitched Cotton Blend Salwar Suit Material Floral Print',
//         description: "The Samah salwar suit material is made from a premium cotton blend fabric. This high-quality fabric offers a perfect balance of softness, breathability, and durability, ensuring comfort throughout the day. The blend further enhances the fabric properties, making it suitable for various weather conditions and maintaining the vibrancy of the prints even after multiple washes. The comfort and luxury of this fabric come together to help you create your personalised and stylish ensemble with exquisite unstitched suit material.",
//         price: 3550,
//         image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/fabric/j/a/k/yes-2-m-unstitched-2-10m-1175d1274-samah-original-imagkdepkevgnr8p.jpeg?q=70&crop=false',
//         categories: 'salwar',
//         category: 'Women',
//         stock: 100,
//     },
//     {
//         name: 'Embellished, Striped, Self Design Bollywood Satin Saree  (Black)',
//         description: "The Samah salwar suit material is made from a premium cotton blend fabric. This high-quality fabric offers a perfect balance of softness, breathability, and durability, ensuring comfort throughout the day. The blend further enhances the fabric properties, making it suitable for various weather conditions and maintaining the vibrancy of the prints even after multiple washes. The comfort and luxury of this fabric come together to help you create your personalised and stylish ensemble with exquisite unstitched suit material.",
//         price: 2550,
//         image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sari/p/u/q/free-md-wb-sat6001-4-anand-sarees-no-blouse-original-imagqummabtfchqj.jpeg?q=70&crop=false',
//         categories: 'saree',
//         category: 'Women',
//         stock: 100,
//     },
//     {
//         name: 'Women Striped Viscose Rayon Straight Kurta  (Yellow, Orange)',
//         description: "The Samah salwar suit material is made from a premium cotton blend fabric. This high-quality fabric offers a perfect balance of softness, breathability, and durability, ensuring comfort throughout the day. The blend further enhances the fabric properties, making it suitable for various weather conditions and maintaining the vibrancy of the prints even after multiple washes. The comfort and luxury of this fabric come together to help you create your personalised and stylish ensemble with exquisite unstitched suit material.",
//         price: 1950,
//         image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/w/0/5/xxl-pale-yellow-tie-die-straight-prisca-original-imagw2arkhtgf8y9.jpeg?q=70&crop=false',
//         categories: 'kurti',
//         category: 'Women',
//         stock: 100,
//     },
//     {
//         name: 'Women Pure Cotton Kurta Pant Dupatta Set',
//         description: "The Samah salwar suit material is made from a premium cotton blend fabric. This high-quality fabric offers a perfect balance of softness, breathability, and durability, ensuring comfort throughout the day. The blend further enhances the fabric properties, making it suitable for various weather conditions and maintaining the vibrancy of the prints even after multiple washes. The comfort and luxury of this fabric come together to help you create your personalised and stylish ensemble with exquisite unstitched suit material.",
//         price: 1950,
//         image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/9/b/j/xl-3333-kt-enterprise-original-imagrq6mg2a8fdtq.jpeg?q=70&crop=false',
//         categories: 'kurta',
//         category: 'Women',
//         stock: 100,
//     },
// ])


app.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
})