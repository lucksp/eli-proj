import { colorModification } from '..';

describe('colorModification', () => {
  it('colorModification#invert', () => {
    const invert = colorModification.invert([255, 255, 255]);

    expect(invert).toMatchInlineSnapshot(`
[
  0,
  0,
  0,
]
`);
  });
  it('colorModification#invert handles less than 255', () => {
    const invert = colorModification.invert([100, 255, 255]);

    expect(invert).toMatchInlineSnapshot(`
[
  155,
  0,
  0,
]
`);
  });

  it('handles hex', () => {
    expect(colorModification.invert('#fefefe')).toMatchInlineSnapshot(`"#010101"`);
  });
});
