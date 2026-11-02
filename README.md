# Temperature conversion examples

Small JavaScript and Python examples for learning Celsius/Fahrenheit conversion and checking the difference between a calculated value and its displayed text. There are no dependencies.

## Run the checks

Use Node.js for the JavaScript example:

```sh
node temperature.cjs
```

Use Python 3 for the Python example:

```sh
python3 temperature.py
```

Each command checks five known conversion pairs in both directions, repeating-decimal results, two-decimal display strings and a unit-swap example. A failed assertion stops the command.

## What to notice

- Celsius to Fahrenheit: `F = C × 9/5 + 32`.
- Fahrenheit to Celsius: `C = (F − 32) × 5/9`.
- The two scales have the same numerical value at −40.
- 350 °F is 530/3 °C mathematically, displayed here as 176.67 °C. Reusing that rounded label as the next input produces 350.006 °F on conversion back.
- Keep the unrounded numeric value for further arithmetic. Formatting a label is a separate operation.

The `1e-9` test tolerance is chosen for these small examples. The functions expect valid finite numeric inputs. A real input form needs its own parsing, blank-field handling and validation. Ordinary floating-point values also have representation and magnitude limits; an unrounded value is not a claim of arbitrary precision or measurement accuracy.

Formula reference: [NIST SI Units — Temperature](https://www.nist.gov/pml/owm/si-units-temperature).

Additional examples: [TempConvert's temperature formula and code guide](https://tempconvertnow.com/celsius-to-fahrenheit-code/).

## Maintainer and corrections

Prepared for Muhammad Asim, maintainer of TempConvert, with AI assistance. The executable examples were checked locally. Report a calculation issue with the input, units, expected result and observed result so it can be reproduced. The website's About page lists the maintainer's public contact.

## Reuse

The examples and README in this repository are licensed under the [MIT License](LICENSE).
