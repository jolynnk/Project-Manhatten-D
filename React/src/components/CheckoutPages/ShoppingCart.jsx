import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingContext from '../../context/ShoppingContext';

const ShoppingCart = (props) => {
	const shoppingCtx = useContext(ShoppingContext);
	['Bags', 'Shoes', 'Accessories'];
	const { shoppingCart } = shoppingCtx;

	const calculateTotal = () => {
		return shoppingCart.reduce((total, item) => total + item.price, 0);
	};

	const removeFromCart = (index) => {
		return shoppingCart.splice(index, 0);
	};
	return (
		<>
			<Typography
				sx={{ fontWeight: 'bold', color: 'grey', textAlign: 'center' }}>
				Your Swag
			</Typography>

			{shoppingCart.map((item, index) => (
				<>
					<Typography sx={{ color: 'grey', textAlign: 'center' }}>
						{item.name}
					</Typography>
					<Typography sx={{ color: 'grey', textAlign: 'center' }}>
						${item.price}
					</Typography>
					<Button onClick={() => removeFromCart(index)}>
						Remove From Cart
					</Button>
					<Typography>Item Total: ${calculateTotal()}</Typography>
				</>
			))}
			<div style={{ textAlign: 'center' }}>
				Total Order Cost: ${calculateTotal()}
			</div>
			<Button variant='contained'>
				<Link
					to='/'
					style={{ textDecoration: 'none' }}>
					<Typography sx={{ color: 'gray' }}>browse more</Typography>
				</Link>
			</Button>

			<Button variant='contained'>
				<Link
					to='checkout'
					style={{ textDecoration: 'none' }}>
					<Typography sx={{ color: 'gray' }}>Check out</Typography>
				</Link>
			</Button>
		</>
	);
};

export default ShoppingCart;
