import { describe, expect, it } from 'vitest'

describe('ingredient creation', () => {
  it('pass', () => {
    expect(true).toBe(true)
  })
  // it('should create an ingredient', () => {
  //     const newIngredient = createIngredient({
  //         name: 'salt',
  //         description: 'salt for taste',
  //         image_url: 'fake_url',
  //         is_verified: false,
  //     });
  //     if (newIngredient.isOk()) {
  //         expect(newIngredient.value.name).toBe('salt');
  //     }
  // });

  // it('short description error on create an ingredient', () => {
  //     const newIngredient = createIngredient({
  //         name: 'salt',
  //         description: 'salt',
  //         image_url: 'fake_url',
  //         is_verified: false,
  //     });
  //     if (newIngredient.isErr()) {
  //         expect(newIngredient.error.description![0]).toBe(
  //             'Invalid length: Expected >=6 but received 4',
  //         );
  //     }
  // });
})
