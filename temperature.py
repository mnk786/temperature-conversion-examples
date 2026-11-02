def c_to_f(c):
    return c * 9 / 5 + 32


def f_to_c(f):
    return (f - 32) * 5 / 9


# This tolerance is for the small reference values below.
for c, f in [(0, 32), (100, 212), (-40, -40), (-10.5, 13.1), (37, 98.6)]:
    assert abs(c_to_f(c) - f) < 1e-9
    assert abs(f_to_c(f) - c) < 1e-9

assert abs(f_to_c(350) - 530 / 3) < 1e-9
assert abs(f_to_c(0) - (-160 / 9)) < 1e-9
assert f"{f_to_c(350):.2f}" == "176.67"
assert f"{f_to_c(0):.2f}" == "-17.78"

raw_c = f_to_c(350)
assert f"{c_to_f(raw_c):.2f}" == "350.00"
assert f"{c_to_f(float(f'{raw_c:.2f}')):.3f}" == "350.006"

print("Python temperature reference, display and swap checks passed.")
