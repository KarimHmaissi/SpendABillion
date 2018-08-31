export const toggleCategory = id => ({
  type: 'OPEN_CATEGORY',
  id,
});

export const closeCategory = () => ({
  type: 'CLOSE_CATEGORY',
});


export const buySomething = (amount, productId) => ({
  type: 'BUY_SOMETHING',
  amount,
  productId,
});
