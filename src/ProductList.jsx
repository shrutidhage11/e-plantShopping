import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice.jsx';
import './ProductList.css';
const plants = [
 {id:'snake',name:'Snake Plant',price:320,category:'Air Purifying',description:'Architectural leaves, easy-going care.',emoji:'🌿',color:'#e5eddf'},
 {id:'peace',name:'Peace Lily',price:450,category:'Air Purifying',description:'Elegant blooms and deep green foliage.',emoji:'🌱',color:'#e8eee1'},
 {id:'spider',name:'Spider Plant',price:280,category:'Air Purifying',description:'A cheerful cascading classic.',emoji:'🪴',color:'#e5eee5'},
 {id:'pothos',name:'Golden Pothos',price:350,category:'Air Purifying',description:'Trailing vines with golden accents.',emoji:'🍃',color:'#f0ead8'},
 {id:'rubber',name:'Rubber Plant',price:520,category:'Air Purifying',description:'Glossy leaves with a bold presence.',emoji:'🌳',color:'#e9e9d9'},
 {id:'zz',name:'ZZ Plant',price:490,category:'Air Purifying',description:'Low maintenance and beautifully sculptural.',emoji:'🌿',color:'#e2eadc'},
 {id:'echeveria',name:'Echeveria',price:220,category:'Succulents',description:'A rosette-shaped sun lover.',emoji:'🌵',color:'#e9e5dc'},
 {id:'haworthia',name:'Haworthia',price:260,category:'Succulents',description:'Compact stripes for a sunny shelf.',emoji:'🌵',color:'#e3ebdf'},
 {id:'jade',name:'Jade Plant',price:300,category:'Succulents',description:'A long-lived plant with plump leaves.',emoji:'🪴',color:'#e8eddf'},
 {id:'aloe',name:'Aloe Vera',price:240,category:'Succulents',description:'A useful succulent with upright leaves.',emoji:'🌵',color:'#e5eddf'},
 {id:'sedum',name:'Burro’s Tail',price:380,category:'Succulents',description:'Soft trailing stems of rounded leaves.',emoji:'🌱',color:'#e7e9d9'},
 {id:'cactus',name:'Moon Cactus',price:190,category:'Succulents',description:'A colorful little desert companion.',emoji:'🌵',color:'#f0e4d9'},
 {id:'mint',name:'Mint',price:180,category:'Aromatic',description:'Fresh fragrance for kitchens and balconies.',emoji:'🌿',color:'#e0eddf'},
 {id:'lavender',name:'Lavender',price:420,category:'Aromatic',description:'Calming scent and delicate purple flowers.',emoji:'💜',color:'#e9e1ef'},
 {id:'rosemary',name:'Rosemary',price:310,category:'Aromatic',description:'A fragrant herb with needle-like leaves.',emoji:'🌿',color:'#e6ebdf'},
 {id:'basil',name:'Sweet Basil',price:200,category:'Aromatic',description:'A bright, leafy culinary favorite.',emoji:'🍃',color:'#e1eddf'},
 {id:'lemongrass',name:'Lemongrass',price:260,category:'Aromatic',description:'Fresh citrus notes and graceful blades.',emoji:'🌾',color:'#e9eddc'},
 {id:'thyme',name:'Thyme',price:230,category:'Aromatic',description:'Tiny leaves with a lovely herbal aroma.',emoji:'🌱',color:'#e5ebdf'}
];
export default function ProductList({onNavigate}) {
 const dispatch=useDispatch(); const cart=useSelector(s=>s.cart.items); const categories=[...new Set(plants.map(p=>p.category))];
 return <main className="catalog"><div className="catalog-heading"><div><p className="eyebrow">THE PLANT COLLECTION</p><h1>Find your <em>green</em>.</h1><p>Thoughtful plants for every corner of your home.</p></div><button className="outline-btn" onClick={()=>onNavigate('cart')}>View cart ↗</button></div>
 {categories.map(category=><section className="plant-category" key={category}><div className="category-heading"><h2>{category}</h2><span>{plants.filter(p=>p.category===category).length} plants</span></div><div className="plant-grid">{plants.filter(p=>p.category===category).map(p=>{const added=cart.some(i=>i.id===p.id);return <article className="plant-card" key={p.id}><div className="plant-photo" style={{background:p.color}}><span>{p.emoji}</span><small>PARADISE · {category.toUpperCase()}</small></div><div className="plant-info"><div><h3>{p.name}</h3><p>{p.description}</p></div><strong>₹{p.price}</strong></div><button className={added?'added-btn':'add-btn'} disabled={added} onClick={()=>dispatch(addToCart(p))}>{added?'✓ Added to Cart':'Add to Cart +'}</button></article>})}</div></section>)}
 <div className="catalog-bottom"><span>18 plants · 3 collections</span><button className="primary-btn" onClick={()=>onNavigate('cart')}>Go to Cart →</button></div></main>;
}
