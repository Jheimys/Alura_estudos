
def fib_lista(max):
    num = []
    a, b = 0, 1
    while len(num) < max:
        num.append(b)
        a, b = b, a + b
    return num

for n in fib_lista(4):
    print(n)