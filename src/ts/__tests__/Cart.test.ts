import Cart from '../service/Cart';
import Movie from '../domain/Movie'

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('should add movie to Cart', () => {
    const cart = new Cart();
    cart.add(new Movie(1009, 'Avengers', 99, 2012, 'USA', 'Fantasy , Action, Adventure', '137 minutes', 'Avengers Assemble!'))
    expect(cart.items).toEqual([{
        id: 1009,
        name: 'Avengers',
        price: 99,
        dateRelease: 2012,
        country: 'USA',
        genre: 'Fantasy , Action, Adventure',
        time: '137 minutes',
        slogan: "Avengers Assemble!"
    }])
})